"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Book,
  Rocket,
  Settings,
  Code2,
  FileText,
  Terminal,
  Package,
  GitBranch,
  Database,
  Shield,
  Zap,
  ChevronRight,
  Menu,
  Search,
  Sun,
  Moon,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/mode-toggle';

interface DocSection {
  id: string;
  title: string;
  icon: any;
  subsections?: { id: string; title: string }[];
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Rocket,
    subsections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'installation', title: 'Installation' },
      { id: 'quick-start', title: 'Quick Start' },
    ],
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: Book,
    subsections: [
      { id: 'architecture', title: 'Architecture' },
      { id: 'components', title: 'Components' },
      { id: 'routing', title: 'Routing' },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: Code2,
    subsections: [
      { id: 'endpoints', title: 'Endpoints' },
      { id: 'authentication', title: 'Authentication' },
      { id: 'rate-limiting', title: 'Rate Limiting' },
    ],
  },
  {
    id: 'guides',
    title: 'Guides',
    icon: FileText,
    subsections: [
      { id: 'deployment', title: 'Deployment' },
      { id: 'configuration', title: 'Configuration' },
      { id: 'best-practices', title: 'Best Practices' },
    ],
  },
];

const DocsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="hidden font-bold font-mono sm:inline-block">
                CodeSpeeder Docs
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="h-9 md:w-[300px] lg:w-[400px] pl-9"
                />
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <GitBranch className="h-5 w-5" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 max-w-screen-2xl">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block',
            sidebarOpen && 'block'
          )}
        >
          <div className="py-6 pr-6 lg:py-8">
            <div className="space-y-6">
              {docSections.map((section) => (
                <div key={section.id}>
                  <h4 className="mb-2 flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </h4>
                  {section.subsections && (
                    <ul className="space-y-1">
                      {section.subsections.map((subsection) => (
                        <li key={subsection.id}>
                          <button
                            onClick={() => setActiveSection(subsection.id)}
                            className={cn(
                              'block w-full text-left rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
                              activeSection === subsection.id
                                ? 'bg-accent text-accent-foreground font-medium'
                                : 'text-muted-foreground'
                            )}
                          >
                            {subsection.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/docs">Documentation</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Getting Started</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Hero Section */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">v2.0</Badge>
                <Badge variant="outline">Latest</Badge>
              </div>
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                Getting Started
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn how to get CodeSpeeder up and running in minutes. This guide will walk you through installation, configuration, and your first project.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Introduction Section */}
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4">
                Introduction
              </h2>
              <p className="leading-7 mb-4">
                CodeSpeeder is a modern, fast, and powerful development platform designed to accelerate your workflow. Built with cutting-edge technologies, it provides a seamless developer experience with extensive customization options.
              </p>
              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                      <div>
                        <strong>Lightning Fast:</strong> Optimized build times and instant hot module replacement
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                      <div>
                        <strong>Type Safe:</strong> Full TypeScript support with intelligent autocomplete
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                      <div>
                        <strong>Modular Architecture:</strong> Build exactly what you need with our component system
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                      <div>
                        <strong>Production Ready:</strong> Battle-tested in enterprise applications
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Installation Section */}
            <section id="installation" className="mb-12 scroll-mt-20">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4">
                Installation
              </h2>
              <p className="leading-7 mb-4">
                Choose your preferred package manager to install CodeSpeeder:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Terminal className="h-5 w-5" />
                      npm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                      npm install code-speeder
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Package className="h-5 w-5" />
                      pnpm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                      pnpm add code-speeder
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg border bg-card p-6 my-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">System Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Node.js 18.0 or higher</li>
                      <li>• 4GB RAM minimum (8GB recommended)</li>
                      <li>• Windows, macOS, or Linux</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quick-start" className="mb-12 scroll-mt-20">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4">
                Quick Start
              </h2>
              <p className="leading-7 mb-4">
                Get your first CodeSpeeder project running in less than 5 minutes:
              </p>

              <div className="space-y-6 my-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Create a new project</h3>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm mb-2">
                      npx create-code-speeder my-app
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This will scaffold a new project with all necessary dependencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to your project</h3>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm mb-2">
                      cd my-app
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Start the development server</h3>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm mb-2">
                      npm run dev
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your application will be available at{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                        http://localhost:3000
                      </code>
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-8 border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                        <ChevronRight className="h-4 w-4" />
                        Explore the Core Concepts
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                        <ChevronRight className="h-4 w-4" />
                        Check out the API Reference
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                        <ChevronRight className="h-4 w-4" />
                        Join our Community Discord
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Footer Navigation */}
            <div className="mt-12 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <Button variant="ghost" asChild>
                    <Link href="/" className="gap-2">
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button asChild>
                    <Link href="#" className="gap-2">
                      Core Concepts
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents - Right Sidebar */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-10">
              <div className="space-y-2">
                <p className="font-semibold">On This Page</p>
                <ul className="space-y-2 border-l">
                  <li>
                    <button
                      onClick={() => setActiveSection('introduction')}
                      className={cn(
                        'block border-l pl-4 -ml-px transition-colors hover:text-foreground',
                        activeSection === 'introduction'
                          ? 'border-foreground text-foreground font-medium'
                          : 'border-transparent text-muted-foreground'
                      )}
                    >
                      Introduction
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('installation')}
                      className={cn(
                        'block border-l pl-4 -ml-px transition-colors hover:text-foreground',
                        activeSection === 'installation'
                          ? 'border-foreground text-foreground font-medium'
                          : 'border-transparent text-muted-foreground'
                      )}
                    >
                      Installation
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection('quick-start')}
                      className={cn(
                        'block border-l pl-4 -ml-px transition-colors hover:text-foreground',
                        activeSection === 'quick-start'
                          ? 'border-foreground text-foreground font-medium'
                          : 'border-transparent text-muted-foreground'
                      )}
                    >
                      Quick Start
                    </button>
                  </li>
                </ul>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <p className="font-semibold">Resources</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
                      GitHub
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
                      Discord
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
                      Twitter
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocsPage;