<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# E-Library

A modern, full-stack library management system built with Next.js 15, featuring server components and efficient image handling.

## Tech Stack
- **Framework**: Next.js 15 with Turbopack
- **Database**: Neon PostgreSQL
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Caching**: Upstash Redis
- **Image Storage**: ImageKit.io
- **CI/CD**: GitHub Actions

## Features
- User authentication and role-based access
- Real-time book inventory management
- Advanced search and filtering
- Book borrowing and return tracking
- Cloud-optimized image storage
- Admin dashboard
- Analytics and reporting

## Development

### Prerequisites
- Node.js 20+
- npm
- Docker (for local development)

### Environment Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/e-library.git
cd e-library
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```

4. Start development server
```bash
npm run dev
```

### Branch Strategy
- `main`: Production releases
- `develop`: Integration branch
- Feature branches: `feature/*`
- Bugfix branches: `fix/*`
- Setup branches: `setup/*`

### Commit Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New features
- `fix:` Bug fixes
- `chore:` Maintenance tasks
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates

### Pull Request Process
1. Create feature branch from `develop`
2. Implement changes
3. Run linting
4. Create PR with detailed description
5. Address review comments
6. Merge after approval

## Environment Variables
```
DATABASE_URL=
UPSTASH_REDIS_URL=
IMAGEKIT_URL=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

## Scripts
```bash
# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Linting
npm run lint
```

## Deployment
The application automatically deploys through GitHub Actions:
- Push to `develop`: Deploys to staging
- Push to `main`: Deploys to production

## License
MIT
>>>>>>> 8d8549ec2edb20fb44c95c1c3ca0c7e0dae93b45
