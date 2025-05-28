
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Question about the Calculator',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Dunk-Calculator.info | Get in Touch With Us</title>
        <meta name="description" content="Have questions, feedback, partnership inquiries, or suggestions for Dunk-Calculator.info? Contact our team here. We'd love to hear from you!" />
        <meta name="keywords" content="contact dunk calculator, support, feedback, questions, partnership inquiry" />
        <link rel="canonical" href="https://dunkcalculator.com/contact/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us – We're Here to Help & Listen!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value your feedback, questions, and suggestions. Whether you have a query about our Dunk Calculator, 
              a training question, or just want to share your progress, please don't hesitate to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="Question about the Calculator">Question about the Calculator</option>
                      <option value="Training Question">Training Question</option>
                      <option value="Feedback/Suggestion">Feedback/Suggestion</option>
                      <option value="Partnership Inquiry">Partnership Inquiry</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us how we can help you or share your thoughts..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to Dunk-Calculator.info collecting my details through this form for the purpose of responding to my inquiry. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your message! We'll get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'Question about the Calculator',
                        message: '',
                        consent: false
                      });
                    }}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* How to Reach Us */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">How to Reach Us</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Primary Contact Method</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      The contact form is our preferred method of communication as it helps us categorize and respond to inquiries efficiently.
                    </p>
                    <p className="text-blue-600 text-sm">
                      All form submissions are reviewed personally by our team.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Direct Email</h3>
                    <p className="text-green-700 text-sm mb-2">
                      You can also email us directly at:
                    </p>
                    <a 
                      href="mailto:info@dunkcalculator.com" 
                      className="text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      info@dunkcalculator.com
                    </a>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Social Media</h3>
                    <p className="text-purple-700 text-sm mb-3">
                      Connect with us on social media for updates, tips, and community discussions:
                    </p>
                    <div className="space-y-2">
                      <a href="#" className="block text-purple-600 hover:text-purple-700 transition-colors text-sm">
                        📸 Instagram: @dunkcalculator
                      </a>
                      <a href="#" className="block text-purple-600 hover:text-purple-700 transition-colors text-sm">
                        🐦 Twitter: @dunkcalculator
                      </a>
                      <a href="#" className="block text-purple-600 hover:text-purple-700 transition-colors text-sm">
                        📘 Facebook: Dunk Calculator Community
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Quick Response Time:</strong>
                      <span className="text-gray-600"> We aim to respond to all inquiries within 24-48 business hours</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Personal Attention:</strong>
                      <span className="text-gray-600"> Every message is read and responded to personally by our team</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Continuous Improvement:</strong>
                      <span className="text-gray-600"> Your input helps us make Dunk-Calculator.info the best resource possible</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900">Privacy Respected:</strong>
                      <span className="text-gray-600"> We never share your information and only use it to respond to your inquiry</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Questions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Inquiry Types</h2>
                
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h3 className="font-semibold text-orange-800 text-sm mb-1">Calculator Questions</h3>
                    <p className="text-orange-700 text-xs">
                      How the calculator works, accuracy, measurement tips, result interpretation
                    </p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 text-sm mb-1">Training Guidance</h3>
                    <p className="text-blue-700 text-xs">
                      Program recommendations, exercise form, progression advice, injury concerns
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800 text-sm mb-1">Success Stories</h3>
                    <p className="text-green-700 text-xs">
                      Sharing your progress, before/after results, training testimonials
                    </p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-800 text-sm mb-1">Technical Issues</h3>
                    <p className="text-purple-700 text-xs">
                      Website problems, mobile compatibility, calculator errors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
