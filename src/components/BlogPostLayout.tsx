
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight, Calculator, ExternalLink } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import SEOHead from "./SEOHead";

interface BlogPostLayoutProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  children: ReactNode;
  relatedPosts?: Array<{
    title: string;
    url: string;
    excerpt: string;
  }>;
  relatedCalculators?: Array<{
    title: string;
    url: string;
    description: string;
    icon: ReactNode;
  }>;
  externalLinks?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
  keywords?: string;
  canonicalUrl?: string;
}

const BlogPostLayout = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=630&fit=crop",
  children,
  relatedPosts = [],
  relatedCalculators = [],
  externalLinks = [],
  keywords,
  canonicalUrl
}: BlogPostLayoutProps) => {
  return (
    <>
      <SEOHead
        title={title}
        description={excerpt}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={image}
        pageType="article"
        author={author}
        publishedTime={date}
      />

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="relative">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
                      {category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {readTime}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {excerpt}
                  </p>

                  {/* Related Calculators Section */}
                  {relatedCalculators.length > 0 && (
                    <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <Calculator className="w-5 h-5 mr-2" />
                        Try These Related Tools
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {relatedCalculators.map((calc, index) => (
                          <Link
                            key={index}
                            to={calc.url}
                            className="block p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                          >
                            <div className="flex items-center mb-2">
                              {calc.icon}
                              <span className="font-semibold text-blue-900 ml-2">{calc.title}</span>
                            </div>
                            <p className="text-sm text-blue-700">{calc.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Article Content */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="prose prose-lg max-w-none">
                  {children}
                </div>
              </div>

              {/* External Resources */}
              {externalLinks.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ExternalLink className="w-6 h-6 mr-2" />
                    Additional Resources
                  </h3>
                  <div className="space-y-4">
                    {externalLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{link.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={post.url}
                        className="block p-6 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                        <span className="inline-flex items-center text-orange-600 font-medium text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-6 sticky top-8">
                {/* Quick Navigation */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
                  <div className="space-y-3">
                    <Link
                      to="/"
                      className="block p-3 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <Calculator className="w-4 h-4 text-orange-600 mr-2" />
                        <span className="font-medium text-orange-800">Dunk Calculator</span>
                      </div>
                    </Link>
                    
                    <Link
                      to="/blog"
                      className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-800">All Blog Posts</span>
                    </Link>
                    
                    <Link
                      to="/calculators"
                      className="block p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="font-medium text-blue-800">All Calculators</span>
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Start Your Journey</h3>
                  <p className="text-orange-100 text-sm mb-4">
                    Ready to improve your vertical jump? Start with our free assessment tools.
                  </p>
                  <Link 
                    to="/"
                    className="inline-block w-full bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm"
                  >
                    Try Calculator Now
                  </Link>
                </div>

                {/* Training Resources */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Training Resources</h3>
                  <div className="space-y-3">
                    <Link
                      to="/vertical-jump-training"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      • Complete Training Guide
                    </Link>
                    <Link
                      to="/vertical-jump-training/plyometrics"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      • Plyometric Exercises
                    </Link>
                    <Link
                      to="/vertical-jump-training/strength-training"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      • Strength Training
                    </Link>
                    <Link
                      to="/measurements"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      • Measurement Guides
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPostLayout;
