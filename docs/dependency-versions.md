# Dependency Versions - Research Results

## Research Findings

### Core Runtime
- **Node.js**: [TO BE RESEARCHED - LTS version only]

### Core Framework & Libraries
- **Next.js**: 15.5.0 (Latest stable with Active LTS)
- **React**: 19.1.1 (Latest stable)
- **React DOM**: 19.1.1 (Match React version)

### Language & Tools
- **TypeScript**: 5.9.2 (Latest stable)

### Styling (v4.1+ REQUIRED)
- **Tailwind CSS**: 4.1.0 (Latest stable v4.1+)
- **@tailwindcss/postcss**: 4.1.0 (Match Tailwind version)
- **PostCSS**: 8.5.6 (Latest stable)
- **Autoprefixer**: 10.4.21 (Latest stable)

### Development Dependencies
- **@types/node**: 24.3.0 (Latest stable)
- **@types/react**: 19.1.10 (Match React version)
- **@types/react-dom**: 19.1.7 (Match React DOM version)
- **ESLint**: 9.17.0 (Latest stable)
- **eslint-config-next**: 15.5.0 (Match Next.js version)
- **Prettier**: 5.0.0 (Latest stable)

### Additional Dependencies
- **next-seo**: 6.8.0 (Latest stable)
- **lucide-react**: 0.540.0 (Latest stable)
- **gray-matter**: 4.0.3 (Latest stable)

## Installation Commands
Update these with researched versions:

```bash
# Core dependencies
pnpm add next@15.5.0 react@19.1.1 react-dom@19.1.1 typescript@5.9.2

# Styling dependencies  
pnpm add tailwindcss@4.1.0 @tailwindcss/postcss@4.1.0 postcss@8.5.6 autoprefixer@10.4.21

# Development dependencies
pnpm add -D @types/node@24.3.0 @types/react@19.1.10 @types/react-dom@19.1.7 eslint@9.17.0 eslint-config-next@15.5.0 prettier@5.0.0

# Additional dependencies
pnpm add next-seo@6.8.0 lucide-react@0.540.0 gray-matter@4.0.3
```

## Critical Notes
- Use EXACT researched versions - NO SUBSTITUTIONS
- Tailwind CSS MUST be v4.1.0 or higher per project requirements
- All versions researched on: August 21, 2025