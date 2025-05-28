
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, TrendingUp, Target, Users } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "8-Week Vertical Jump Workout Plan: Science-Backed Training for Explosive Hops",
      excerpt: "Transform your vertical jump with our comprehensive 8-week program. Includes plyometrics, strength training, and recovery protocols used by professional athletes.",
      author: "Coach Mike Johnson",
      date: "2024-05-25",
      readTime: "12 min read",
      category: "Training Programs",
      featured: true,
      image: "/blog/vertical-jump-workout.jpg"
    },
    {
      id: 2,
      title: "How to Measure Your Vertical Jump: 5 Accurate Methods Compared", 
      excerpt: "Discover the most accurate ways to measure your vertical jump, from simple wall tests to advanced equipment. Learn which method works best for tracking progress.",
      author: "Dr. Sarah Williams",
      date: "2024-05-22",
      readTime: "8 min read",
      category: "Measurements",
      featured: false,
      image: "/blog/measure-vertical-jump.jpg"
    },
    {
      id: 3,
      title: "Best Plyometric Exercises to Increase Your Vertical Jump",
      excerpt: "Master the most effective plyometric exercises for basketball players. Detailed form instructions, progressions, and sample workouts included.",
      author: "Coach Mike Johnson", 
      date: "2024-05-20",
      readTime: "10 min read",
      category: "Exercises",
      featured: false,
      image: "/blog/plyometric-exercises.jpg"
    },
    {
      id: 4,
      title: "Basketball Height Requirements: Can You Dunk at Any Height?",
      excerpt: "Explore how height affects dunking ability and learn about the shortest players who've achieved incredible dunks. Plus tips for shorter players.",
      author: "Basketball Analytics Team",
      date: "2024-05-18",
      readTime: "6 min read", 
      category: "Analysis",
      featured: false,
      image: "/blog/height-requirements.jpg"
    },
    {
      id: 5,
      title: "Nutrition for Vertical Jump: Foods That Fuel Explosive Power",
      excerpt: "Optimize your diet for maximum jumping performance. Learn about pre-workout nutrition, recovery foods, and supplements that actually work.",
      author: "Dr. Sarah Williams",
      date: "2024-05-15",
      readTime: "9 min read",
      category: "Nutrition", 
      featured: false,
      image: "/blog/nutrition-vertical-jump.jpg"
    },
    {
      id: 6,
      title: "Success Story: From 24-Inch to 36-Inch Vertical in 6 Months",
      excerpt: "Meet Marcus, a high school player who transformed his game with dedicated training. Learn his exact workout plan and mindset strategies.",
      author: "Success Stories Team",
      date: "2024-05-12",
      readTime: "7 min read",
      category: "Success Stories",
      featured: false,
      image: "/blog/success-story-marcus.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "Training Programs", 
    "Exercises",
    "Measurements",
    "Nutrition",
    "Analysis",
    "Success Stories"
  ];

  return (
    <>
      <Helmet>
        <title>Dunk Calculator Blog | Vertical Jump Tips, Training & Basketball Insights</title>
        <meta name="description" content="Get expert vertical jump training tips, dunking techniques, player analysis, and success stories. Your complete resource for basketball performance improvement." />
        <meta name="keywords" content="vertical jump training blog, basketball training tips, dunking techniques, plyometric exercises, basketball performance, jump higher" />
        <link rel="canonical" href="https://dunkcalculator.com/blog/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dunk Calculator Blog | Vertical Jump Tips & Training" />
        <meta property="og:description" content="Expert basketball training content, vertical jump tips, and success stories to help you improve your game." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunkcalculator.com/blog/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Dunk Calculator Blog",
            "description": "Expert basketball training content, vertical jump tips, dunking techniques, and success stories for players of all levels.",
            "url": "https://dunkcalculator.com/blog/",
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dunkcalculator.com/logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": blogPosts.map((post, index) => ({
                "@type": "BlogPosting",
                "position": index + 1,
                "headline": post.title,
                "description": post.excerpt,
                "datePublished": post.date,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "url": `https://dunkcalculator.com/blog/${post.id}`
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Dunk Calculator Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your source for expert basketball training tips, vertical jump techniques, and inspiring success stories. 
              Everything you need to take your game to the next level.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Target className="w-5 h-5 mr-2" />
              Try Our Dunk Calculator
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Regular Posts */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt.substring(0, 120)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium">1</button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-orange-100">2</button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-orange-100">3</button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-orange-100">Next →</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search training tips, exercises..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-3 text-gray-400 hover:text-orange-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button 
                      key={index}
                      className="w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map(post => (
                    <div key={post.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1 hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>
                          {post.title.substring(0, 60)}...
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Get Training Tips Weekly</h3>
                <p className="mb-4 text-sm">
                  Join 50,000+ basketball players getting exclusive training tips, workout plans, and dunking secrets.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-2 text-gray-900 rounded-lg focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Subscribe Free
                  </button>
                </div>
                <p className="text-xs mt-2 opacity-90">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Calculator CTA */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Test Your Potential?</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    See if you can dunk with our accurate calculator used by 100,000+ players.
                  </p>
                  <Link 
                    to="/"
                    className="inline-block w-full px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-center"
                  >
                    Try Dunk Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
