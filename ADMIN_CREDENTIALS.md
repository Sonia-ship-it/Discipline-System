# Admin Credentials for Discipline System

## Admin Portal Access (`/admin`)

### 🔑 ADMIN LOGIN CREDENTIALS
- **Email**: `johndoe@school.com`
- **Password**: `Admin@123`
- **Role**: ADMIN
- **Name**: John Doe
- **Phone**: 0788888888

### Login URL
- **Development**: `http://localhost:3000/admin`
- **Production**: `https://discipline.rca.app/admin` (or your deployed URL)

⚠️ **Note**: You must login at `/login` first, then navigate to `/admin`

---

## Other Staff Accounts

### Discipline Staff (Sonia)
- **Email**: `uwasesonia43@gmail.com`
- **Password**: `test@123`
- **Role**: DISCIPLINE
- **Name**: UWASE Sonia
- **Portal**: `/discipline/dashboard`

This account is for discipline management, NOT admin portal access.

---

## Setting Up Admin Account

### Create Admin Account
Run this command to create the admin account:

```bash
cd discipline/backend/dms
npm run seed:admin
```

This will:
1. Create the admin user `johndoe@school.com` if it doesn't exist
2. Set the role to ADMIN
3. Activate the account
4. Display the credentials

### Alternative: Create Discipline Staff
To create/update Sonia's discipline staff account:

```bash
npm run seed:staff
```

## Admin Portal Features

After logging in with admin credentials, you will have access to:

1. **Admin Dashboard** (`/admin`)
   - System overview
   - User statistics
   - Quick actions

2. **Staff Management** (`/admin/users`)
   - View all staff members
   - Assign roles (ADMIN, DISCIPLINE, NURSE, LIBRARIAN)
   - Activate/Deactivate staff accounts
   - Reset passwords

3. **Full System Access**
   - All discipline features
   - All library features (if LIBRARIAN role is also assigned)
   - System settings and configuration

## Role Descriptions

- **ADMIN**: Full system access including user management
- **DISCIPLINE**: Discipline management features only
- **NURSE**: Health-related features only
- **LIBRARIAN**: Library management features only

## Security Notes

⚠️ **IMPORTANT**: Change the default password after first login!

1. Navigate to Settings
2. Update your password
3. Store credentials securely

## Troubleshooting

### Cannot login with admin credentials?

1. Verify the user exists in the database:
   ```sql
   SELECT * FROM "Staff" WHERE email = 'uwasesonia43@gmail.com';
   ```

2. Check if role is set to ADMIN:
   ```sql
   UPDATE "Staff" SET role = 'ADMIN', "isActive" = true WHERE email = 'uwasesonia43@gmail.com';
   ```

3. Re-run the seed script:
   ```bash
   npm run seed:staff
   ```

### "Cannot read properties of undefined (reading 'role')"?

This means the authentication is still hydrating. Wait a moment and refresh the page.

### Backend not responding?

1. Check if backend is running:
   ```bash
   cd discipline/backend/dms
   npm run start:dev
   ```

2. Check the backend logs for errors

3. Verify database connection in `.env` file
