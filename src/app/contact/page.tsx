"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, User, MessageCircle, Building2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import WebsiteLayout from '@/components/layout/WebsiteLayout';
import { cn } from '@/lib/utils';
import Faq from '@/components/ui/faq';

const ContactPage = () => {
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
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">GET IN TOUCH</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions or feedback? Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card/70 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Our Location</h3>
                          <p className="text-muted-foreground">123 Tech Street, San Francisco, CA 94103</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">hello@codespeeder.com</p>
                          <p className="text-muted-foreground">support@codespeeder.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Business Hours</h3>
                          <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                          <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div>
                        <h3 className="font-semibold mb-3">Follow Us</h3>
                        <div className="flex gap-3">
                          <Button variant="outline" size="icon">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </Button>
                          <Button variant="outline" size="icon">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </Button>
                          <Button variant="outline" size="icon">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="bg-card/70 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        Send us a message
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <div className="relative mt-1">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="firstName" 
                                placeholder="John" 
                                className="pl-10" 
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input 
                              id="lastName" 
                              placeholder="Doe" 
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <div className="relative mt-1">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="john@example.com" 
                              className="pl-10" 
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input 
                            id="subject" 
                            placeholder="How can we help?" 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Your message here..." 
                            rows={5}
                            className="mt-1"
                          />
                        </div>
                        
                        <Button className="w-full" size="lg">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* FAQ Section */}
              <Faq />
            </div>
          </div>
        </section>
      </div>
    </WebsiteLayout>
  );
};

export default ContactPage;