import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotifyParentsDto } from './dto/notify-parents.dto';
import { TestNotificationDto } from './dto/test-notification.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  findAll(@Query('studentId') studentId?: string) {
    return this.notificationService.findAll(
      studentId ? +studentId : undefined,
    );
  }

  @Post('parent')
  notifyParents(@Body() dto: NotifyParentsDto) {
    return this.notificationService.notifyParents(dto);
  }

  @Post('test')
  testNotification(@Body() dto: TestNotificationDto) {
    return this.notificationService.testNotification(dto);
  }
}
