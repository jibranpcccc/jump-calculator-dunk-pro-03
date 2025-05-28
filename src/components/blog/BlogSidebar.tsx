
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Search, Tag, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  slug: string;
  hasCalculator: boolean;
}

interface BlogSidebarProps {
  categories: string[];
  recentPosts: BlogPost[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories, recentPosts }) => {
  return (
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
          {recentPosts.map((post) => (
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
  );
};

export default BlogSidebar;
