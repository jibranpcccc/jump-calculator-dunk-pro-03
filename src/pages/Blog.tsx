
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Tag, Calculator, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Exercises to Increase Your Vertical Jump: A Complete Guide",
      excerpt: "Discover the most effective exercises for building explosive jumping power. From plyometrics to strength training, learn which exercises deliver the best results for your vertical jump improvement.",
      category: "Training Tips",
      author: "Basketball Training Expert",
      date: "2024-05-20",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      slug: "increase-vertical-jump-exercises",
      featured: true,
      hasCalculator: true,
      calculatorType: "vertical-jump",
      relatedPosts: ["how-to-dunk-beginners", "vertical-jump-workout"]
    },
    {
      id: 2,
      title: "How to Dunk a Basketball: Complete Beginner's Guide",
      excerpt: "Your comprehensive guide to achieving your first dunk. Learn proper technique, approach strategies, and the training required to go from dreaming to dunking.",
      category: "Dunking Techniques",
      author: "Former College Player",
      date: "2024-05-18",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      slug: "how-to-dunk-beginners",
      featured: false,
      hasCalculator: true,
      calculatorType: "dunk-calculator",
      relatedPosts: ["increase-vertical-jump-exercises", "basketball-jump-technique"]
    },
    {
      id: 3,
      title: "Vertical Jump Workout: 30-Day Challenge Program",
      excerpt: "Follow our proven 30-day vertical jump workout program designed to add inches to your leap. Includes daily exercises, progression tracking, and recovery protocols.",
      category: "Workout Plans",
      author: "Strength Coach",
      date: "2024-05-15",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
      slug: "vertical-jump-workout",
      featured: false,
      hasCalculator: true,
      calculatorType: "hangtime-calculator",
      relatedPosts: ["increase-vertical-jump-exercises", "best-vertical-jump-exercises"]
    },
    {
      id: 4,
      title: "Basketball Jump Technique: Mastering the Perfect Takeoff",
      excerpt: "Perfect your jumping technique with expert analysis of takeoff mechanics. Learn the differences between one-foot and two-foot jumps and which is best for you.",
      category: "Technique Analysis",
      author: "Biomechanics Specialist",
      date: "2024-05-12",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&h=400&fit=crop",
      slug: "basketball-jump-technique",
      featured: false,
      hasCalculator: true,
      calculatorType: "position-calculator",
      relatedPosts: ["how-to-dunk-beginners", "increase-vertical-jump-exercises"]
    },
    {
      id: 5,
      title: "Can You Dunk if You're Short? Height vs. Vertical Jump",
      excerpt: "Explore how shorter athletes can overcome height disadvantages through exceptional vertical jump training. Real examples and success stories included.",
      category: "Motivation",
      author: "Athletic Performance Coach",
      date: "2024-05-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      slug: "dunk-if-you-are-short",
      featured: false,
      hasCalculator: true,
      calculatorType: "bmi-calculator",
      relatedPosts: ["how-to-dunk-beginners", "basketball-jump-technique"]
    },
    {
      id: 6,
      title: "Best Vertical Jump Exercises: Top 10 Moves That Actually Work",
      excerpt: "Cut through the noise with our list of the most effective vertical jump exercises. Each exercise includes proper form instructions and progression tips.",
      category: "Exercise Guides",
      author: "Plyometric Specialist",
      date: "2024-05-08",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=600&h=400&fit=crop",
      slug: "best-vertical-jump-exercises",
      featured: false,
      hasCalculator: false,
      relatedPosts: ["increase-vertical-jump-exercises", "vertical-jump-workout"]
    }
  ];

  const categories = [
    "All Posts",
    "Training Tips",
    "Dunking Techniques", 
    "Workout Plans",
    "Technique Analysis",
    "Nutrition Advice",
    "Exercise Guides",
    "Success Stories",
    "Motivation"
  ];

  const getCalculatorIcon = (calculatorType: string) => {
    switch (calculatorType) {
      case "dunk-calculator":
        return <Calculator className="w-4 h-4" />;
      case "vertical-jump":
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Dunk Calculator Blog | Vertical Jump Tips, Training Drills & Dunk News</title>
        <meta name="description" content="The official blog for Dunk-Calculator.info. Get the latest vertical jump training tips, dunking news, player spotlights, exercise guides, nutrition advice, and more." />
        <meta name="keywords" content="vertical jump blog, basketball training tips, dunk news, exercise guides, plyometric training, basketball performance" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Dunk Calculator Blog: Your Ultimate Source for Jumping Higher & Dunking Better
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert training advice, technique breakdowns, success stories, and the latest insights 
              to help you maximize your vertical jump and achieve your dunking goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  {blogPosts[0].hasCalculator && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium flex items-center">
                        {getCalculatorIcon(blogPosts[0].calculatorType)}
                        <span className="ml-1">Calculator</span>
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      May 20, 2024
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Basketball Training Expert
                    </span>
                    <span>8 min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  {/* Related Posts Preview */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Articles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {blogPosts[0].relatedPosts.map((relatedSlug, index) => {
                        const relatedPost = blogPosts.find(post => post.slug === relatedSlug);
                        return relatedPost ? (
                          <Link 
                            key={index}
                            to={`/blog/${relatedPost.slug}`}
                            className="text-xs bg-white px-2 py-1 rounded border hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            {relatedPost.title.substring(0, 30)}...
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                  
                  <Link 
                    to="/blog/increase-vertical-jump-exercises"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="space-y-6">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                        {post.hasCalculator && (
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-medium flex items-center">
                              {getCalculatorIcon(post.calculatorType)}
                              <span className="ml-1">Tool</span>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm">
                          {post.excerpt}
                        </p>
                        
                        {/* Related Posts for each post */}
                        {post.relatedPosts && (
                          <div className="mb-3 p-2 bg-gray-50 rounded text-xs">
                            <span className="font-medium text-gray-700">Related: </span>
                            {post.relatedPosts.slice(0, 2).map((relatedSlug, index) => {
                              const relatedPost = blogPosts.find(p => p.slug === relatedSlug);
                              return relatedPost ? (
                                <Link 
                                  key={index}
                                  to={`/blog/${relatedPost.slug}`}
                                  className="text-orange-600 hover:text-orange-700 mr-2"
                                >
                                  {relatedPost.title.substring(0, 25)}...{index < post.relatedPosts.length - 1 ? ', ' : ''}
                                </Link>
                              ) : null;
                            })}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-orange-600 text-white rounded font-medium">
                    1
                  </button>
                  <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                    3
                  </button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Calculator Tools */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Free Basketball Tools
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/"
                    className="block p-3 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <Calculator className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="font-medium text-orange-800">Dunk Calculator</span>
                    </div>
                    <p className="text-xs text-orange-600 mt-1">Check if you can dunk</p>
                  </Link>
                  
                  <Link
                    to="/calculators/hangtime"
                    className="block p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Hangtime Calculator</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">Air time calculator</p>
                  </Link>
                  
                  <Link
                    to="/calculators"
                    className="block text-center text-orange-600 hover:text-orange-700 font-medium text-sm py-2"
                  >
                    View All Tools →
                  </Link>
                </div>
              </div>

              {/* Search */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search training tips..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors text-sm"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-medium text-gray-900 text-sm mb-2 hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-gray-500 text-xs flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                        {post.hasCalculator && (
                          <span className="ml-2 px-1 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">
                            Tool
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Start Training?</h3>
                <p className="text-orange-100 text-sm mb-4">
                  Use our free dunk calculator to assess your current potential and get personalized training recommendations.
                </p>
                <Link 
                  to="/"
                  className="inline-block w-full bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm"
                >
                  Try Calculator Now
                </Link>
              </div>

              {/* External Resources */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.nba.com/stats/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800 text-sm">NBA Statistics</span>
                    <p className="text-xs text-gray-600 mt-1">Official NBA player stats and data</p>
                  </a>
                  
                  <a
                    href="https://www.ncaa.com/sports/basketball-men"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800 text-sm">NCAA Basketball</span>
                    <p className="text-xs text-gray-600 mt-1">College basketball news and stats</p>
                  </a>
                </div>
              </div>

              {/* Archives */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Archives</h3>
                <div className="space-y-2">
                  <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors text-sm">
                    May 2024 (6)
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors text-sm">
                    April 2024 (4)
                  </button>
                  <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors text-sm">
                    March 2024 (5)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
