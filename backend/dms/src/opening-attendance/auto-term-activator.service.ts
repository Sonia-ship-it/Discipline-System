import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AutoTermActivatorService {
  private readonly logger = new Logger(AutoTermActivatorService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Runs daily at midnight to check if term needs to be switched
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async checkAndActivateCurrentTerm() {
    this.logger.log('🔍 Checking if term needs to be activated...');
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for comparison

    try {
      // Find the term that should be active based on today's date
      const correctTerm = await this.prisma.termSession.findFirst({
        where: {
          startDate: {
            lte: today, // Start date is less than or equal to today
          },
          endDate: {
            gte: today, // End date is greater than or equal to today
          },
        },
        orderBy: {
          startDate: 'desc',
        },
      });

      if (!correctTerm) {
        this.logger.warn('⚠️  No term found for current date. Consider creating new academic year terms.');
        await this.checkAndCreateNextAcademicYear();
        return;
      }

      // Check if this term is already active
      const currentActiveTerm = await this.prisma.termSession.findFirst({
        where: { isActive: true },
      });

      if (currentActiveTerm?.id === correctTerm.id) {
        this.logger.log(`✅ ${correctTerm.name} ${correctTerm.year} is already active. No change needed.`);
        return;
      }

      // Switch to the correct term
      this.logger.log(`🔄 Switching from ${currentActiveTerm?.name || 'none'} to ${correctTerm.name} ${correctTerm.year}...`);

      // Deactivate all terms
      await this.prisma.termSession.updateMany({
        data: { isActive: false },
      });

      // Activate the correct term
      await this.prisma.termSession.update({
        where: { id: correctTerm.id },
        data: { isActive: true },
      });

      this.logger.log(`✅ Successfully activated ${correctTerm.name} ${correctTerm.year}!`);
    } catch (error) {
      this.logger.error('❌ Error checking/activating term:', error);
    }
  }

  /**
   * Check if we need to create next academic year terms
   * This runs when no term is found for current date
   */
  private async checkAndCreateNextAcademicYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 1-12

    // If we're in September or later, check for next academic year
    if (currentMonth >= 9) {
      const nextAcademicYearStart = currentYear;
      
      // Check if Term 1 of next academic year exists
      const nextYearTerm1 = await this.prisma.termSession.findFirst({
        where: {
          name: 'Term 1',
          year: nextAcademicYearStart,
        },
      });

      if (!nextYearTerm1) {
        this.logger.warn(
          `⚠️  Academic year ${nextAcademicYearStart}-${nextAcademicYearStart + 1} terms not found!`
        );
        this.logger.warn('💡 Please run: npm run setup:multi-year to create future academic years');
        
        // Auto-create next academic year
        await this.createNextAcademicYear(nextAcademicYearStart);
      }
    }
  }

  /**
   * Automatically create terms for the next academic year
   */
  private async createNextAcademicYear(startYear: number) {
    this.logger.log(`🚀 Auto-creating academic year ${startYear}-${startYear + 1}...`);

    const terms = [
      {
        name: 'Term 1',
        year: startYear,
        startDate: new Date(`${startYear}-09-01`),
        endDate: new Date(`${startYear}-12-18`),
        openingDate: new Date(`${startYear}-09-01`),
      },
      {
        name: 'Term 2',
        year: startYear + 1,
        startDate: new Date(`${startYear + 1}-01-05`),
        endDate: new Date(`${startYear + 1}-04-10`),
        openingDate: new Date(`${startYear + 1}-01-05`),
      },
      {
        name: 'Term 3',
        year: startYear + 1,
        startDate: new Date(`${startYear + 1}-05-04`),
        endDate: new Date(`${startYear + 1}-07-31`),
        openingDate: new Date(`${startYear + 1}-05-04`),
      },
    ];

    try {
      for (const term of terms) {
        await this.prisma.termSession.create({
          data: {
            ...term,
            isActive: false,
          },
        });
        this.logger.log(`✓ Created ${term.name} ${term.year}`);
      }

      this.logger.log(`✅ Successfully created academic year ${startYear}-${startYear + 1}!`);
      
      // Retry activating the current term
      await this.checkAndActivateCurrentTerm();
    } catch (error) {
      this.logger.error('❌ Error creating next academic year:', error);
    }
  }

  /**
   * Manual trigger to check and activate term (can be called via API)
   */
  async manualCheckAndActivate() {
    this.logger.log('🔧 Manual term check triggered...');
    await this.checkAndActivateCurrentTerm();
  }

  /**
   * Run on application startup to ensure correct term is active
   */
  async onModuleInit() {
    this.logger.log('🚀 Auto Term Activator initialized');
    // Check immediately on startup
    await this.checkAndActivateCurrentTerm();
  }
}
