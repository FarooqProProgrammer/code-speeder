"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Users, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former Engineering Lead at Tech Giants. Passionate about developer tools and open source.',
    avatar: 'SC',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@codespeeder.com',
    },
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack architect with 15+ years experience. Loves building scalable systems.',
    avatar: 'MR',
    social: {
      github: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Product',
    bio: 'Product strategist focused on user experience and innovation in developer workflows.',
    avatar: 'EJ',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    bio: 'Performance optimization expert. Contributor to major open-source projects.',
    avatar: 'DK',
    social: {
      github: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Jessica Martinez',
    role: 'Head of Design',
    bio: 'UI/UX designer creating beautiful, intuitive interfaces that developers love.',
    avatar: 'JM',
    social: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Alex Thompson',
    role: 'DevOps Lead',
    bio: 'Infrastructure guru ensuring 99.9% uptime and seamless deployments.',
    avatar: 'AT',
    social: {
      github: '#',
      linkedin: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Users className="h-3 w-3" />
            Our Team
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Meet the people{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              behind CodeSpeeder
            </span>
          </h2>

          <p className="text-lg text-muted-foreground sm:text-xl">
            A diverse team of engineers, designers, and innovators dedicated to building the future of development tools.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Avatar */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary to-chart-2 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-chart-1 border-4 border-card" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-lg border bg-background/50 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group/link"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground group-hover/link:text-primary-foreground transition-colors" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="p-2 rounded-lg border bg-background/50 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group/link"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4 text-muted-foreground group-hover/link:text-primary-foreground transition-colors" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="p-2 rounded-lg border bg-background/50 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group/link"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4 text-muted-foreground group-hover/link:text-primary-foreground transition-colors" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-lg border bg-background/50 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group/link"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground group-hover/link:text-primary-foreground transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-xl border bg-card/30 backdrop-blur-sm max-w-2xl">
            <h3 className="text-2xl font-bold">Join Our Team</h3>
            <p className="text-muted-foreground">
              We're always looking for talented individuals to join our mission.
              Check out our open positions and become part of something amazing.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
