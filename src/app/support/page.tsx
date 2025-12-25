"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, BookOpen, MessageCircle, Mail, Phone, Clock, Search, HelpCircle, Shield, Wrench, Zap, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import WebsiteLayout from '@/components/layout/WebsiteLayout';
import { cn } from '@/lib/utils';

const SupportPage = () => {
  // Mock data for support categories
  const supportCategories = [
    { id: 1, name: 'Getting Started', count: 15, icon: HelpCircle, color: 'text-primary' },
    { id: 2, name: 'Troubleshooting', count: 24, icon: Wrench, color: 'text-chart-1' },
    { id: 3, name: 'Account & Billing', count: 12, icon: Shield, color: 'text-chart-2' },
    { id: 4, name: 'Technical Issues', count: 18, icon: Zap, color: 'text-chart-3' },
    { id: 5, name: 'Feature Requests', count: 8, icon: ExternalLink, color: 'text-chart-4' },
    { id: 6, name: 'API Documentation', count: 11, icon: BookOpen, color: 'text-chart-5' },
  ];

  // Mock data for popular articles
  const popularArticles = [
    { id: 1, title: 'How to set up your first project', category: 'Getting Started', views: '12.4k' },
    { id: 2, title: 'Resolving common installation issues', category: 'Troubleshooting', views: '9.8k' },
    { id: 3, title: 'Connecting to external services', category: 'Technical Issues', views: '8.3k' },
    { id: 4, title: 'Customizing your workspace', category: 'Getting Started', views: '7.6k' },
    { id: 5, title: 'Managing your account and subscription', category: 'Account & Billing', views: '6.9k' },
    { id: 6, title: 'Using the API effectively', category: 'API Documentation', views: '5.4k' },
  ];

  // Mock data for support channels
  const supportChannels = [
    { 
      id: 1, 
      name: 'Community Forum', 
      description: 'Get help from our community and experts', 
      icon: MessageCircle,
      responseTime: 'Within 24 hours',
      link: '#',
      color: 'text-primary'
    },
    { 
      id: 2, 
      name: 'Email Support', 
      description: 'Direct email support for technical issues', 
      icon: Mail,
      responseTime: 'Within 4 hours',
      link: '#',
      color: 'text-chart-1'
    },
    { 
      id: 3, 
      name: 'Live Chat', 
      description: 'Instant help during business hours', 
      icon: MessageCircle,
      responseTime: 'Within 5 minutes',
      link: '#',
      color: 'text-chart-2'
    },
    { 
      id: 4, 
      name: 'Phone Support', 
      description: 'Direct phone support for enterprise customers', 
      icon: Phone,
      responseTime: 'Immediate',
      link: '#',
      color: 'text-chart-3'
    },
  ];

  // Mock data for status updates
  const statusUpdates = [
    { id: 1, title: 'All systems operational', status: 'operational', icon: CheckCircle, color: 'text-green-500' },
    { id: 2, title: 'Minor performance degradation', status: 'degraded', icon: AlertTriangle, color: 'text-yellow-500' },
    { id: 3, title: 'Planned maintenance scheduled', status: 'maintenance', icon: Clock, color: 'text-blue-500' },
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
                <LifeBuoy className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">HOW CAN WE HELP?</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                CodeSpeeder <span className="text-primary">Support</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to your questions, get help with issues, or contact our support team.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search help articles, tutorials, and documentation..." 
                    className="pl-10 py-6 text-lg" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Status Updates */}
        <section className="py-8">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {statusUpdates.map((status, index) => {
                  const Icon = status.icon;
                  return (
                    <motion.div
                      key={status.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Icon className={`h-4 w-4 ${status.color}`} />
                        <span>{status.title}</span>
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories */}
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
                Browse <span className="text-primary">Support</span> Resources
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions and solutions to common issues.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportCategories.map((category, index) => {
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
                            <p className="text-muted-foreground mt-1">{category.count} articles</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
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

        {/* Popular Articles */}
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
                <h2 className="text-3xl font-bold mb-2">Popular <span className="text-primary">Articles</span></h2>
                <p className="text-muted-foreground">Most viewed help articles from our community</p>
              </div>
              <Button variant="outline" asChild>
                <a href="#">View All Articles</a>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-3">{article.category}</Badge>
                          <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                          <p className="text-muted-foreground text-sm">Viewed by {article.views} users</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
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
                Get <span className="text-primary">Direct</span> Support
              </h2>
              <p className="text-xl text-muted-foreground">
                Need personalized assistance? Choose the support channel that works best for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <motion.div
                    key={channel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/70 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`bg-primary/10 p-3 rounded-lg ${channel.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{channel.name}</h3>
                            <p className="text-muted-foreground mt-2">{channel.description}</p>
                            <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-muted-foreground">Response time: {channel.responseTime}</span>
                              <Button asChild>
                                <a href={channel.link}>Get Help</a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Self-Service Options */}
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
                Self-<span className="text-primary">Service</span> Options
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions without contacting support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Documentation',
                  description: 'Comprehensive guides and API references',
                  link: '#'
                },
                {
                  icon: MessageCircle,
                  title: 'Community Forum',
                  description: 'Ask questions and share knowledge with other users',
                  link: '#'
                },
                {
                  icon: Wrench,
                  title: 'Troubleshooting',
                  description: 'Step-by-step guides to resolve common issues',
                  link: '#'
                }
              ].map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/70 backdrop-blur-sm text-center p-6">
                      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <Button variant="outline" asChild>
                        <a href={option.link}>Learn More</a>
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
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
                  Still Need Help?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our support team is ready to assist you with any questions or issues you may have.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Call
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

export default SupportPage;