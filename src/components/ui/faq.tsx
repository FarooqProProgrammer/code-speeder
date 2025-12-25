"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'technical' | 'billing' | 'account';
}

const faqData: FAQItem[] = [
  {
    question: 'What is CodeSpeeder and how does it work?',
    answer:
      'CodeSpeeder is a modern development platform designed to accelerate your coding workflow. It provides a comprehensive suite of tools including code editors, version control, CI/CD pipelines, and collaborative features. Simply sign up, create a project, and start coding with our intuitive interface. The platform automatically handles infrastructure, deployment, and scaling, allowing you to focus on writing great code.',
    category: 'general',
  },
  {
    question: 'Do I need a credit card to start the free trial?',
    answer:
      'No, you can start using CodeSpeeder completely free without providing any credit card information. Our Starter plan is free forever and includes core features, 3 projects, and 5GB storage. When you\'re ready to upgrade to Professional or Enterprise plans, you\'ll need to provide payment information. We offer a 14-day free trial for all paid plans.',
    category: 'billing',
  },
  {
    question: 'What programming languages and frameworks do you support?',
    answer:
      'CodeSpeeder supports all major programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, Ruby, PHP, and more. We provide first-class support for popular frameworks like React, Next.js, Vue, Angular, Django, Flask, Spring Boot, Express.js, and many others. Our platform is language-agnostic and can handle any tech stack with custom build configurations.',
    category: 'technical',
  },
  {
    question: 'How secure is my code and data?',
    answer:
      'Security is our top priority. We use bank-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. All repositories are private by default with role-based access control. We perform regular security audits, maintain SOC 2 Type II compliance, and offer features like two-factor authentication, SSO, IP whitelisting, and audit logs for Enterprise plans. Your code is stored in geo-redundant data centers with automatic backups.',
    category: 'technical',
  },
  {
    question: 'Can I migrate my existing projects to CodeSpeeder?',
    answer:
      'Yes! We make migration easy with built-in import tools for GitHub, GitLab, Bitbucket, and other platforms. Simply connect your existing repository, and we\'ll import your code, commit history, branches, and configurations. Our migration wizard guides you through the process, typically taking just a few minutes. We also provide detailed documentation and free migration support for Enterprise customers.',
    category: 'general',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Support varies by plan. Starter users have access to community forums and documentation. Professional plan includes priority email support with 24-hour response time and access to our knowledge base. Enterprise customers get dedicated support with a guaranteed 4-hour response time, a dedicated account manager, and optional on-call support. All users can access our extensive documentation, video tutorials, and community resources.',
    category: 'general',
  },
  {
    question: 'How does billing work? Can I cancel anytime?',
    answer:
      'Billing is simple and flexible. Choose between monthly or yearly billing (save 17% with annual plans). Payment is processed at the start of each billing cycle. You can upgrade, downgrade, or cancel anytime from your account settings. There are no cancellation fees or long-term contracts. If you cancel, you\'ll retain access until the end of your current billing period. We offer pro-rated refunds for annual plans canceled within 30 days.',
    category: 'billing',
  },
  {
    question: 'What are the API rate limits?',
    answer:
      'API rate limits vary by plan: Starter plan includes 1,000 API calls per month, Professional plan offers 50,000 calls per month, and Enterprise plan provides unlimited API access. Rate limits reset monthly and unused calls don\'t roll over. We use a token bucket algorithm for fair usage. If you exceed your limit, requests will return a 429 status code. Enterprise customers can request custom rate limits based on their needs.',
    category: 'technical',
  },
  {
    question: 'Do you offer team collaboration features?',
    answer:
      'Absolutely! Professional and Enterprise plans include robust collaboration features. Teams can share projects, manage permissions, conduct code reviews, leave inline comments, and track changes in real-time. We support up to 10 team members on Professional plans and unlimited members on Enterprise plans. Additional features include team activity feeds, @mentions, integrated chat, and project templates for consistent team workflows.',
    category: 'account',
  },
  {
    question: 'What happens to my data if I cancel my subscription?',
    answer:
      'Your data remains accessible for 30 days after cancellation, allowing you to export everything you need. We provide easy export tools for your code, databases, and configurations in standard formats. After 30 days, data is securely deleted according to our retention policy. You can download a complete backup anytime from your account dashboard. Enterprise customers can request extended retention periods.',
    category: 'account',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Faq = () => {
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
            <HelpCircle className="h-3 w-3" />
            FAQ
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Frequently Asked{' '}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-muted-foreground sm:text-xl">
            Find answers to common questions about CodeSpeeder. Can't find what you're looking for?
            We're here to help.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl"
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    "border rounded-xl bg-card/50 backdrop-blur-sm px-6 shadow-sm hover:shadow-md transition-shadow duration-300",
                    "data-[state=open]:border-primary/50 data-[state=open]:shadow-lg"
                  )}
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-start gap-3 text-left">
                      <div className="mt-0.5 shrink-0">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <MessageCircle className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-base font-semibold">
                          {faq.question}
                        </span>
                        {faq.category && (
                          <Badge
                            variant="secondary"
                            className="ml-2 text-xs capitalize"
                          >
                            {faq.category}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pt-2">
                    <div className="pl-14 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 mx-auto max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl border bg-card/30 backdrop-blur-sm p-8 text-center">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-chart-1/5 to-chart-2/5 -z-10" />
            
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Our friendly team is ready to help you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="group">
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
                Browse Documentation
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" />
                <span>24/7 Support Available</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse delay-150" />
                <span>Average response: 2 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;