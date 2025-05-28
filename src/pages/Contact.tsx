
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, Mail, MessageSquare, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Dunk Calculator');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:contact@dunkcalculator.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email client should open with the message pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactReasons = [
    {
      icon: <HelpCircle className="h-6 w-6 text-orange-600" />,
      title: "General Questions",
      description: "Have questions about dunking, vertical jump training, or using our calculator?"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-600" />,
      title: "Feedback & Suggestions",
      description: "Help us improve by sharing your ideas for new features or content."
    },
    {
      icon: <Calculator className="h-6 w-6 text-orange-600" />,
      title: "Technical Issues",
      description: "Experiencing problems with the dunk calculator or website? Let us know."
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Partnership Inquiries",
      description: "Interested in collaborating or featuring our tools on your platform?"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us – Dunk Calculator Support & Feedback</title>
        <meta name="description" content="Get in touch with the Dunk Calculator team. We're here to help with questions about dunking, vertical jump training, or technical support." />
        <meta name="keywords" content="contact dunk calculator, basketball training support, vertical jump help, dunking questions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us – Dunk Calculator Support & Feedback" />
        <meta property="og:description" content="Reach out to our team for support, feedback, or questions about basketball training and dunking." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
              <Link to="/" className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-orange-600" aria-hidden="true" />
                <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
                <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
                <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Contact</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about dunking, need help with our calculator, or want to share feedback? We'd love to hear from you!
              </p>
            </div>

            {/* Quick Links */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Can We Help?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactReasons.map((reason, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        {reason.icon}
                        <CardTitle className="text-lg">{reason.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{reason.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject
                          </label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Tell us more about your question or feedback..."
                          />
                        </div>
                        
                        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-orange-600" />
                        <span>Direct Email</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-2">For quick questions or direct communication:</p>
                      <p className="text-orange-600 font-medium">contact@dunkcalculator.com</p>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <HelpCircle className="h-5 w-5 text-orange-600" />
                        <span>Frequently Asked Questions</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Many common questions are already answered in our FAQ section.
                      </p>
                      <Link to="/faq" className="text-orange-600 hover:text-orange-700 font-medium">
                        Browse FAQ →
                      </Link>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Response Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We typically respond to messages within 24-48 hours during business days. 
                        For urgent technical issues, please include "URGENT" in your subject line.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">While You're Here...</h2>
                  <p className="text-lg mb-6">
                    Don't forget to try our dunk calculator and explore our training resources to help achieve your dunking goals!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Try Dunk Calculator
                    </Link>
                    <Link to="/vertical-jump-training" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                      Training Guides
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
