"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Map, 
  Home, 
  Info, 
  Mail, 
  BookOpen, 
  Calendar, 
  Users, 
  HelpCircle, 
  GraduationCap,
  FileText,
  Shield,
  Scale,
  BarChart,
  Newspaper
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import WebsiteLayout from '@/components/layout/WebsiteLayout';

const SitemapPage = () => {
  const sitemapSections = [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Main Pages",
      links: [
        { name: "Home", href: "/", description: "Welcome to CodeSpeeder" },
        { name: "About Us", href: "/about", description: "Learn about our mission and team" },
        { name: "Contact", href: "/contact", description: "Get in touch with us" },
        { name: "Dashboard", href: "/dashboard", description: "Access your account dashboard" },
      ]
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs", description: "Complete product documentation" },
        { name: "Tutorials", href: "/tutorials", description: "Step-by-step guides and tutorials" },
        { name: "Blog", href: "/blog", description: "Latest news and articles" },
        { name: "Changelog", href: "/changelog", description: "Product updates and release notes" },
      ]
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: "Support",
      links: [
        { name: "Support Center", href: "/support", description: "Get help and support" },
        { name: "Community", href: "/community", description: "Join our community" },
      ]
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", href: "/terms", description: "Terms and conditions" },
        { name: "Sitemap", href: "/sitemap", description: "This page - complete site navigation" },
      ]
    }
  ];

  const additionalResources = [
    {
      title: "Developer Resources",
      items: ["API Documentation", "SDK Downloads", "Code Examples", "Integration Guides"]
    },
    {
      title: "Learning Center",
      items: ["Getting Started Guide", "Video Tutorials", "Best Practices", "Case Studies"]
    },
    {
      title: "Company",
      items: ["Careers", "Press Kit", "Partner Program", "Investors"]
    }
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
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Map className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">SITEMAP</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Site <span className="text-primary">Navigation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your way around CodeSpeeder. Browse all pages and resources in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation Grid */}
        <section className="py-16 md:py-24 border-b">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">Quick Navigation</h2>
                <p className="text-muted-foreground">
                  Jump to any section of our website
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sitemapSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-card/70 backdrop-blur-sm h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            {section.icon}
                          </div>
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <nav className="space-y-4">
                          {section.links.map((link, linkIndex) => (
                            <div key={link.href}>
                              <Link
                                href={link.href}
                                className="group block hover:translate-x-1 transition-transform"
                              >
                                <div className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                                  <div className="flex-1">
                                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                                      {link.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-0.5">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                              {linkIndex < section.links.length - 1 && (
                                <Separator className="mt-4" />
                              )}
                            </div>
                          ))}
                        </nav>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 md:py-24 border-b">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
                <p className="text-muted-foreground">
                  More helpful content and tools
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalResources.map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-card/70 backdrop-blur-sm h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {resource.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-primary/5 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <BarChart className="h-5 w-5 text-primary" />
                      Most Visited Pages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link 
                        href="/"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors group"
                      >
                        <Home className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Home</h3>
                          <p className="text-xs text-muted-foreground">Main landing page</p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/docs"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors group"
                      >
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Documentation</h3>
                          <p className="text-xs text-muted-foreground">Product guides</p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/tutorials"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors group"
                      >
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Tutorials</h3>
                          <p className="text-xs text-muted-foreground">Learn step by step</p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/blog"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors group"
                      >
                        <Newspaper className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">Blog</h3>
                          <p className="text-xs text-muted-foreground">Latest updates</p>
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <Card className="bg-card/70 backdrop-blur-sm">
                  <CardContent className="pt-6 text-center">
                    <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Can't Find What You're Looking For?</h3>
                    <p className="text-muted-foreground mb-6">
                      Our support team is here to help you navigate and find the information you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        Contact Support
                      </Link>
                      <Link 
                        href="/support"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-lg hover:bg-accent transition-colors font-medium"
                      >
                        <HelpCircle className="h-4 w-4" />
                        Visit Help Center
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </WebsiteLayout>
  );
};

export default SitemapPage;
