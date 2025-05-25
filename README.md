# Next.js Cursor AI Boilerplate

A production-ready Next.js boilerplate specifically optimized for development with Cursor AI. This template includes comprehensive rules, best practices, and patterns that maximize AI-assisted development effectiveness.

## ✨ Features

- **🤖 Cursor AI Optimized**: Comprehensive rules and patterns for effective AI-assisted development
- **⚡ Next.js 15**: Latest Next.js with App Router and Server Components
- **🔷 TypeScript**: Full type safety with strict TypeScript configuration
- **🎨 Tailwind CSS**: Modern styling with Tailwind CSS v4 and clsx utilities
- **🧩 shadcn/ui**: Beautiful, accessible UI components built on Radix UI
- **🧪 Testing Ready**: Vitest + Testing Library setup with TDD rules
- **🔒 Security First**: Environment variable management and security best practices
- **📦 Package Management**: Yarn with proper dependency management
- **🏗️ Feature-Based Architecture**: Organized by domain/feature for scalability
- **🔄 OpenAI Integration**: Built-in patterns for concurrent AI API calls
- **📋 Comprehensive Rules**: 10+ Cursor rules for consistent development

## 🚀 Quick Start

1. **Use this template**:
   ```bash
   # Clone or use as template
   git clone https://github.com/your-username/nextjs-cursor-boilerplate.git my-project
   cd my-project
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual API keys and configuration
   ```

4. **Start development**:
   ```bash
   yarn dev
   ```

5. **Run tests**:
   ```bash
   yarn test
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   └── feature-example/   # Feature example api
│   └── page-example/             # Page example api
├── features/              # Feature-specific code (organized by domain)
│   ├── home/              # Landing page feature
│   │   ├── components/    # Home-specific components
│   │   ├── hooks/         # Home-specific hooks
│   │   ├── utils/         # Home-specific utilities
│   │   ├── types/         # Home-specific types
│   │   └── __tests__/     # Home feature tests
│   │       ├── components/    # Component tests
│   │       ├── hooks/         # Hook tests
│   │       └── utils/         # Utility tests
│   ├── page-example/             # page-example feature (future)
│   └── shared/            # Global features spanning multiple pages
│       └── __tests__/     # Shared feature tests
├── components/            # Global reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Global utility functions and clients
│   ├── clients/          # API clients (OpenAI, HubSpot)
│   └── utils/            # Helper functions
├── types/                # Global TypeScript type definitions
├── hooks/                # Global React hooks
└── __tests__/            # Global test setup and integration tests
```

## 🤖 Cursor AI Integration

This boilerplate is specifically designed to work seamlessly with Cursor AI:

### Built-in Rules
- **Test-Driven Development**: Enforces writing tests before implementation
- **OpenAI Concurrency**: Patterns for efficient AI API calls
- **Environment Management**: Secure handling of API keys and secrets
- **File Movement**: Proper file operations preserving history
- **Multi-file Changes**: Structured approach to complex modifications
- **Minimal Code Changes**: Avoiding unnecessary refactoring
- **Package Management**: Consistent use of Yarn
- **Directory Documentation**: Auto-prompting for new directory documentation

### AI-Optimized Patterns
- Clear, descriptive naming conventions
- Explicit type definitions
- Well-documented interfaces
- Feature-based organization
- Separation of concerns
- Comprehensive error handling

## 🛠️ Development Guidelines

### Working with Cursor AI
1. **Be Specific**: Provide clear, detailed prompts with context
2. **Include File Paths**: Reference exact locations when discussing code
3. **Break Down Tasks**: Split complex requests into smaller, focused tasks
4. **Test First**: Always write tests before implementation (enforced by rules)
5. **Use Existing Patterns**: Reference similar implementations in the codebase

### Code Organization
- **Feature-First**: Organize by business domain, not technical layer
- **Co-location**: Keep related files (components, tests, types) together
- **Clear Boundaries**: Separate client and server code appropriately
- **Type Safety**: Use TypeScript for all code with strict configuration

### Testing Strategy
- **TDD Enforced**: Rules prevent implementation without tests
- **Feature Tests**: Tests co-located with feature code
- **Integration Tests**: Global tests for cross-feature functionality
- **Component Tests**: UI component behavior and interactions

## 📦 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:ui` - Run tests with UI
- `yarn type-check` - Run TypeScript type checking
- `yarn lint` - Run ESLint

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:

```bash
# Required for AI features
OPENAI_API_KEY=your_openai_api_key_here

# Required for authentication (if using NextAuth.js)
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Optional: Database
DATABASE_URL=your_database_url_here

# Optional: External APIs
STRIPE_SECRET_KEY=your_stripe_secret_key_here
RESEND_API_KEY=your_resend_api_key_here
```

### TypeScript
Strict TypeScript configuration with:
- Strict mode enabled
- Path mapping configured (`@/` for `src/`)
- Type checking for build process

### Tailwind CSS
- Tailwind CSS v4 with modern configuration
- Custom design system ready
- clsx for conditional styling
- shadcn/ui integration

## 🚀 Deployment

This boilerplate is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any Node.js hosting platform**

### Deployment Checklist
1. Set environment variables in your hosting platform
2. Ensure all required API keys are configured
3. Run `yarn build` to verify production build
4. Configure domain and SSL if needed

## 🤝 Contributing

1. Follow the established patterns and rules
2. Write tests before implementation (enforced by Cursor rules)
3. Use descriptive commit messages
4. Update documentation for new features
5. Ensure all tests pass before submitting

## 📄 License

MIT License - feel free to use this boilerplate for any project.

## 🆘 Getting Help

- Check the `.cursor/rules/` directory for comprehensive development guidelines
- Use specific, detailed prompts when working with Cursor AI
- Reference existing patterns in the codebase
- Follow the test-driven development approach enforced by the rules

---

**Happy coding with Cursor AI! 🚀**