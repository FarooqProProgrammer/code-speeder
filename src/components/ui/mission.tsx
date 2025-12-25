"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MissionItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const missionData: MissionItem[] = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To revolutionize the way developers work by providing intuitive, powerful, and accessible tools that eliminate friction and amplify creativity. We believe great software should be built with great tools.',
    color: 'text-primary',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'A world where every developer, regardless of experience or location, has access to enterprise-grade development tools. We envision a future where building software is limited only by imagination, not by tooling.',
    color: 'text-chart-1',
    gradient: 'from-chart-1/20 to-chart-1/5',
  },
  {
    icon: Heart,
    title: 'Our Passion',
    description:
      'We are passionate about developer experience. Every feature we build, every decision we make, is driven by our commitment to making developers more productive, creative, and successful in their craft.',
    color: 'text-chart-2',
    gradient: 'from-chart-2/20 to-chart-2/5',
  },
  {
    icon: Lightbulb,
    title: 'Our Innovation',
    description:
      'Continuous innovation is at our core. We constantly explore new technologies, methodologies, and approaches to stay ahead of the curve and provide our users with cutting-edge solutions.',
    color: 'text-chart-3',
    gradient: 'from-chart-3/20 to-chart-3/5',
  },
];

const Mission = () => {
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            What drives us{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              forward
            </span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Our core principles guide everything we do, from product development to customer support.
          </p>
        </motion.div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missionData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Gradient background on hover */}
                  <div
                    className={cn(
                      'absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10',
                      item.gradient
                    )}
                  />

                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center p-4 rounded-xl bg-background/80 border shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className={cn('h-8 w-8', item.color)} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
