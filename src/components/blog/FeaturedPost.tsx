
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Calculator, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured: boolean;
  hasCalculator: boolean;
  calculatorType: string;
  relatedPosts: string[];
}

interface FeaturedPostProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, allPosts }) => {
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
        {post.hasCalculator && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium flex items-center">
              {getCalculatorIcon(post.calculatorType)}
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
            {post.author}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Articles:</h4>
          <div className="flex flex-wrap gap-2">
            {post.relatedPosts.map((relatedSlug, index) => {
              const relatedPost = allPosts.find(p => p.slug === relatedSlug);
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
  );
};

export default FeaturedPost;
