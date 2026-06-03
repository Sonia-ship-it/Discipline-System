# SMS Notification Setup Guide

## Testing SMS Notifications

1. Go to **Attendance** page
2. Click **"Test Notifications"** button (blue button in toolbar)
3. Select a student from the dropdown
4. Enter your personal phone number (to receive the test SMS)
5. Click **"Send Test SMS"**

Currently, the system **logs messages to the backend console** but doesn't send real SMS yet.

---

## Setting Up Africa's Talking SMS (Rwanda)

### Step 1: Create an Account

1. Go to [https://rwanda.africastalking.com/](https://rwanda.africastalking.com/)
2. Sign up for a free account
3. Verify your email and phone number

### Step 2: Get API Credentials

1. Log in to your Africa's Talking dashboard
2. Go to **Settings** → **API Keys**
3. Copy your **API Key** and **Username**

### Step 3: Add Credentials to Backend

Open `backend/dms/.env` and add:

```env
AFRICAS_TALKING_USERNAME=your_username_here
AFRICAS_TALKING_API_KEY=your_api_key_here
AFRICAS_TALKING_SENDER_ID=RCA
```

**Note:** `SENDER_ID` is the name shown as the SMS sender. You may need to register "RCA" with Africa's Talking to use it officially.

### Step 4: Install Africa's Talking SDK

In the backend folder, run:

```bash
cd backend/dms
npm install africastalking
```

### Step 5: Update the SMS Service

The backend is already set up to use a generic `SMS_WEBHOOK_URL`. For Africa's Talking integration, we'll add a dedicated implementation.

Edit `backend/dms/src/notification/notification.service.ts` and replace the `sendToPhone` method with:

```typescript
private async sendToPhone(
  phone: string,
  message: string,
): Promise<NotificationStatus> {
  const normalized = this.formatPhone(phone);
  if (!normalized || normalized.length < 9) {
    return NotificationStatus.FAILED;
  }

  // Africa's Talking integration
  if (process.env.AFRICAS_TALKING_API_KEY && process.env.AFRICAS_TALKING_USERNAME) {
    try {
      const africastalking = require('africastalking')({
        apiKey: process.env.AFRICAS_TALKING_API_KEY,
        username: process.env.AFRICAS_TALKING_USERNAME,
      });

      const sms = africastalking.SMS;
      const result = await sms.send({
        to: [normalized],
        message,
        from: process.env.AFRICAS_TALKING_SENDER_ID || 'RCA',
      });

      console.info(`[Africa's Talking SMS] Sent to ${normalized}:`, result);
      return NotificationStatus.SENT;
    } catch (error) {
      console.error(`[Africa's Talking SMS] Failed to send to ${normalized}:`, error);
      return NotificationStatus.FAILED;
    }
  }

  // Fallback: log only (for testing without SMS provider)
  console.info(`[Parent SMS] to=${normalized} message=${message}`);
  return NotificationStatus.SENT;
}
```

### Step 6: Test the Integration

1. Restart your backend: `npm run start:dev`
2. Go to **Attendance** → **Test Notifications**
3. Select a student
4. Enter **your own phone number** (to receive the test)
5. Click **"Send Test SMS"**

You should receive an SMS within seconds.

---

## Pricing (Africa's Talking Rwanda)

- **SMS to Rwanda**: ~2-4 RWF per SMS
- **Free sandbox**: Limited free SMS for testing

Check current pricing at: [https://africastalking.com/pricing](https://africastalking.com/pricing)

---

## Once Testing Works

After successful test SMS:
- The **"Notify parents (term start)"** button will work automatically
- The **"Notify absent parents"** button will work automatically
- All parent phone numbers registered in the system will receive SMS

The system **deduplicates** father/mother phone numbers automatically so each parent only gets one message per notification.

---

## Troubleshooting

**"Failed to send"** error:
- Check that your API Key and Username are correct
- Verify phone number format (use `+250788123456` or `0788123456`)
- Check Africa's Talking account balance
- Review backend console logs for detailed error messages

**Phone number not valid**:
- Rwanda numbers must be 10 digits (e.g., `0788123456`)
- International format: `+250788123456`
- The system auto-formats and validates phone numbers

**No SMS received**:
- Check spam/junk folder (unlikely for SMS)
- Verify the phone number is active
- Check Africa's Talking delivery reports in their dashboard
