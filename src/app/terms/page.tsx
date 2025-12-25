"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, Users, ShieldAlert, CreditCard, Ban, AlertTriangle, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import WebsiteLayout from '@/components/layout/WebsiteLayout';

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: <FileCheck className="h-5 w-5" />,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using CodeSpeeder's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Your continued use of the service after such modifications constitutes your acceptance of the updated terms."
        }
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Accounts",
      content: [
        {
          subtitle: "Account Creation",
          text: "To access certain features of our service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason we deem necessary to protect our service and users."
        }
      ]
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Subscriptions and Payments",
      content: [
        {
          subtitle: "Subscription Plans",
          text: "CodeSpeeder offers various subscription plans with different features and pricing. By subscribing, you agree to pay the fees associated with your chosen plan on a recurring basis."
        },
        {
          subtitle: "Billing",
          text: "Subscription fees are billed in advance on a recurring basis (monthly, annually, etc.). You authorize us to charge your payment method for all fees when they become due."
        },
        {
          subtitle: "Refunds",
          text: "We offer a 30-day money-back guarantee for new subscribers. Refund requests must be submitted within 30 days of the initial purchase. After this period, all fees are non-refundable."
        },
        {
          subtitle: "Cancellation",
          text: "You may cancel your subscription at any time. Upon cancellation, you will continue to have access to paid features until the end of your current billing period."
        }
      ]
    },
    {
      icon: <Ban className="h-5 w-5" />,
      title: "Prohibited Activities",
      content: [
        {
          subtitle: "Illegal Use",
          text: "You may not use our service for any illegal purposes or in violation of any applicable laws, including copyright and intellectual property laws."
        },
        {
          subtitle: "Abuse and Harassment",
          text: "You must not use our service to harass, abuse, threaten, or intimidate other users or transmit any content that is harmful, offensive, or objectionable."
        },
        {
          subtitle: "System Interference",
          text: "You must not attempt to interfere with, compromise, or reverse engineer our service, including introducing viruses, malware, or engaging in any activity that could damage or impair our systems."
        },
        {
          subtitle: "Unauthorized Access",
          text: "You must not attempt to gain unauthorized access to any portion of our service, other user accounts, or any systems or networks connected to our service."
        }
      ]
    },
    {
      icon: <ShieldAlert className="h-5 w-5" />,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Rights",
          text: "All content, features, and functionality of our service, including but not limited to text, graphics, logos, and software, are owned by CodeSpeeder and protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of any content you submit to our service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with providing our services."
        },
        {
          subtitle: "DMCA Policy",
          text: "We respect intellectual property rights. If you believe your work has been copied in a way that constitutes copyright infringement, please contact us with a detailed DMCA notice."
        }
      ]
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Disclaimers and Limitations",
      content: [
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted service but do not guarantee that our service will always be available, error-free, or secure. We may suspend or discontinue any part of our service at any time."
        },
        {
          subtitle: "No Warranty",
          text: "Our service is provided 'as is' and 'as available' without warranties of any kind, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose."
        },
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, CodeSpeeder shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our service."
        }
      ]
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: "Governing Law and Disputes",
      content: [
        {
          subtitle: "Applicable Law",
          text: "These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Dispute Resolution",
          text: "Any disputes arising from these terms or your use of our service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association."
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree to resolve disputes with us on an individual basis and waive your right to participate in class actions or class-wide arbitration."
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
                <Scale className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">TERMS OF SERVICE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Terms & <span className="text-primary">Conditions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Please read these terms carefully before using our services.
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
                      These Terms of Service ("Terms") govern your access to and use of CodeSpeeder's website, products, and services ("Service"). Please read these Terms carefully, and contact us if you have any questions. By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
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

              {/* Severability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Severability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Entire Agreement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Entire Agreement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms, together with our Privacy Policy, constitute the entire agreement between you and CodeSpeeder regarding the use of our service and supersede all prior agreements and understandings.
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
                      Questions About Terms?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: legal@codespeeder.com</p>
                      <p>Address: 123 Tech Street, San Francisco, CA 94103</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-amber-500/5 backdrop-blur-sm border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          Important Notice
                          <Badge variant="outline" className="text-amber-600 border-amber-500/30">
                            Please Read
                          </Badge>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          By continuing to use CodeSpeeder's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must discontinue use of our services immediately.
                        </p>
                      </div>
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

export default TermsOfServicePage;
