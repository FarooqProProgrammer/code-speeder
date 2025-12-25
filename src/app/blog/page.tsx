"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, MessageCircle, Clock, Search, Filter, Hash, BookOpen, PenTool, Heart, Share2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import WebsiteLayout from '@/components/layout/WebsiteLayout';
import { cn } from '@/lib/utils';

const BlogPage = () => {
  // Mock data for blog categories
  const categories = [
    { id: 1, name: 'Development', count: 24, active: true },
    { id: 2, name: 'Tutorials', count: 18, active: false },
    { id: 3, name: 'News', count: 12, active: false },
    { id: 4, name: 'Tips & Tricks', count: 15, active: false },
    { id: 5, name: 'Releases', count: 9, active: false },
    { id: 6, name: 'Community', count: 7, active: false },
  ];

  // Mock data for featured posts
  const featuredPosts = [
    { 
      id: 1, 
      title: 'The Future of Code Development: Trends to Watch in 2025', 
      excerpt: 'Exploring the latest trends in development tools and practices that will shape the future of coding.',
      date: 'Dec 15, 2025',
      author: 'Alex Johnson',
      category: 'Development',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      likes: 142,
      comments: 24
    },
    { 
      id: 2, 
      title: 'How to Optimize Your Development Workflow', 
      excerpt: 'Practical tips and tools to streamline your development process and boost productivity.',
      date: 'Dec 10, 2025',
      author: 'Maria Garcia',
      category: 'Tips & Tricks',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      likes: 98,
      comments: 18
    },
  ];

  // Mock data for all blog posts
  const blogPosts = [
    { 
      id: 1, 
      title: 'The Future of Code Development: Trends to Watch in 2025', 
      excerpt: 'Exploring the latest trends in development tools and practices that will shape the future of coding.',
      date: 'Dec 15, 2025',
      author: 'Alex Johnson',
      category: 'Development',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      likes: 142,
      comments: 24
    },
    { 
      id: 2, 
      title: 'How to Optimize Your Development Workflow', 
      excerpt: 'Practical tips and tools to streamline your development process and boost productivity.',
      date: 'Dec 10, 2025',
      author: 'Maria Garcia',
      category: 'Tips & Tricks',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      likes: 98,
      comments: 18
    },
    { 
      id: 3, 
      title: 'Introducing CodeSpeeder v2.0: Major Updates and Improvements', 
      excerpt: 'A deep dive into the new features and enhancements in our latest release.',
      date: 'Dec 5, 2025',
      author: 'Sam Chen',
      category: 'Releases',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop',
      likes: 205,
      comments: 42
    },
    { 
      id: 4, 
      title: 'Building Your First Plugin: A Step-by-Step Guide', 
      excerpt: 'Learn how to create custom plugins for CodeSpeeder with this comprehensive tutorial.',
      date: 'Nov 28, 2025',
      author: 'Jamie Smith',
      category: 'Tutorials',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800&h=400&fit=crop',
      likes: 87,
      comments: 15
    },
    { 
      id: 5, 
      title: 'The Importance of Code Reviews in Modern Development', 
      excerpt: 'Why code reviews matter and how to conduct them effectively in your team.',
      date: 'Nov 22, 2025',
      author: 'Taylor Williams',
      category: 'Development',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=400&fit=crop',
      likes: 112,
      comments: 28
    },
    { 
      id: 6, 
      title: 'Community Spotlight: Meet Our Top Contributors', 
      excerpt: 'Get to know the amazing people who make CodeSpeeder better every day.',
      date: 'Nov 18, 2025',
      author: 'Jordan Lee',
      category: 'Community',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
      likes: 76,
      comments: 12
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
                <PenTool className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">LATEST UPDATES</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                CodeSpeeder <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and updates from the CodeSpeeder team and community.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search blog posts..." 
                    className="pl-10 py-6 text-lg" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured <span className="text-primary">Posts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most popular and insightful articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/70 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-2">Latest <span className="text-primary">Articles</span></h2>
                <p className="text-muted-foreground">Stay updated with our newest content</p>
              </motion.div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Newest
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/70 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="p-2">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm">
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
                Find content that matches your interests
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button 
                    variant={category.active ? "default" : "outline"} 
                    className="flex items-center gap-2"
                  >
                    <Hash className="h-4 w-4" />
                    {category.name} ({category.count})
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
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
                  Stay Updated
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Subscribe to our newsletter to receive the latest blog posts, updates, and insights directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="py-6 text-lg"
                  />
                  <Button size="lg">Subscribe</Button>
                </div>
              </motion.div>
            </Card>
          </div>
        </section>
      </div>
    </WebsiteLayout>
  );
};

export default BlogPage;