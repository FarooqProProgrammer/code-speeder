"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle, FileText, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import WebsiteLayout from '@/components/layout/WebsiteLayout';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, including your name, email address, password, and any other information you choose to provide when creating an account or using our services."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, pages visited, and time spent on pages."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to track activity on our service and store certain information to improve your experience and analyze usage patterns."
        }
      ]
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, process your transactions, and send you technical notices and support messages."
        },
        {
          subtitle: "Communication",
          text: "We may use your email address to send you newsletters, marketing materials, and other information that may be of interest to you. You can opt out at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our services are used and to improve functionality, user experience, and develop new features."
        }
      ]
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."
        },
        {
          subtitle: "Encryption",
          text: "All data transmission is encrypted using SSL/TLS protocols. Passwords are hashed using secure algorithms before storage."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict internal access controls and only authorized personnel have access to personal information on a need-to-know basis."
        }
      ]
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Update",
          text: "You have the right to access, update, or delete your personal information at any time through your account settings."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your data in a structured, machine-readable format."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or updating your preferences."
        }
      ]
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Data Retention",
      content: [
        {
          subtitle: "Retention Period",
          text: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations."
        },
        {
          subtitle: "Account Deletion",
          text: "When you delete your account, we will delete or anonymize your personal information within 30 days, unless we are required to retain it for legal purposes."
        }
      ]
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: "Third-Party Services",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, analytics, and customer support."
        },
        {
          subtitle: "Third-Party Links",
          text: "Our service may contain links to third-party websites. We are not responsible for the privacy practices of these websites."
        }
      ]
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
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">PRIVACY POLICY</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Your Privacy <span className="text-primary">Matters</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We are committed to protecting your personal information and your right to privacy.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last Updated: December 25, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 border-b">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card/70 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      This Privacy Policy describes how CodeSpeeder ("we", "us", or "our") collects, uses, and shares your personal information when you use our website and services. By using our services, you agree to the collection and use of information in accordance with this policy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/70 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                          {section.icon}
                        </div>
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="font-semibold text-lg mb-2">{item.subtitle}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                          {itemIndex < section.content.length - 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Children's Privacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      Children's Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Changes to Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      Changes to This Policy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-primary/5 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Mail className="h-5 w-5 text-primary" />
                      Contact Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: privacy@codespeeder.com</p>
                      <p>Address: 123 Tech Street, San Francisco, CA 94103</p>
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

export default PrivacyPolicyPage;
