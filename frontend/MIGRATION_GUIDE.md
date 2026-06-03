# RCA Unified Frontend - Migration Guide

## Overview
This frontend application now combines both the **Discipline Management System** and the **Library Management System** into a single Next.js application with role-based routing.

## Architecture

### Directory Structure
```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Landing page (redirects based on auth)
│   │   ├── login/            # Unified login page
│   │   ├── discipline/       # Discipline system routes
│   │   │   ├── layout.tsx   # Discipline-specific layout
│   │   │   ├── dashboard/
│   │   │   ├── students/
│   │   │   ├── staff/
│   │   │   ├── records/
│   │   │   ├── transport/
│   │   │   ├── phones/
│   │   │   └── settings/
│   │   └── librarian/        # Library system routes
│   │       ├── layout.tsx   # Librarian-specific layout
│   │       ├── dashboard/
│   │       ├── books/
│   │       ├── users/
│   │       ├── catalog/
│   │       ├── fines/
│   │       ├── reports/
│   │       └── analytics/
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   ├── discipline/      # Discipline-specific components
│   │   ├── layout/          # Shared layout components
│   │   ├── library/         # Library-specific components
│   │   ├── RCA/            # RCA brand components
│   │   └── ui/             # Shared UI components (shadcn/ui)
│   ├── hooks/
│   │   └── library/        # Library-specific hooks
│   ├── services/
│   │   └── library/        # Library API services
│   ├── stores/             # Zustand state management
│   ├── pages/             # Legacy pages (for gradual migration)
│   └── lib/               # Utilities and configurations
├── public/
│   ├── rca-logo.jpg
│   ├── rca1.jpeg
│   └── library-assets/    # Library system assets
└── package.json
```

## Authentication & Role-Based Routing

### User Roles
1. **Discipline Staff** - Access to discipline management features
2. **LIBRARIAN** - Access to library management features

### Login Flow
1. User visits `/login`
2. Enters credentials (email & password)
3. Backend returns user role
4. Application routes user to appropriate dashboard:
   - `LIBRARIAN` → `/librarian`
   - Others → `/discipline/dashboard`

### Seeded Credentials

#### Discipline Staff
```
Email: uwasesonia43@gmail.com
Password: test@123
Role: Discipline Staff
```

#### Librarian
```
Email: byiringirosam08@gmail.com
Password: Admin123!
Role: LIBRARIAN
```

## Styling System

The application uses a unified styling system based on the discipline frontend design:

- **Primary Color**: `#0A0E2E` (Dark navy)
- **Font**: Urbanist
- **Components**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion

### Key Style Features
- Consistent header with dark background (`#0A0E2E`)
- Sidebar navigation with active state indicators
- Concave junction effects on active nav links
- Unified color palette across both systems

## API Integration

### Base URLs
- **Discipline API**: `/api-proxy` (proxied through Next.js)
- **Library API**: Configured in `lib/config.ts`

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
BACKEND_URL=https://discipline-management-system-rgr8.onrender.com
```

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## Migration from Old Structure

### What Was Migrated
✅ All discipline pages moved to `/app/discipline`
✅ All library pages located at `/app/librarian`
✅ Unified authentication system
✅ Merged styling system
✅ Combined components and utilities

### What Needs Manual Update
- Update any hardcoded routes in components
- Verify API endpoint configurations
- Test all authentication flows
- Update environment variables in deployment

## Key Features

### Discipline System
- Student management
- Staff management
- Discipline records & permits
- Transport management
- Phone borrowing tracking
- Opening attendance
- Term management

### Library System
- Book management
- User & roles management
- Borrowing & returns
- Fine management
- Analytics & reports
- Catalog management

## Testing

Run tests:
```bash
npm test
```

Watch mode:
```bash
npm run test:watch
```

## Deployment

1. Update environment variables on your hosting platform
2. Build the application: `npm run build`
3. Deploy the `.next` folder and `public` assets
4. Ensure backend URLs are correctly configured

## Troubleshooting

### Login Redirects to Wrong Portal
- Check that backend returns correct `role` field
- Verify role-based routing in `src/app/login/page.tsx`

### Styles Not Loading
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`

### API Calls Failing
- Check CORS configuration on backend
- Verify API URLs in environment variables
- Check network tab for request details

## Support

For issues or questions:
- Check backend API documentation
- Review Next.js 15 App Router docs
- Contact system administrator
