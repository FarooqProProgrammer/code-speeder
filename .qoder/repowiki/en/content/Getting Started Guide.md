# Getting Started Guide

<cite>
**Referenced Files in This Document**   
- [README.md](file://README.md)
- [package.json](file://package.json)
- [src/app/page.tsx](file://src/app/page.tsx)
- [src/app/globals.css](file://src/app/globals.css)
- [compose.yaml](file://compose.yaml)
- [Dockerfile](file://Dockerfile)
- [biome.json](file://biome.json)
- [next.config.ts](file://next.config.ts)
- [components.json](file://components.json)
- [tsconfig.json](file://tsconfig.json)
- [README.Docker.md](file://README.Docker.md)
</cite>

## Table of Contents
1. [Development Environment Setup](#development-environment-setup)
2. [Running the Development Server](#running-the-development-server)
3. [Containerized Development with Docker](#containerized-development-with-docker)
4. [Key Files and Customization Points](#key-files-and-customization-points)
5. [Common Setup Issues and Troubleshooting](#common-setup-issues-and-troubleshooting)
6. [Code Quality and Type Safety](#code-quality-and-type-safety)

## Development Environment Setup

To begin development, ensure you have Node.js (v18 or higher) and pnpm installed on your system. This project uses pnpm as the package manager, which offers faster installation and better disk space utilization compared to npm or yarn.

First, install the project dependencies using pnpm:

```bash
pnpm install
```

This command reads the `package.json` and `pnpm-lock.yaml` files to install all required dependencies, including Next.js, React, Tailwind CSS, and the shadcn/ui component library. The dependencies are installed in a way that optimizes for both development and production environments.

**Section sources**
- [package.json](file://package.json#L1-L74)
- [pnpm-lock.yaml](file://pnpm-lock.yaml)

## Running the Development Server

After installing dependencies, start the development server using the following command:

```bash
pnpm dev
```

This command executes `next dev` as defined in the `package.json` scripts section, launching the Next.js development server. The application will be accessible at [http://localhost:3000](http://localhost:3000).

The development server provides hot reloading, meaning any changes you make to the code will automatically refresh the browser. This enables a fast feedback loop during development.

**Section sources**
- [package.json](file://package.json#L6)
- [README.md](file://README.md#L5-L17)

## Containerized Development with Docker

For containerized development, this project includes a complete Docker setup with `Dockerfile` and `compose.yaml` configuration files. This approach ensures consistency across different development environments and simplifies deployment.

To start the application using Docker Compose:

```bash
docker compose up --build
```

This command builds the Docker image based on the `Dockerfile` and starts the services defined in `compose.yaml`. The application will be available at [http://localhost:3001](http://localhost:3001), as specified in the Docker configuration.

The Docker setup includes:
- A Node.js base image with pnpm pre-installed
- Multi-stage build process for optimized image size
- Production environment configuration
- Port mapping from container port 3001 to host port 3001
- PostgreSQL database service for persistent data storage

**Section sources**
- [compose.yaml](file://compose.yaml#L1-L27)
- [Dockerfile](file://Dockerfile#L1-L77)
- [README.Docker.md](file://README.Docker.md#L1-L22)

## Key Files and Customization Points

### Main UI Component: page.tsx

The primary user interface is defined in `src/app/page.tsx`. This file contains the main page component that renders when users visit the root URL. To customize the application's main content, edit this file directly.

The component uses React JSX syntax with Tailwind CSS classes for styling. It includes a simple layout with a Next.js logo, introductory text, and action buttons for deployment and documentation.

**Section sources**
- [src/app/page.tsx](file://src/app/page.tsx#L1-L66)

### Global Styles: globals.css

Global styling is managed in `src/app/globals.css`, which leverages Tailwind CSS and custom CSS variables. This file defines the application's design system, including:

- Color palette using OKLCH color space for better perceptual uniformity
- Typography with Geist font variables
- Component radius values for consistent corner rounding
- Dark mode support through the `.dark` class
- Base styles for body and universal selectors

To modify the theme, adjust the CSS variables in the `:root` and `.dark` selectors. For example, changing `--primary` will update the primary color across all components that use this variable.

**Section sources**
- [src/app/globals.css](file://src/app/globals.css#L1-L126)
- [components.json](file://components.json#L1-L23)

### Component Library Configuration

The project uses shadcn/ui components, configured through `components.json`. This file specifies:
- The "new-york" style theme
- TypeScript support (tsx: true)
- Tailwind CSS configuration path
- Import aliases for easier imports (e.g., "@/components", "@/lib/utils")

These aliases are also configured in `tsconfig.json` under the `paths` option, enabling convenient relative imports throughout the codebase.

**Section sources**
- [components.json](file://components.json#L1-L23)
- [tsconfig.json](file://tsconfig.json#L1-L35)

## Common Setup Issues and Troubleshooting

### Missing Dependencies

If you encounter module not found errors after cloning the repository, ensure you've installed dependencies with pnpm:

```bash
pnpm install
```

Unlike npm, pnpm uses a strict dependency resolution that may require explicit installation even if `node_modules` appears to exist.

### Port Conflicts

The development server runs on port 3000, while the production server (started with `pnpm start`) uses port 3001. If you encounter port conflicts:

1. Check for processes using the port:
   ```bash
   npx kill-port 3000
   ```

2. Or specify a different port:
   ```bash
   pnpm dev -- -p 3002
   ```

### Docker Networking Problems

When using Docker, ensure:
- Docker Desktop is running (on Windows/Mac)
- Sufficient memory allocated to Docker (at least 4GB recommended)
- No port conflicts with existing services
- Proper file permissions for volume mounting

If the container fails to start, check logs with:
```bash
docker compose logs server
```

**Section sources**
- [package.json](file://package.json#L8)
- [compose.yaml](file://compose.yaml#L8)
- [Dockerfile](file://Dockerfile#L73)

## Code Quality and Type Safety

### Biome Linting and Formatting

This project uses Biome for code formatting and linting. Biome provides a unified tool for formatting, linting, and bundling. Configuration is defined in `biome.json`, which enables:

- Code formatting with 2-space indentation
- Linting with recommended rules and React/Next.js specific rules
- Automatic import organization
- Ignore patterns for build directories

Run the linter with:
```bash
pnpm lint
```

And format code with:
```bash
pnpm format
```

### TypeScript Configuration

TypeScript is configured in `tsconfig.json` with strict type checking enabled. The configuration includes:
- ES2017 target for broad browser compatibility
- ES module resolution
- Strict type checking
- Path aliases for cleaner imports
- JSX transformation for React

The `next-env.d.ts` file provides type definitions for Next.js, while custom types can be added to the `src` directory.

**Section sources**
- [biome.json](file://biome.json#L1-L38)
- [tsconfig.json](file://tsconfig.json#L1-L35)
- [next.config.ts](file://next.config.ts#L1-L9)