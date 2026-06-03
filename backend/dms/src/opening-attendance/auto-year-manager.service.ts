import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AutoYearManagerService {
  private readonly logger = new Logger(AutoYearManagerService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Runs daily at midnight to check if we need to create next academic year
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async checkAndCreateNextYear() {
    this.logger.log('🔍 Checking if next academic year needs to be created...');
    
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // 1-12
    const currentYear = today.getFullYear();

    // Get the active term to determine current academic year
    const activeTerm = await this.prisma.termSession.findFirst({
      where: { isActive: true },
    });

    if (!activeTerm) {
      this.logger.warn('⚠️  No active term found. Skipping auto-year creation.');
      return;
    }

    // Determine the academic year we're currently in
    let currentAcademicYearStart: number;
    
    if (currentMonth >= 9) {
      // Sep-Dec: We're in the first term of academic year starting this year
      currentAcademicYearStart = currentYear;
    } else {
      // Jan-Aug: We're in term 2 or 3 of academic year that started last year
      currentAcademicYearStart = currentYear - 1;
    }

    const nextAcademicYearStart = currentAcademicYearStart + 1;

    // Check if next academic year terms already exist
    const nextYearTerms = await this.prisma.termSession.findMany({
      where: {
        OR: [
          { name: 'Term 1', year: nextAcademicYearStart },
          { name: 'Term 2', year: nextAcademicYearStart + 1 },
          { name: 'Term 3', year: nextAcademicYearStart + 1 },
        ],
      },
    });

    if (nextYearTerms.length === 3) {
      this.logger.log(`✅ Academic year ${nextAcademicYearStart}-${nextAcademicYearStart + 1} already exists`);
      return;
    }

    // Create next academic year
    this.logger.log(`🚀 Creating academic year ${nextAcademicYearStart}-${nextAcademicYearStart + 1}...`);

    const terms = [
      {
        name: 'Term 1',
        year: nextAcademicYearStart,
        startDate: new Date(`${nextAcademicYearStart}-09-01`),
        endDate: new Date(`${nextAcademicYearStart}-12-18`),
        openingDate: new Date(`${nextAcademicYearStart}-09-01`),
      },
      {
        name: 'Term 2',
        year: nextAcademicYearStart + 1,
        startDate: new Date(`${nextAcademicYearStart + 1}-01-05`),
        endDate: new Date(`${nextAcademicYearStart + 1}-04-10`),
        openingDate: new Date(`${nextAcademicYearStart + 1}-01-05`),
      },
      {
        name: 'Term 3',
        year: nextAcademicYearStart + 1,
        startDate: new Date(`${nextAcademicYearStart + 1}-05-04`),
        endDate: new Date(`${nextAcademicYearStart + 1}-07-31`),
        openingDate: new Date(`${nextAcademicYearStart + 1}-05-04`),
      },
    ];

    try {
      for (const term of terms) {
        await this.prisma.termSession.create({
          data: {
            ...term,
            isActive: false,
            status: 'UPCOMING',
          },
        });
        this.logger.log(`✓ Created ${term.name} ${term.year}`);
      }

      this.logger.log(`✅ Successfully created academic year ${nextAcademicYearStart}-${nextAcademicYearStart + 1}!`);
    } catch (error) {
      this.logger.error('❌ Error creating next academic year:', error);
    }
  }

  /**
   * Manual trigger (can be called via API)
   */
  async manualCreateNextYear() {
    this.logger.log('🔧 Manual next year creation triggered...');
    await this.checkAndCreateNextYear();
  }
}
