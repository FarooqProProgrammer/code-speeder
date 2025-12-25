"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Calendar, GitCommit, Bug, Sparkles, Wrench, Zap, Package, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import WebsiteLayout from '@/components/layout/WebsiteLayout';
import { cn } from '@/lib/utils';

interface ChangeItem {
  type: 'feature' | 'bugfix' | 'improvement' | 'chore' | 'breaking';
  description: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  status: 'released' | 'beta' | 'alpha' | 'planned';
  changes: ChangeItem[];
}

const changelogData: ChangelogEntry[] = [
  {
    version: 'v1.5.0',
    date: 'Dec 2025',
    status: 'planned',
    changes: [
      { type: 'feature', description: 'AI-powered code suggestions and auto-completion' },
      { type: 'feature', description: 'Real-time collaboration with team members' },
      { type: 'improvement', description: 'Enhanced performance for large codebases' },
      { type: 'bugfix', description: 'Fixed memory leak in code analysis engine' },
    ],
  },
  {
    version: 'v1.4.2',
    date: 'Nov 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Resolved issue with syntax highlighting for TypeScript' },
      { type: 'bugfix', description: 'Fixed project loading on Windows systems' },
      { type: 'chore', description: 'Updated dependencies to latest versions' },
    ],
  },
  {
    version: 'v1.4.1',
    date: 'Oct 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Fixed issue with project export functionality' },
      { type: 'bugfix', description: 'Resolved crash when opening large files' },
      { type: 'improvement', description: 'Improved keyboard navigation in editor' },
    ],
  },
  {
    version: 'v1.4.0',
    date: 'Oct 2025',
    status: 'released',
    changes: [
      { type: 'feature', description: 'Added support for new programming languages' },
      { type: 'feature', description: 'Introducing dark/light theme customization' },
      { type: 'improvement', description: 'Enhanced file explorer with search functionality' },
      { type: 'improvement', description: 'Faster project loading and initialization' },
    ],
  },
  {
    version: 'v1.3.5',
    date: 'Sep 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Fixed syntax highlighting for CSS-in-JS' },
      { type: 'bugfix', description: 'Resolved issue with undo/redo functionality' },
      { type: 'improvement', description: 'Improved performance for large file handling' },
    ],
  },
  {
    version: 'v1.3.4',
    date: 'Aug 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Fixed crash when switching between projects' },
      { type: 'chore', description: 'Updated documentation and examples' },
    ],
  },
  {
    version: 'v1.3.3',
    date: 'Aug 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Fixed issue with code formatting in React files' },
      { type: 'improvement', description: 'Enhanced auto-save functionality' },
    ],
  },
  {
    version: 'v1.3.2',
    date: 'Jul 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Resolved memory leak in editor component' },
      { type: 'bugfix', description: 'Fixed project import/export issues' },
    ],
  },
  {
    version: 'v1.3.1',
    date: 'Jul 2025',
    status: 'released',
    changes: [
      { type: 'bugfix', description: 'Fixed issue with file saving permissions' },
      { type: 'improvement', description: 'Improved error messages for build failures' },
    ],
  },
  {
    version: 'v1.3.0',
    date: 'Jun 2025',
    status: 'released',
    changes: [
      { type: 'feature', description: 'Added support for Git integration' },
      { type: 'feature', description: 'Introducing project templates and scaffolding' },
      { type: 'improvement', description: 'Enhanced plugin architecture' },
      { type: 'improvement', description: 'Better integration with popular frameworks' },
    ],
  },
  {
    version: 'v1.2.0',
    date: 'May 2025',
    status: 'released',
    changes: [
      { type: 'feature', description: 'New terminal integrated into the editor' },
      { type: 'feature', description: 'Added code snippet manager' },
      { type: 'improvement', description: 'Improved syntax highlighting for all languages' },
    ],
  },
  {
    version: 'v1.1.0',
    date: 'Apr 2025',
    status: 'released',
    changes: [
      { type: 'feature', description: 'Added real-time preview for web projects' },
      { type: 'feature', description: 'New plugin marketplace' },
      { type: 'improvement', description: 'Enhanced debugging tools' },
    ],
  },
  {
    version: 'v1.0.0',
    date: 'Mar 2025',
    status: 'released',
    changes: [
      { type: 'feature', description: 'Initial public release of CodeSpeeder' },
      { type: 'feature', description: 'Core editor with syntax highlighting' },
      { type: 'feature', description: 'Project management and file explorer' },
      { type: 'feature', description: 'Code formatting and linting tools' },
    ],
  },
];

const ChangeBadge = ({ type }: { type: ChangeItem['type'] }) => {
  const typeConfig = {
    feature: { label: 'Feature', icon: Sparkles, color: 'bg-primary text-primary-foreground' },
    bugfix: { label: 'Bug Fix', icon: Bug, color: 'bg-destructive text-destructive-foreground' },
    improvement: { label: 'Improvement', icon: Zap, color: 'bg-chart-1 text-secondary-foreground' },
    chore: { label: 'Chore', icon: Wrench, color: 'bg-muted text-muted-foreground' },
    breaking: { label: 'Breaking', icon: Package, color: 'bg-destructive/20 text-destructive' },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <Badge variant="secondary" className={`${config.color} px-2 py-1 text-xs`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.label}
    </Badge>
  );
};

const ChangelogPage = () => {
  return (
    <WebsiteLayout>
      <div className="min-h-screen bg-transparent">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-4">
                <GitCommit className="h-3 w-3 mr-1" />
                Product Updates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                CodeSpeeder <span className="text-primary">Changelog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay up to date with the latest features, improvements, and fixes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Changelog Content */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Stats Summary */}
              <Card className="mb-12 bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Release Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{changelogData.length}</div>
                      <div className="text-sm text-muted-foreground">Versions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-chart-1">
                        {changelogData.reduce((acc, entry) => 
                          acc + entry.changes.filter(c => c.type === 'feature').length, 0
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">Features</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-destructive">
                        {changelogData.reduce((acc, entry) => 
                          acc + entry.changes.filter(c => c.type === 'bugfix').length, 0
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">Bug Fixes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-chart-2">
                        {changelogData.reduce((acc, entry) => 
                          acc + entry.changes.filter(c => c.type === 'improvement').length, 0
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">Improvements</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Changelog Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                <div className="space-y-12">
                  {changelogData.map((entry, index) => {
                    const isReleased = entry.status === 'released';
                    const isPlanned = entry.status === 'planned';
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-2.5 top-4 w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />
                        
                        {/* Content card */}
                        <div className="ml-8">
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl font-bold">{entry.version}</h3>
                              <Badge 
                                variant={isReleased ? "default" : isPlanned ? "outline" : "secondary"}
                                className={cn({
                                  "bg-primary/10 text-primary": isPlanned,
                                })}
                              >
                                {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                              </Badge>
                            </div>
                            <time className="text-sm text-muted-foreground">{entry.date}</time>
                          </div>

                          <Card className={cn("bg-card/70 backdrop-blur-sm", {
                            "border-border/50 bg-card/30": isPlanned,
                          })}>
                            <CardContent className="pt-6">
                              <ul className="space-y-3">
                                {entry.changes.map((change, changeIndex) => (
                                  <li key={changeIndex} className="flex items-start gap-3">
                                    <ChangeBadge type={change.type} />
                                    <span className="text-foreground">{change.description}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="p-8 bg-card/70 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Get notified about new releases and important updates by subscribing to our newsletter.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                    <Button>Subscribe</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </WebsiteLayout>
  );
};

export default ChangelogPage;