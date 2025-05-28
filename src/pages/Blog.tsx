import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumb from "@/components/Breadcrumb";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Increase Your Vertical Jump for Dunking",
      slug: "increase-vertical-jump-exercises",
      description: "Learn the best exercises and training methods to boost your vertical leap and finally dunk a basketball.",
      category: "Vertical Training",
      readTime: "8 min read",
      date: "2024-12-01",
      featured: true
    },
    {
      title: "How to Dunk a Basketball: Step-by-Step for Beginners",
      slug: "how-to-dunk-beginners",
      description: "Complete beginner's guide to dunking with proper technique, timing, and practice progression.",
      category: "Dunk Tips",
      readTime: "6 min read",
      date: "2024-11-28",
      featured: true
    },
    {
      title: "Can I Dunk If I'm Short? Tips for Players Under 6 Feet",
      slug: "dunk-if-you-are-short",
      description: "Success stories and specialized training for shorter players who want to dunk.",
      category: "Dunk Tips",
      readTime: "7 min read",
      date: "2024-11-25",
      featured: true
    },
    {
      title: "7 Best Exercises to Increase Vertical Jump",
      slug: "best-vertical-jump-exercises",
      description: "Proven plyometric and strength exercises that will dramatically improve your jumping ability.",
      category: "Vertical Training",
      readTime: "5 min read",
      date: "2024-11-22"
    },
    {
      title: "Common Mistakes That Prevent You from Dunking",
      slug: "common-dunking-mistakes",
      description: "Avoid these training errors and technique flaws that hold back your vertical jump progress.",
      category: "Training",
      readTime: "6 min read",
      date: "2024-11-20"
    },
    {
      title: "Best Basketball Shoes for Vertical Jump & Dunking",
      slug: "best-shoes-for-vertical-leap",
      description: "Review of basketball shoes that can help improve your jumping performance and vertical leap.",
      category: "Gear",
      readTime: "4 min read",
      date: "2024-11-18"
    },
    {
      title: "How to Measure Your Vertical Jump at Home",
      slug: "how-to-measure-vertical-jump",
      description: "Easy DIY methods to accurately measure your vertical leap using simple household items.",
      category: "Testing",
      readTime: "4 min read",
      date: "2024-11-15"
    },
    {
      title: "Nutrition Tips to Increase Your Vertical Jump",
      slug: "nutrition-vertical-jump",
      description: "Fuel your body properly for maximum jumping performance with these nutrition strategies.",
      category: "Training",
      readTime: "5 min read",
      date: "2024-11-12"
    },
    {
      title: "Complete Vertical Jump Workout Plan",
      slug: "vertical-jump-workout",
      description: "8-week progressive workout plan designed to maximize your vertical jump and dunking ability.",
      category: "Vertical Training",
      readTime: "7 min read",
      date: "2024-11-10"
    },
    {
      title: "Basketball Jump Technique: Perfect Your Form",
      slug: "basketball-jump-technique",
      description: "Master the fundamentals of jumping technique for basketball with detailed form breakdowns.",
      category: "Technique",
      readTime: "6 min read",
      date: "2024-11-08"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Basketball Dunk Training Blog – Jump Higher & Dunk Better</title>
        <meta name="description" content="Expert basketball training blog with tips on increasing vertical jump, dunk techniques, and slam dunk training. Learn from our comprehensive guides and use our dunk calculator." />
        <meta name="keywords" content="basketball blog, dunk training, vertical jump tips, slam dunk techniques, basketball training blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Basketball Dunk Training Blog – Jump Higher & Dunk Better" />
        <meta property="og:description" content="Expert basketball training blog with tips on increasing vertical jump, dunk techniques, and slam dunk training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dunkcalculator.com/blog" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Dunk Calculator Blog",
            "description": "Basketball training blog focused on vertical jump improvement and dunking techniques",
            "url": "https://dunkcalculator.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Dunk Calculator"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "url": `https://dunkcalculator.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "Dunk Calculator"
              }
            }))
          })}
        </script>
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
                <Link to="/blog" className="text-orange-600 font-medium">Blog</Link>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={[{ label: "Blog" }]} />

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Basketball Training Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Expert tips on vertical jump training, dunk techniques, and basketball performance. Learn how to jump higher and dunk better with our comprehensive guides.
              </p>
              <Link to="/">
                <div className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <Calculator className="mr-2 h-5 w-5" />
                  Try Dunk Calculator
                </div>
              </Link>
            </div>

            {/* Featured Posts */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.filter(post => post.featured).map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="flex-1 mb-4">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-lg hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16">
              <Card className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Test Your Dunking Ability?</h2>
                  <p className="text-lg mb-6">Use our dunk calculator to see how close you are to dunking, then follow our training guides to get there!</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Try Dunk Calculator
                    </Link>
                    <Link to="/vertical-jump-training" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                      Start Training
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

export default Blog;
