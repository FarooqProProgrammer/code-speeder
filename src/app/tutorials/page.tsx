"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Clock, User, Star, Search, Filter, Code, Palette, Zap, GitBranch, Database, Globe, Smartphone, Cpu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import WebsiteLayout from '@/components/layout/WebsiteLayout';
import { cn } from '@/lib/utils';

const TutorialsPage = () => {
  // Mock data for tutorial categories
  const categories = [
    { id: 1, name: 'Getting Started', count: 12, icon: Code, color: 'text-primary' },
    { id: 2, name: 'UI/UX Design', count: 8, icon: Palette, color: 'text-chart-1' },
    { id: 3, name: 'Advanced Features', count: 15, icon: Zap, color: 'text-chart-2' },
    { id: 4, name: 'Version Control', count: 6, icon: GitBranch, color: 'text-chart-3' },
    { id: 5, name: 'Database', count: 9, icon: Database, color: 'text-chart-4' },
    { id: 6, name: 'Deployment', count: 7, icon: Globe, color: 'text-chart-5' },
  ];

  // Mock data for featured tutorials
  const featuredTutorials = [
    { 
      id: 1, 
      title: 'Getting Started with CodeSpeeder', 
      description: 'Learn the basics of CodeSpeeder and set up your first project in under 10 minutes.',
      level: 'Beginner',
      duration: '8 min',
      rating: 4.8,
      author: 'Alex Johnson',
      category: 'Getting Started'
    },
    { 
      id: 2, 
      title: 'Customizing Your Workspace', 
      description: 'Personalize your development environment with themes, keybindings, and extensions.',
      level: 'Intermediate',
      duration: '15 min',
      rating: 4.7,
      author: 'Maria Garcia',
      category: 'UI/UX Design'
    },
    { 
      id: 3, 
      title: 'Advanced Debugging Techniques', 
      description: 'Master debugging tools and techniques to solve complex issues efficiently.',
      level: 'Advanced',
      duration: '22 min',
      rating: 4.9,
      author: 'Sam Chen',
      category: 'Advanced Features'
    },
  ];

  // Mock data for all tutorials
  const allTutorials = [
    { 
      id: 1, 
      title: 'Getting Started with CodeSpeeder', 
      description: 'Learn the basics of CodeSpeeder and set up your first project in under 10 minutes.',
      level: 'Beginner',
      duration: '8 min',
      rating: 4.8,
      author: 'Alex Johnson',
      category: 'Getting Started'
    },
    { 
      id: 2, 
      title: 'Customizing Your Workspace', 
      description: 'Personalize your development environment with themes, keybindings, and extensions.',
      level: 'Intermediate',
      duration: '15 min',
      rating: 4.7,
      author: 'Maria Garcia',
      category: 'UI/UX Design'
    },
    { 
      id: 3, 
      title: 'Advanced Debugging Techniques', 
      description: 'Master debugging tools and techniques to solve complex issues efficiently.',
      level: 'Advanced',
      duration: '22 min',
      rating: 4.9,
      author: 'Sam Chen',
      category: 'Advanced Features'
    },
    { 
      id: 4, 
      title: 'Version Control with Git', 
      description: 'Learn how to use Git integration for version control in CodeSpeeder.',
      level: 'Beginner',
      duration: '12 min',
      rating: 4.6,
      author: 'Jamie Smith',
      category: 'Version Control'
    },
    { 
      id: 5, 
      title: 'Database Integration', 
      description: 'Connect and work with databases directly in your development environment.',
      level: 'Intermediate',
      duration: '18 min',
      rating: 4.5,
      author: 'Taylor Williams',
      category: 'Database'
    },
    { 
      id: 6, 
      title: 'Deploying Your Applications', 
      description: 'Learn how to deploy your applications with CodeSpeeder\'s built-in tools.',
      level: 'Intermediate',
      duration: '16 min',
      rating: 4.7,
      author: 'Jordan Lee',
      category: 'Deployment'
    },
    { 
      id: 7, 
      title: 'Creating Custom Extensions', 
      description: 'Build your own extensions to enhance CodeSpeeder functionality.',
      level: 'Advanced',
      duration: '25 min',
      rating: 4.8,
      author: 'Alex Johnson',
      category: 'Advanced Features'
    },
    { 
      id: 8, 
      title: 'Performance Optimization', 
      description: 'Techniques to optimize your application performance and development workflow.',
      level: 'Advanced',
      duration: '20 min',
      rating: 4.6,
      author: 'Sam Chen',
      category: 'Advanced Features'
    },
  ];

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
              <div className="inline-flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">LEARN & GROW</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                CodeSpeeder <span className="text-primary">Tutorials</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn how to use CodeSpeeder effectively with our comprehensive collection of tutorials and guides.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search tutorials..." 
                    className="pl-10 py-6 text-lg" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Browse by <span className="text-primary">Category</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find tutorials for the specific features and topics you're interested in.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`bg-primary/10 p-3 rounded-lg ${category.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{category.name}</h3>
                            <p className="text-muted-foreground mt-1">{category.count} tutorials</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured <span className="text-primary">Tutorials</span></h2>
                <p className="text-muted-foreground">Hand-picked tutorials from our community experts</p>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/70 backdrop-blur-sm overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-primary/20 to-chart-1/20 flex items-center justify-center">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Play className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{tutorial.category}</Badge>
                        <Badge variant={tutorial.level === 'Beginner' ? 'default' : 
                                      tutorial.level === 'Intermediate' ? 'outline' : 'destructive'}>
                          {tutorial.level}
                        </Badge>
                      </div>
                      <CardTitle>{tutorial.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span>{tutorial.rating}</span>
                          </div>
                        </div>
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Start
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Tutorials */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">All <span className="text-primary">Tutorials</span></h2>
                <p className="text-muted-foreground">Browse our complete collection of learning resources</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Newest</Button>
                <Button variant="outline">Popular</Button>
                <Button variant="outline">Top Rated</Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{tutorial.category}</Badge>
                            <Badge variant={tutorial.level === 'Beginner' ? 'default' : 
                                          tutorial.level === 'Intermediate' ? 'outline' : 'destructive'}>
                              {tutorial.level}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{tutorial.title}</h3>
                          <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{tutorial.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span>{tutorial.rating}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Start Tutorial
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-primary/10 to-chart-1/10 p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Request a tutorial or contribute your own knowledge to help the community grow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Request Tutorial
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Code className="h-4 w-4 mr-2" />
                    Contribute Tutorial
                  </Button>
                </div>
              </motion.div>
            </Card>
          </div>
        </section>
      </div>
    </WebsiteLayout>
  );
};

export default TutorialsPage;