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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 max-w-screen-2xl items-center px-6">
          <div className="mr-6 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-3"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="mr-8 flex items-center space-x-3 transition-opacity hover:opacity-80">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="hidden font-bold font-mono text-lg sm:inline-block">
                CodeSpeeder Docs
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="h-10 md:w-[320px] lg:w-[420px] pl-10 pr-4 border-muted-foreground/20 focus:border-primary transition-colors"
                />
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" className="hover:bg-accent" asChild>
                <Link href="https://github.com" target="_blank">
                  <GitBranch className="h-5 w-5" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[260px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 max-w-screen-2xl px-6">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r bg-background/95 backdrop-blur md:sticky md:block',
            sidebarOpen && 'block shadow-lg'
          )}
        >
          <div className="py-8 pr-8 lg:py-10">
            <div className="space-y-8">
              {docSections.map((section) => (
                <div key={section.id}>
                  <h4 className="mb-3 flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-foreground bg-muted/50">
                    <section.icon className="h-4 w-4 text-primary" />
                    {section.title}
                  </h4>
                  {section.subsections && (
                    <ul className="space-y-1.5 mt-2">
                      {section.subsections.map((subsection) => (
                        <li key={subsection.id}>
                          <button
                            onClick={() => setActiveSection(subsection.id)}
                            className={cn(
                              'block w-full text-left rounded-lg px-3 py-2.5 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:translate-x-1',
                              activeSection === subsection.id
                                ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                                : 'text-muted-foreground hover:text-foreground'
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
        <main className="relative py-8 lg:gap-12 lg:py-10 xl:grid xl:grid-cols-[1fr_280px]">
          <div className="mx-auto w-full min-w-0 max-w-4xl">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList className="text-sm">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="transition-colors hover:text-primary">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/docs" className="transition-colors hover:text-primary">Documentation</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">Getting Started</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Hero Section */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-2.5 mb-4">
                <Badge variant="default" className="px-3 py-1 text-xs font-semibold">v2.0</Badge>
                <Badge variant="outline" className="px-3 py-1 text-xs font-semibold">Latest</Badge>
              </div>
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Getting Started
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Learn how to get CodeSpeeder up and running in minutes. This guide will walk you through installation, configuration, and your first project.
              </p>
            </div>

            <Separator className="my-10" />

            {/* Introduction Section */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <h2 className="scroll-m-20 border-b pb-4 text-3xl font-bold tracking-tight mb-6">
                Introduction
              </h2>
              <p className="leading-8 text-lg mb-6 text-muted-foreground">
                CodeSpeeder is a modern, fast, and powerful development platform designed to accelerate your workflow. Built with cutting-edge technologies, it provides a seamless developer experience with extensive customization options.
              </p>
              <Card className="my-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                      <ChevronRight className="h-5 w-5 mt-1 text-primary shrink-0" />
                      <div className="space-y-1">
                        <strong className="text-base font-semibold">Lightning Fast:</strong>
                        <p className="text-muted-foreground">Optimized build times and instant hot module replacement</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                      <ChevronRight className="h-5 w-5 mt-1 text-primary shrink-0" />
                      <div className="space-y-1">
                        <strong className="text-base font-semibold">Type Safe:</strong>
                        <p className="text-muted-foreground">Full TypeScript support with intelligent autocomplete</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                      <ChevronRight className="h-5 w-5 mt-1 text-primary shrink-0" />
                      <div className="space-y-1">
                        <strong className="text-base font-semibold">Modular Architecture:</strong>
                        <p className="text-muted-foreground">Build exactly what you need with our component system</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                      <ChevronRight className="h-5 w-5 mt-1 text-primary shrink-0" />
                      <div className="space-y-1">
                        <strong className="text-base font-semibold">Production Ready:</strong>
                        <p className="text-muted-foreground">Battle-tested in enterprise applications</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Installation Section */}
            <section id="installation" className="mb-16 scroll-mt-24">
              <h2 className="scroll-m-20 border-b pb-4 text-3xl font-bold tracking-tight mb-6">
                Installation
              </h2>
              <p className="leading-8 text-lg mb-6 text-muted-foreground">
                Choose your preferred package manager to install CodeSpeeder:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 my-8">
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      npm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm border border-border hover:border-primary/30 transition-colors">
                      npm install code-speeder
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      pnpm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm border border-border hover:border-primary/30 transition-colors">
                      pnpm add code-speeder
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-xl border bg-card p-8 my-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">System Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-2.5">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Node.js 18.0 or higher
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        4GB RAM minimum (8GB recommended)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Windows, macOS, or Linux
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quick-start" className="mb-16 scroll-mt-24">
              <h2 className="scroll-m-20 border-b pb-4 text-3xl font-bold tracking-tight mb-6">
                Quick Start
              </h2>
              <p className="leading-8 text-lg mb-6 text-muted-foreground">
                Get your first CodeSpeeder project running in less than 5 minutes:
              </p>

              <div className="space-y-8 my-8">
                <div className="flex items-start gap-5 p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0 shadow-md">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-semibold text-lg">Create a new project</h3>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm border border-border hover:border-primary/30 transition-colors">
                      npx create-code-speeder my-app
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This will scaffold a new project with all necessary dependencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0 shadow-md">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-semibold text-lg">Navigate to your project</h3>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm border border-border hover:border-primary/30 transition-colors">
                      cd my-app
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0 shadow-md">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-semibold text-lg">Start the development server</h3>
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm border border-border hover:border-primary/30 transition-colors">
                      npm run dev
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your application will be available at{' '}
                      <code className="rounded bg-muted px-2 py-1 font-mono text-sm border border-border">
                        http://localhost:3000
                      </code>
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-10 border-primary/50 bg-primary/5 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-3">
                    <li className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                      <Link href="#" className="flex items-center gap-2.5 text-primary hover:underline font-medium">
                        <ChevronRight className="h-4 w-4" />
                        Explore the Core Concepts
                      </Link>
                    </li>
                    <li className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                      <Link href="#" className="flex items-center gap-2.5 text-primary hover:underline font-medium">
                        <ChevronRight className="h-4 w-4" />
                        Check out the API Reference
                      </Link>
                    </li>
                    <li className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                      <Link href="#" className="flex items-center gap-2.5 text-primary hover:underline font-medium">
                        <ChevronRight className="h-4 w-4" />
                        Join our Community Discord
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Button variant="ghost" size="lg" className="hover:bg-accent" asChild>
                    <Link href="/" className="gap-2.5">
                      <ChevronRight className="h-5 w-5 rotate-180" />
                      <span className="font-medium">Back to Home</span>
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow" asChild>
                    <Link href="#" className="gap-2.5">
                      <span className="font-medium">Core Concepts</span>
                      <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents - Right Sidebar */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-20 -mt-10 pt-10 pl-4">
              <div className="space-y-3">
                <p className="font-semibold text-base mb-4">On This Page</p>
                <ul className="space-y-2.5 border-l-2 border-border">
                  <li>
                    <button
                      onClick={() => setActiveSection('introduction')}
                      className={cn(
                        'block border-l-2 pl-4 -ml-0.5 py-1.5 transition-all duration-200 hover:text-foreground hover:pl-5',
                        activeSection === 'introduction'
                          ? 'border-primary text-primary font-semibold pl-5'
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
                        'block border-l-2 pl-4 -ml-0.5 py-1.5 transition-all duration-200 hover:text-foreground hover:pl-5',
                        activeSection === 'installation'
                          ? 'border-primary text-primary font-semibold pl-5'
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
                        'block border-l-2 pl-4 -ml-0.5 py-1.5 transition-all duration-200 hover:text-foreground hover:pl-5',
                        activeSection === 'quick-start'
                          ? 'border-primary text-primary font-semibold pl-5'
                          : 'border-transparent text-muted-foreground'
                      )}
                    >
                      Quick Start
                    </button>
                  </li>
                </ul>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <p className="font-semibold text-base mb-4">Resources</p>
                <ul className="space-y-2.5 text-muted-foreground">
                  <li className="py-1">
                    <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                      <span>GitHub</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                      <span>Discord</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                      <span>Twitter</span>
                      <ExternalLink className="h-3.5 w-3.5" />
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