
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
  hasCalculator: boolean;
  calculatorType: string;
  relatedPosts?: string[];
}

interface BlogPostCardProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, allPosts }) => {
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
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
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
          
          {post.relatedPosts && (
            <div className="mb-3 p-2 bg-gray-50 rounded text-xs">
              <span className="font-medium text-gray-700">Related: </span>
              {post.relatedPosts.slice(0, 2).map((relatedSlug, index) => {
                const relatedPost = allPosts.find(p => p.slug === relatedSlug);
                return relatedPost ? (
                  <Link 
                    key={index}
                    to={`/blog/${relatedPost.slug}`}
                    className="text-orange-600 hover:text-orange-700 mr-2"
                  >
                    {relatedPost.title.substring(0, 25)}...{index < post.relatedPosts!.length - 1 ? ', ' : ''}
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
  );
};

export default BlogPostCard;
