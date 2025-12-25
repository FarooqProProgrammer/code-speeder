"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Layers,
  Terminal,
  GitBranch,
  Rocket,
  Code2,
  Lock,
  Database,
  Cloud,
  Cpu,
  Award,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Optimized for speed with instant loading times and smooth interactions that keep your users engaged.',
    color: 'text-primary',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols to keep your data safe and compliant with industry standards.',
    color: 'text-chart-1',
    gradient: 'from-chart-1/20 to-chart-1/5',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Built with scalability in mind, easily extend and customize to fit your unique business requirements.',
    color: 'text-chart-2',
    gradient: 'from-chart-2/20 to-chart-2/5',
  },
  {
    icon: Terminal,
    title: 'Developer Tools',
    description: 'Comprehensive CLI, API documentation, and SDKs that make integration seamless and efficient.',
    color: 'text-chart-3',
    gradient: 'from-chart-3/20 to-chart-3/5',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Track changes, rollback instantly, and maintain complete history of your project evolution.',
    color: 'text-chart-4',
    gradient: 'from-chart-4/20 to-chart-4/5',
  },
  {
    icon: Rocket,
    title: 'Quick Deployment',
    description: 'Deploy to production in minutes with automated CI/CD pipelines and zero-downtime deployments.',
    color: 'text-chart-5',
    gradient: 'from-chart-5/20 to-chart-5/5',
  },
  {
    icon: Code2,
    title: 'Clean Codebase',
    description: 'Well-structured, maintainable code following industry best practices and modern design patterns.',
    color: 'text-primary',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Lock,
    title: 'Advanced Auth',
    description: 'Multi-factor authentication, SSO, and granular permission controls for complete access management.',
    color: 'text-chart-1',
    gradient: 'from-chart-1/20 to-chart-1/5',
  },
  {
    icon: Database,
    title: 'Smart Caching',
    description: 'Intelligent data caching strategies that reduce load times and improve overall system performance.',
    color: 'text-chart-2',
    gradient: 'from-chart-2/20 to-chart-2/5',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for the cloud with automatic scaling, load balancing, and global CDN distribution.',
    color: 'text-chart-3',
    gradient: 'from-chart-3/20 to-chart-3/5',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Leverage machine learning and AI capabilities to automate workflows and gain intelligent insights.',
    color: 'text-chart-4',
    gradient: 'from-chart-4/20 to-chart-4/5',
  },
  {
    icon: Award,
    title: '24/7 Support',
    description: 'Round-the-clock expert support team ready to help you succeed with dedicated assistance.',
    color: 'text-chart-5',
    gradient: 'from-chart-5/20 to-chart-5/5',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Features = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16 sm:mb-20"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="h-3 w-3" />
            Features
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Everything you need to{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              build amazing products
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground sm:text-xl">
            Powerful features designed to streamline your development workflow and help you ship faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient background on hover */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
                    feature.gradient
                  )} />
                  
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-background/80 border shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className={cn("h-6 w-6", feature.color)} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-muted-foreground mb-4">
            And many more features to explore...
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground/60">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" />
              <span>Always improving</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse delay-150" />
              <span>Frequently updated</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-chart-3 animate-pulse delay-300" />
              <span>Community driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;