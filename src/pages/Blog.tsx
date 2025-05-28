import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogPostCard from "../components/blog/BlogPostCard";
import BlogSidebar from "../components/blog/BlogSidebar";

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
      calculatorType: "",
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

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
          <BlogHero />

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {featuredPost && (
                <FeaturedPost post={featuredPost} allPosts={blogPosts} />
              )}

              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} allPosts={blogPosts} />
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

            <BlogSidebar categories={categories} recentPosts={blogPosts.slice(0, 4)} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
