"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Calendar, Rocket, Award, TrendingUp, Users, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const milestones: Milestone[] = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'CodeSpeeder was founded by a team of passionate developers who wanted to make development tools more accessible and powerful.',
    icon: Rocket,
    color: 'text-primary',
  },
  {
    year: '2021',
    title: 'First 1,000 Users',
    description: 'Reached our first major milestone with 1,000 active developers using the platform. Launched our Professional plan.',
    icon: Users,
    color: 'text-chart-1',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded to 50+ countries, opened offices in three continents, and launched multi-language support.',
    icon: Globe,
    color: 'text-chart-2',
  },
  {
    year: '2023',
    title: 'Series A Funding',
    description: 'Secured $15M in Series A funding to accelerate product development and grow our team to support more developers worldwide.',
    icon: TrendingUp,
    color: 'text-chart-3',
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Won "Best Developer Tool" award and reached 10,000+ active users. Launched Enterprise plan with advanced features.',
    icon: Award,
    color: 'text-chart-4',
  },
  {
    year: '2025',
    title: 'The Future',
    description: 'Continuing to innovate with AI-powered features, expanding our ecosystem, and building the next generation of development tools.',
    icon: Rocket,
    color: 'text-chart-5',
  },
];

const Timeline = () => {
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
            <Calendar className="h-3 w-3" />
            Our Journey
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our story{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              so far
            </span>
          </h2>

          <p className="text-lg text-muted-foreground sm:text-xl">
            From a small startup to a global platform serving thousands of developers.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      'relative grid md:grid-cols-2 gap-8 items-center',
                      isEven ? 'md:text-right' : 'md:text-left'
                    )}
                  >
                    {/* Content - Left on even, Right on odd */}
                    <div className={cn(isEven ? 'md:order-1' : 'md:order-2')}>
                      <div
                        className={cn(
                          'p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 group',
                          isEven ? 'md:ml-auto' : 'md:mr-auto'
                        )}
                      >
                        {/* Year Badge */}
                        <Badge className="mb-3" variant="outline">
                          {milestone.year}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon - Center on desktop, left on mobile */}
                    <div
                      className={cn(
                        'hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center',
                        'w-16 h-16 rounded-full border-4 border-background bg-card shadow-lg',
                        'group-hover:scale-110 transition-transform duration-300'
                      )}
                    >
                      <Icon className={cn('h-7 w-7', milestone.color)} />
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-background bg-card shadow-lg shrink-0">
                        <Icon className={cn('h-5 w-5', milestone.color)} />
                      </div>
                    </div>

                    {/* Spacer for alignment on desktop */}
                    <div className={cn('hidden md:block', isEven ? 'md:order-2' : 'md:order-1')} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This is just the beginning. We're committed to continuous innovation and building
            tools that empower developers to create amazing things.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
