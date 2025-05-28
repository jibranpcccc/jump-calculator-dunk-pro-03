
import { Helmet } from "react-helmet";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 48 hours.');
  };

  return (
    <>
      <Helmet>
        <title>Contact Dunk Calculator | Get in Touch with Our Team</title>
        <meta name="description" content="Have questions, feedback, or suggestions for Dunk Calculator? Contact us here. We'd love to hear from you and help with your basketball training journey!" />
        <meta name="keywords" content="contact dunk calculator, basketball training support, vertical jump questions, dunking help" />
        <link rel="canonical" href="https://dunkcalculator.com/contact/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us – We're Here to Help!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about your dunk potential, training advice, or feedback about our calculator? 
              We value your input and are here to support your basketball journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
              </div>
              
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="calculator-question">Calculator Question</option>
                    <option value="training-advice">Training Advice</option>
                    <option value="measurement-help">Measurement Help</option>
                    <option value="technical-issue">Technical Issue</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="success-story">Share Success Story</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-gray-600">We aim to respond within 48 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@dunkcalculator.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Calculator Questions?</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Check our <a href="/faq" className="text-orange-600 underline">FAQ page</a> for common questions about measurements and calculations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Need Training Help?</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Explore our <a href="/vertical-jump-training" className="text-orange-600 underline">training guides</a> for comprehensive workout programs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Measurement Issues?</h3>
                    <p className="text-gray-600 text-sm">
                      Visit our <a href="/measurements" className="text-orange-600 underline">measurement guides</a> for step-by-step instructions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-orange-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Success!</h2>
                <p className="text-gray-600 mb-4">
                  Did you achieve your first dunk after using our calculator and training guides? 
                  We'd love to hear your story and potentially feature it to inspire other players!
                </p>
                <p className="text-gray-600 text-sm">
                  Include details like your starting measurements, training duration, and any photos or videos 
                  you're comfortable sharing.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Support */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Can We Help You With?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Calculator Support</h3>
                <p className="text-sm text-gray-600">Questions about using the dunk calculator or interpreting results</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Training Guidance</h3>
                <p className="text-sm text-gray-600">Advice on vertical jump training and exercise programs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Issues</h3>
                <p className="text-sm text-gray-600">Website problems or technical difficulties</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Feedback</h3>
                <p className="text-sm text-gray-600">Suggestions for improving our calculator and content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
