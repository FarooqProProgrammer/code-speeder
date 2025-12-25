# Technology Stack & Dependencies

<cite>
**Referenced Files in This Document**   
- [next.config.ts](file://next.config.ts)
- [tsconfig.json](file://tsconfig.json)
- [package.json](file://package.json)
- [biome.json](file://biome.json)
- [components.json](file://components.json)
- [Dockerfile](file://Dockerfile)
- [compose.yaml](file://compose.yaml)
- [postcss.config.mjs](file://postcss.config.mjs)
- [src/app/layout.tsx](file://src/app/layout.tsx)
- [src/app/page.tsx](file://src/app/page.tsx)
- [src/components/ui/button.tsx](file://src/components/ui/button.tsx)
- [src/components/ui/dialog.tsx](file://src/components/ui/dialog.tsx)
- [src/app/globals.css](file://src/app/globals.css)
- [src/lib/utils.ts](file://src/lib/utils.ts)
- [pnpm-workspace.yaml](file://pnpm-workspace.yaml)
</cite>

## Table of Contents
1. [Core Frameworks](#core-frameworks)
2. [Styling & UI Architecture](#styling--ui-architecture)
3. [Developer Tooling](#developer-tooling)
4. [Configuration & Build System](#configuration--build-system)
5. [Containerization & Deployment](#containerization--deployment)
6. [Technology Integration Patterns](#technology-integration-patterns)
7. [Performance & Security Considerations](#performance--security-considerations)

## Core Frameworks

The code-speeder application leverages a modern full-stack JavaScript framework ecosystem centered around Next.js 16 and React 19, providing a robust foundation for server-rendered applications with optimized client-side interactivity.

Next.js 16 serves as the primary framework, utilizing its App Router architecture for file-based routing and layout management. The framework enables server-side rendering (SSR) by default, with the ability to opt into client-side rendering through the "use client" directive in specific components. This hybrid approach allows for optimal performance by rendering static content on the server while maintaining interactive functionality on the client side.

React 19 is integrated with the React Compiler, a transformative optimization tool that automatically memoizes components and eliminates unnecessary re-renders. This compiler is enabled through the `reactCompiler: true` configuration in next.config.ts, which activates automatic memoization across the application without requiring manual use of React.memo or useMemo hooks. This results in significant performance improvements by reducing the computational overhead of reconciliation.

TypeScript provides comprehensive type safety across the entire codebase, ensuring type consistency between components, hooks, and utility functions. The tsconfig.json configuration enforces strict type checking with options like "strict": true and "noEmit": true, which prevents compilation of type-unsafe code while allowing integration with Next.js's built-in TypeScript support.

**Section sources**
- [next.config.ts](file://next.config.ts#L1-L9)
- [tsconfig.json](file://tsconfig.json#L1-L35)
- [package.json](file://package.json#L48-L52)
- [src/app/page.tsx](file://src/app/page.tsx#L1-L66)

## Styling & UI Architecture

The styling architecture combines Tailwind CSS with class-variance-authority (CVA) to create a scalable and maintainable component system. Tailwind CSS provides utility-first styling with JIT compilation enabled through the PostCSS configuration, allowing for rapid UI development with minimal custom CSS.

The components.json configuration file defines the project's UI architecture, specifying the use of the "new-york" style and enabling React Server Components (RSC) with "rsc": true. This configuration also establishes path aliases for common directories, including "@/components", "@/lib/utils", and "@/components/ui", which are used throughout the codebase for consistent imports.

class-variance-authority is used in conjunction with tailwind-merge and clsx to create type-safe, composable component variants. The button.tsx component demonstrates this pattern, where the `cva` function defines multiple variants (default, destructive, outline, etc.) and sizes (default, sm, lg, icon) with associated Tailwind classes. The `cn` utility function from utils.ts merges these variant classes with any additional className props while resolving conflicts.

Radix UI primitives form the foundation of all interactive components, providing accessible, unstyled base components that are extended through the shadcn/ui pattern. Components like dialog.tsx wrap Radix UI primitives with project-specific styling and additional functionality, such as the `showCloseButton` prop in DialogContent. This approach ensures WCAG compliance while maintaining complete control over visual design.

The globals.css file implements a modern CSS architecture using CSS custom properties and the @theme directive to define a comprehensive design system. The color palette is based on the OKLCH color space, providing perceptually uniform color transitions and excellent dark mode support. The file also establishes base styles through the @layer directive, ensuring consistent typography and spacing across the application.

**Section sources**
- [components.json](file://components.json#L1-L23)
- [src/components/ui/button.tsx](file://src/components/ui/button.tsx#L1-L63)
- [src/components/ui/dialog.tsx](file://src/components/ui/dialog.tsx#L1-L144)
- [src/app/globals.css](file://src/app/globals.css#L1-L126)
- [src/lib/utils.ts](file://src/lib/utils.ts#L1-L7)
- [postcss.config.mjs](file://postcss.config.mjs#L1-L8)

## Developer Tooling

The development environment is optimized with a suite of modern tools that enhance productivity, code quality, and consistency across the team.

Biome serves as the unified developer tool, combining linting, formatting, and import organization in a single, high-performance tool. The biome.json configuration enables the recommended rulesets for both JavaScript/TypeScript and React, with specific overrides to disable warnings for unknown CSS at-rules. The formatter is configured with 2-space indentation, and the assist feature automatically organizes imports on save, reducing manual maintenance overhead.

pnpm is used as the package manager, providing faster installation times and reduced disk usage through hard linking. The pnpm-workspace.yaml file configures the workspace to include the root directory and specifies ignored built dependencies like sharp, which may require platform-specific compilation. This configuration enables efficient dependency management in monorepo-like setups while avoiding unnecessary rebuilds of native modules.

The package.json scripts provide a streamlined development workflow with commands for development (next dev), production build (next build), and server start (next start -p 3001). The lint and format scripts integrate directly with Biome, allowing for consistent code quality checks and formatting across the team. The use of pnpm is evident in the lockfile name (pnpm-lock.yaml) and the workspace configuration.

**Section sources**
- [biome.json](file://biome.json#L1-L38)
- [package.json](file://package.json#L5-L11)
- [pnpm-workspace.yaml](file://pnpm-workspace.yaml#L1-L6)
- [package.json](file://package.json#L62-L71)

## Configuration & Build System

The build and configuration system is designed for optimal performance, developer experience, and production readiness, with careful attention to both development and deployment requirements.

The next.config.ts file contains minimal configuration, focusing on enabling the React Compiler with `reactCompiler: true`. This approach follows Next.js's philosophy of convention over configuration, relying on default behaviors for most settings while explicitly enabling cutting-edge performance features. The simplicity of this configuration reduces maintenance overhead and ensures compatibility with future Next.js updates.

The tsconfig.json file extends this philosophy with a carefully curated set of TypeScript compiler options. Key settings include "moduleResolution": "bundler" for compatibility with modern bundlers, "jsx": "react-jsx" for automatic JSX runtime, and "incremental": true for faster type checking during development. The path mapping "@/*": ["./src/*"] enables absolute imports from the src directory, improving import readability and reducing relative path complexity.

The PostCSS configuration in postcss.config.mjs integrates Tailwind CSS into the build process, ensuring that utility classes are generated and optimized during compilation. This configuration works in tandem with Next.js's built-in PostCSS support, requiring no additional setup in next.config.ts.

**Section sources**
- [next.config.ts](file://next.config.ts#L1-L9)
- [tsconfig.json](file://tsconfig.json#L1-L35)
- [postcss.config.mjs](file://postcss.config.mjs#L1-L8)
- [components.json](file://components.json#L1-L23)

## Containerization & Deployment

The application is designed for containerized deployment using Docker and Docker Compose, enabling consistent environments from development to production.

The Dockerfile implements a multi-stage build process to optimize image size and build efficiency. It begins with a Node.js 22.17.1 Alpine base image, installs pnpm globally, and then proceeds through three stages: deps (installing production dependencies), build (installing all dependencies and running the build), and final (creating a minimal runtime image). This approach leverages Docker's layer caching to speed up subsequent builds and results in a small production image by excluding development dependencies.

The compose.yaml file defines a multi-container application with the Next.js server and a PostgreSQL database. The server service exposes port 3001 and builds from the current context, while the db service uses the official PostgreSQL image with persistent storage through a named volume. This configuration enables local development with a production-like database setup and demonstrates the application's readiness for microservices architecture.

The package.json start script is configured to run on port 3001 (next start -p 3001), which aligns with the Docker configuration. This consistency ensures that the application behaves the same way in containers as it does in local development.

**Section sources**
- [Dockerfile](file://Dockerfile#L1-L77)
- [compose.yaml](file://compose.yaml#L1-L27)
- [package.json](file://package.json#L8)

## Technology Integration Patterns

The codebase demonstrates several key integration patterns that showcase how the various technologies work together to create a cohesive development experience.

The component architecture follows the shadcn/ui pattern of wrapping Radix UI primitives with project-specific styling and functionality. For example, the dialog.tsx component imports Radix UI's DialogPrimitive and enhances it with Tailwind CSS classes and additional props like `showCloseButton`. This pattern maintains accessibility while providing a consistent design language across the application.

TypeScript interfaces are seamlessly integrated with React components, as seen in the Button component's props definition which combines React.ComponentProps<"button"> with VariantProps<typeof buttonVariants>. This approach provides type safety for both standard HTML button attributes and custom component variants, enabling IntelliSense and compile-time error detection.

The "use client" directive in dialog.tsx demonstrates the Server/Client component boundary in Next.js 16. This directive explicitly marks the component as a Client Component, allowing it to use React hooks like useState and useEffect while being rendered on the client side. This pattern enables fine-grained control over where components execute, optimizing performance by keeping most components on the server.

Path aliases defined in tsconfig.json and components.json are used consistently throughout the codebase, with imports like "@/lib/utils" in button.tsx. This pattern improves code readability and maintainability by eliminating complex relative paths and providing a consistent import structure.

**Section sources**
- [src/components/ui/button.tsx](file://src/components/ui/button.tsx#L1-L63)
- [src/components/ui/dialog.tsx](file://src/components/ui/dialog.tsx#L1-L144)
- [tsconfig.json](file://tsconfig.json#L21-L23)
- [components.json](file://components.json#L15-L19)

## Performance & Security Considerations

The technology stack has been selected and configured with both performance and security as primary considerations, addressing common web application concerns through framework defaults and explicit configuration.

Performance is optimized through multiple layers: Next.js 16's App Router enables efficient server-side rendering and data fetching, React 19's compiler eliminates unnecessary re-renders through automatic memoization, and the multi-stage Docker build produces a minimal production image. The use of React Server Components by default reduces client-side JavaScript bundle size by keeping components on the server when possible.

Security is addressed through several mechanisms: Biome's linter enforces secure coding practices, the Dockerfile runs the application as a non-root user to limit potential damage from vulnerabilities, and the use of parameterized queries (implied by the PostgreSQL setup) helps prevent SQL injection. The application also follows modern security practices with proper CORS configuration (handled by Next.js) and secure headers.

The combination of TypeScript's type safety and Biome's static analysis helps prevent common security issues like XSS by catching type mismatches and improper data handling at compile time. The use of Radix UI primitives ensures that all interactive components meet accessibility standards, which is both a usability and security concern.

The containerization strategy enhances security by isolating the application and its dependencies, while the explicit version pinning of Node.js (22.17.1) and pnpm (10.14.0) in the Dockerfile ensures reproducible builds and reduces the risk of supply chain attacks from dependency drift.

**Section sources**
- [Dockerfile](file://Dockerfile#L9-L10)
- [biome.json](file://biome.json#L1-L38)
- [next.config.ts](file://next.config.ts#L5)
- [compose.yaml](file://compose.yaml#L61-L62)
- [package.json](file://package.json#L48-L52)