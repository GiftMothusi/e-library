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
