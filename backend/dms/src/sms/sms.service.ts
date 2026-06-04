import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  async sendSms(phoneNumber: string, message: string) {
    if (!phoneNumber?.trim()) return { success: false, reason: 'missing_phone' };

    this.logger.log(`SMS to ${phoneNumber}: ${message}`);
    return { success: true };
  }
}
