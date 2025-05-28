
import { Helmet } from "react-helmet";
import { Shield, Eye, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const PrivacyPolicy = () => {
  const lastUpdated = "January 2025";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dunk-Calculator.info - Your Data Rights</title>
        <meta name="description" content="Read the official Privacy Policy for Dunk-Calculator.info to understand how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="privacy policy, data protection, user privacy, dunk calculator privacy" />
        <link rel="canonical" href="https://dunkcalculator.com/privacy-policy/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-orange-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Dunk-Calculator.info.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: {lastUpdated}</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Quick Overview */}
            <div className="bg-orange-50 p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">What We Collect</h3>
                    <p className="text-sm text-gray-600">Calculator inputs, contact form data, and basic analytics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">How We Protect</h3>
                    <p className="text-sm text-gray-600">SSL encryption, secure servers, no third-party sales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Your Rights</h3>
                    <p className="text-sm text-gray-600">Access, correct, or delete your data anytime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Policy */}
            <div className="p-8 space-y-8">
              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Information You Provide to Us</h3>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• <strong>Calculator Inputs:</strong> Height, standing reach, vertical jump, and optional demographic information (age, weight) when using our dunk calculator</li>
                    <li>• <strong>Contact Information:</strong> Name, email address, and message content when you contact us through our contact form</li>
                    <li>• <strong>Feedback:</strong> Any suggestions, success stories, or feedback you choose to share with us</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Information Automatically Collected</h3>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• <strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, and referral sources</li>
                    <li>• <strong>Device Information:</strong> Browser type, operating system, screen resolution, and device type</li>
                    <li>• <strong>IP Address:</strong> For analytics and security purposes (automatically anonymized)</li>
                    <li>• <strong>Cookies:</strong> Small files that help us improve your experience and analyze site usage</li>
                  </ul>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• Provide and improve our dunk calculator functionality</li>
                    <li>• Respond to your inquiries and provide customer support</li>
                    <li>• Analyze site usage to improve user experience and content</li>
                    <li>• Send relevant information if you've specifically requested it</li>
                    <li>• Ensure site security and prevent abuse</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold mb-2">We do NOT sell your personal information to third parties.</p>
                  <p className="text-gray-700">We may share information only in these limited circumstances:</p>
                  <ul className="space-y-2 text-gray-600 ml-6 mt-3">
                    <li>• <strong>Analytics Providers:</strong> Google Analytics (with IP anonymization) to understand site usage</li>
                    <li>• <strong>Service Providers:</strong> Hosting and email services that help us operate the website</li>
                    <li>• <strong>Legal Requirements:</strong> If required by law or to protect our rights and users' safety</li>
                    <li>• <strong>Business Transfer:</strong> In the unlikely event of a merger or acquisition</li>
                  </ul>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for basic site functionality and cannot be disabled</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors use our site to improve performance</p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• <strong>SSL Encryption:</strong> All data transmitted to and from our site is encrypted</li>
                  <li>• <strong>Secure Servers:</strong> Data is stored on secure servers with restricted access</li>
                  <li>• <strong>Regular Updates:</strong> We keep our security measures current with industry standards</li>
                  <li>• <strong>Limited Access:</strong> Only authorized personnel have access to personal information</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">You have the right to:</p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li>• <strong>Correct:</strong> Request correction of inaccurate or incomplete information</li>
                    <li>• <strong>Delete:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                    <li>• <strong>Object:</strong> Object to processing of your personal information for certain purposes</li>
                    <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                  </ul>
                  <p className="text-gray-600 mt-3">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-600">
                  Our website is designed for general audiences and we do not knowingly collect personal information from children under 13. 
                  If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
                </p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page 
                  and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Email:</strong> privacy@dunkcalculator.com</li>
                    <li>• <strong>Contact Form:</strong> <Link to="/contact" className="text-orange-600 hover:underline">Use our contact page</Link></li>
                    <li>• <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
