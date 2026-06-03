import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { TermModule } from '../term/term.module';

@Module({
  imports: [TermModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
