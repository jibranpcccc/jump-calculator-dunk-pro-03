
import { Helmet } from "react-helmet";
import { FileText, AlertTriangle, Scale, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const TermsOfService = () => {
  const lastUpdated = "January 2025";

  return (
    <>
      <Helmet>
        <title>Terms of Service | Dunk-Calculator.info - Website Usage Agreement</title>
        <meta name="description" content="Please read the Terms of Service for using Dunk-Calculator.info. These terms govern your access to and use of our website, content, and services." />
        <meta name="keywords" content="terms of service, website terms, user agreement, dunk calculator terms" />
        <link rel="canonical" href="https://dunkcalculator.com/terms-of-service/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-orange-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of Dunk-Calculator.info. By accessing or using our website, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: {lastUpdated}</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Important Notice */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h2 className="text-lg font-bold text-red-800 mb-2">Important Legal Notice</h2>
                  <p className="text-red-700 text-sm">
                    Please read these terms carefully. By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                    If you do not agree to these terms, please do not use our website.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="p-8 space-y-8">
              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using Dunk-Calculator.info (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. 
                  These Terms of Service constitute a legally binding agreement between you and Dunk-Calculator.info.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>Effective Date:</strong> These terms are effective immediately upon your first use of the website and continue until terminated.
                  </p>
                </div>
              </section>

              {/* Use of Website */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website and Content</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Uses</h3>
                <ul className="space-y-2 text-gray-600 ml-6 mb-4">
                  <li>• Personal, non-commercial use of the dunk calculator and educational content</li>
                  <li>• Educational use by coaches, trainers, and teachers with proper attribution</li>
                  <li>• Sharing links to our content (we encourage this!)</li>
                  <li>• Printing content for personal reference</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold mb-2">You may NOT:</p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• Copy, reproduce, or redistribute our content without permission</li>
                    <li>• Use our content for commercial purposes without explicit authorization</li>
                    <li>• Attempt to reverse engineer or copy our calculator algorithms</li>
                    <li>• Submit false, misleading, or harmful information</li>
                    <li>• Use the website to spam, harass, or harm others</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Use automated tools to scrape or download content in bulk</li>
                  </ul>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
                <p className="text-gray-600 mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, 
                  data compilations, and software, is the property of Dunk-Calculator.info or its content suppliers and is protected by 
                  international copyright laws.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Rights</h4>
                    <p className="text-sm text-gray-600">
                      We own or license all intellectual property on this website, including the calculator algorithms, content, and design.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Your Rights</h4>
                    <p className="text-sm text-gray-600">
                      You may use our content for personal, educational purposes with proper attribution to Dunk-Calculator.info.
                    </p>
                  </div>
                </div>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimers</h2>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Accuracy of Information</h3>
                    <p className="text-gray-700 text-sm">
                      While we strive for accuracy, information on this website (including calculator results) is provided for informational 
                      and motivational purposes only and is not guaranteed to be accurate, complete, or up-to-date. Results may vary based on 
                      individual factors and measurement accuracy.
                    </p>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">Not Professional Advice</h3>
                    <p className="text-gray-700 text-sm">
                      Content on this website, especially training and nutrition advice, is not a substitute for professional medical, 
                      fitness, or dietary advice. Always consult qualified healthcare professionals before starting any new exercise 
                      or nutrition program.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Assumption of Risk</h3>
                    <p className="text-gray-700 text-sm">
                      You assume all risks associated with using the information and following training programs described on this website. 
                      Physical exercise involves inherent risks of injury. Consult with a healthcare provider before beginning any exercise program.
                    </p>
                  </div>
                </div>
              </section>

              {/* User-Generated Content */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User-Generated Content</h2>
                <p className="text-gray-600 mb-4">
                  When you submit content to us (through contact forms, feedback, or success stories), you grant us a non-exclusive, 
                  royalty-free license to use, reproduce, and publish such content for the purpose of improving our website and helping other users.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Your Responsibilities</h4>
                  <ul className="space-y-1 text-gray-600 text-sm ml-4">
                    <li>• Ensure all submitted content is accurate and truthful</li>
                    <li>• Do not submit copyrighted material without permission</li>
                    <li>• Keep content appropriate and respectful</li>
                    <li>• You retain ownership of your submitted content</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                  <p className="text-gray-700 text-sm mb-3">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, DUNK-CALCULATOR.INFO SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, 
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THIS WEBSITE.
                  </p>
                  <p className="text-gray-600 text-sm">
                    This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, 
                    even if we have been advised of the possibility of such damages.
                  </p>
                </div>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify, defend, and hold harmless Dunk-Calculator.info, its officers, directors, employees, agents, 
                  and third parties from and against any and all claims, damages, costs, and expenses arising from your use of the website 
                  or your breach of these Terms of Service.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting 
                  on this page with an updated "Last updated" date.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Your Options:</strong> Continued use of the website after changes constitutes acceptance of the new terms. 
                    If you disagree with changes, please discontinue use of the website.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction where 
                  Dunk-Calculator.info is operated, without regard to its conflict of law principles.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Email:</strong> legal@dunkcalculator.com</li>
                    <li>• <strong>Contact Form:</strong> <Link to="/contact" className="text-orange-600 hover:underline">Use our contact page</Link></li>
                    <li>• <strong>Response Time:</strong> We aim to respond to all legal inquiries within 48 hours</li>
                  </ul>
                </div>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Severability</h2>
                <p className="text-gray-600">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited 
                  or eliminated to the minimum extent necessary so that the remaining terms will remain in full force and effect.
                </p>
              </section>
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-3 gap-6">
            <Link
              to="/privacy-policy"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Scale className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">Learn how we protect your personal information</p>
            </Link>

            <Link
              to="/contact"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Users className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Have questions about these terms?</p>
            </Link>

            <Link
              to="/"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <FileText className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">Back to Calculator</h3>
              <p className="text-gray-600 text-sm">Start using our free dunk calculator</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
