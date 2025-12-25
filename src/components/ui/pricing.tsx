"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  Zap,
  Crown,
  Building2,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  description: string;
  icon: React.ElementType;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: {
    included: string[];
    notIncluded?: string[];
  };
  cta: string;
  highlight?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: {
      included: [
        'Up to 3 projects',
        '5GB storage',
        'Basic support',
        'Community access',
        'Core features',
        'API access (1000 calls/month)',
      ],
      notIncluded: [
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
      ],
    },
    cta: 'Get Started Free',
  },
  {
    name: 'Professional',
    description: 'For growing teams and businesses',
    icon: Crown,
    monthlyPrice: 29,
    yearlyPrice: 290,
    popular: true,
    highlight: true,
    features: {
      included: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'All core features',
        'API access (50k calls/month)',
        'Custom integrations',
        'Team collaboration (up to 10)',
        'Version history',
      ],
    },
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    icon: Building2,
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: {
      included: [
        'Unlimited everything',
        'Unlimited storage',
        'Dedicated support',
        'Advanced security',
        'Custom features',
        'Unlimited API calls',
        'White-label options',
        'Unlimited team members',
        'SLA guarantee',
        'Custom contracts',
        'On-premise deployment',
      ],
    },
    cta: 'Contact Sales',
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

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-3 w-3" />
            Pricing Plans
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Choose the{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              perfect plan
            </span>
            {' '}for you
          </h2>

          <p className="text-lg text-muted-foreground sm:text-xl mb-8">
            Start free and scale as you grow. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-muted/50 border">
            <span
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                !isYearly && 'text-foreground',
                isYearly && 'text-muted-foreground'
              )}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Toggle yearly billing"
            />
            <span
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2',
                isYearly && 'text-foreground',
                !isYearly && 'text-muted-foreground'
              )}
            >
              Yearly
              <Badge variant="default" className="text-xs px-2 py-0">
                Save 17%
              </Badge>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const originalYearlyPrice = plan.monthlyPrice * 12;
            const savings = originalYearlyPrice - plan.yearlyPrice;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  'relative group',
                  plan.highlight && 'md:scale-105 lg:scale-110 z-10'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Card */}
                <div
                  className={cn(
                    'relative h-full p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300',
                    plan.highlight
                      ? 'border-primary/50 shadow-xl hover:shadow-2xl hover:border-primary'
                      : 'hover:shadow-lg hover:border-primary/30'
                  )}
                >
                  {/* Highlight Glow Effect */}
                  {plan.highlight && (
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-chart-1/5 to-chart-2/10 rounded-2xl -z-10" />
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-background/80 border shadow-sm mb-4">
                      <Icon className={cn('h-6 w-6', plan.highlight ? 'text-primary' : 'text-chart-1')} />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold">
                        ${price}
                      </span>
                      <span className="text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    
                    {isYearly && plan.yearlyPrice > 0 && (
                      <p className="text-sm text-chart-1 font-medium">
                        Save ${savings} per year
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      'w-full mb-6 group/btn',
                      plan.highlight && 'shadow-lg hover:shadow-xl'
                    )}
                    variant={plan.highlight ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      What's included:
                    </p>
                    
                    {/* Included Features */}
                    <ul className="space-y-3">
                      {plan.features.included.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">
                            <div className="p-0.5 rounded-full bg-chart-1/20">
                              <Check className="h-4 w-4 text-chart-1" />
                            </div>
                          </div>
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Not Included Features */}
                    {plan.features.notIncluded && plan.features.notIncluded.length > 0 && (
                      <ul className="space-y-3 pt-3 border-t border-border/50">
                        {plan.features.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 opacity-50">
                            <div className="mt-0.5 shrink-0">
                              <div className="p-0.5 rounded-full bg-muted">
                                <X className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground line-through">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 rounded-xl border bg-card/30 backdrop-blur-sm">
            <p className="text-lg font-semibold">Need a custom plan?</p>
            <p className="text-sm text-muted-foreground max-w-md">
              We offer flexible pricing for teams and enterprises with specific requirements.
              Contact our sales team to discuss your needs.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-1" />
              <span>14-day free trial</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-2" />
              <span>No credit card required</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;