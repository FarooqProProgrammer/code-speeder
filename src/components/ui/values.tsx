"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  Rocket,
  Heart,
  Zap,
  Globe,
  Award,
  Code,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We build trust through honest communication, transparent practices, and unwavering commitment to security and privacy.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Our users are at the heart of everything we do. We listen, learn, and evolve based on your feedback and needs.',
    color: 'text-chart-1',
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We embrace change and continuously push boundaries to deliver cutting-edge solutions that set industry standards.',
    color: 'text-chart-2',
  },
  {
    icon: Heart,
    title: 'Quality & Excellence',
    description: 'We are committed to delivering exceptional quality in every line of code, every feature, and every interaction.',
    color: 'text-chart-3',
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'We value your time. Our tools are designed to help you work faster without compromising on quality or reliability.',
    color: 'text-chart-4',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'We celebrate diversity and foster an inclusive community where developers from all backgrounds can thrive.',
    color: 'text-chart-5',
  },
  {
    icon: Award,
    title: 'Continuous Learning',
    description: 'We believe in growth and improvement. We learn from our mistakes and celebrate our successes together.',
    color: 'text-primary',
  },
  {
    icon: Code,
    title: 'Open & Collaborative',
    description: 'We embrace open-source principles and believe the best solutions come from collaborative efforts.',
    color: 'text-chart-1',
  },
];

const Values = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-muted/30">
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
            <Heart className="h-3 w-3" />
            Our Values
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            The principles that{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              define us
            </span>
          </h2>

          <p className="text-lg text-muted-foreground sm:text-xl">
            These core values shape our culture, guide our decisions, and drive our commitment to excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-background/80 border shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className={cn('h-6 w-6', value.color)} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
