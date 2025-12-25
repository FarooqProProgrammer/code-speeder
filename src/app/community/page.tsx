"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Github, Twitter, BookOpen, Calendar, Star, Heart, Code, Sparkles, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import WebsiteLayout from '@/components/layout/WebsiteLayout';
import { cn } from '@/lib/utils';

const CommunityPage = () => {
  // Mock data for community members
  const communityMembers = [
    { id: 1, name: 'Alex Johnson', role: 'Core Contributor', contributions: 142, avatar: 'https://github.com/alexj.png' },
    { id: 2, name: 'Maria Garcia', role: 'Community Moderator', contributions: 98, avatar: 'https://github.com/mariag.png' },
    { id: 3, name: 'Sam Chen', role: 'Documentation Lead', contributions: 87, avatar: 'https://github.com/samc.png' },
    { id: 4, name: 'Jamie Smith', role: 'Plugin Developer', contributions: 65, avatar: 'https://github.com/jamies.png' },
    { id: 5, name: 'Taylor Williams', role: 'Community Member', contributions: 42, avatar: 'https://github.com/taylorw.png' },
    { id: 6, name: 'Jordan Lee', role: 'Bug Hunter', contributions: 38, avatar: 'https://github.com/jordanl.png' },
  ];

  // Mock data for community events
  const communityEvents = [
    { id: 1, title: 'Weekly Code Review', date: 'Every Tuesday', time: '3:00 PM PST', type: 'Weekly' },
    { id: 2, title: 'Community Showcase', date: 'Dec 30, 2025', time: '10:00 AM PST', type: 'Monthly' },
    { id: 3, title: 'Hackathon: AI Integration', date: 'Jan 15-17, 2026', time: 'All Day', type: 'Event' },
    { id: 4, title: 'Documentation Sprint', date: 'Jan 5, 2026', time: '9:00 AM PST', type: 'Sprint' },
  ];

  // Mock data for resources
  const resources = [
    { title: 'Community Forum', description: 'Discuss features, ask questions, and share ideas', icon: MessageCircle, link: '#' },
    { title: 'GitHub Discussions', description: 'Technical discussions and project planning', icon: Github, link: '#' },
    { title: 'Documentation', description: 'Official documentation and guides', icon: BookOpen, link: '#' },
    { title: 'Contributing Guide', description: 'How to contribute to the project', icon: Code, link: '#' },
    { title: 'Community Discord', description: 'Real-time chat with the community', icon: Zap, link: '#' },
    { title: 'Events Calendar', description: 'Upcoming community events and meetups', icon: Calendar, link: '#' },
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
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">JOIN OUR COMMUNITY</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                CodeSpeeder <span className="text-primary">Community</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with developers, contribute to the project, and be part of our growing open-source ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg">
                  <Github className="h-4 w-4 mr-2" />
                  Join on GitHub
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Community Forum
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-primary">12k+</div>
                  <div className="text-muted-foreground mt-2">Community Members</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-4xl font-bold text-chart-1">4.2k+</div>
                  <div className="text-muted-foreground mt-2">GitHub Stars</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold text-chart-2">850+</div>
                  <div className="text-muted-foreground mt-2">Contributors</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-4xl font-bold text-chart-3">1.8k+</div>
                  <div className="text-muted-foreground mt-2">Plugins</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
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
                Why Join Our <span className="text-primary">Community</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Be part of a vibrant ecosystem of developers, creators, and innovators building the future of development tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: 'Contribute',
                  description: 'Help improve CodeSpeeder by contributing code, documentation, or translations.'
                },
                {
                  icon: Heart,
                  title: 'Support Others',
                  description: 'Answer questions, help newcomers, and share your expertise with the community.'
                },
                {
                  icon: Sparkles,
                  title: 'Innovate',
                  description: 'Share ideas, propose new features, and collaborate on exciting projects.'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/70 backdrop-blur-sm border-border/50">
                      <CardHeader className="text-center">
                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Resources */}
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
                Community <span className="text-primary">Resources</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find everything you need to get involved and make the most of your community experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                            <p className="text-muted-foreground mb-3">{resource.description}</p>
                            <Button variant="outline" size="sm" asChild>
                              <a href={resource.link}>Explore</a>
                            </Button>
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

        {/* Community Members */}
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
                Meet Our <span className="text-primary">Community</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                These amazing people help make CodeSpeeder better every day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/70 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Contributions</span>
                        <Badge variant="secondary">{member.contributions}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Events */}
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
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join our community events to learn, connect, and collaborate.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {communityEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 last:mb-0"
                >
                  <Card className="bg-card/70 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{event.type}</Badge>
                            <h3 className="text-xl font-semibold">{event.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{event.date} • {event.time}</p>
                        </div>
                        <Button variant="outline">Learn More</Button>
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
                  Ready to Join Our Community?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Become part of our growing community of developers and help shape the future of CodeSpeeder.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <Github className="h-4 w-4 mr-2" />
                    Start Contributing
                  </Button>
                  <Button variant="secondary" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join Discussion
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

export default CommunityPage;