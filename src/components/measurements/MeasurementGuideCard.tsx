
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface MeasurementGuide {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  difficulty: string;
  time: string;
  featured: boolean;
}

interface MeasurementGuideCardProps {
  guide: MeasurementGuide;
}

const MeasurementGuideCard: React.FC<MeasurementGuideCardProps> = ({ guide }) => {
  const IconComponent = guide.icon;
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${
        guide.featured ? 'border-2 border-orange-200' : ''
      }`}
    >
      {guide.featured && (
        <div className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded mb-4">
          ESSENTIAL
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <IconComponent className="w-8 h-8 text-orange-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {guide.description}
      </p>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4 text-sm text-gray-500">
          <span>Difficulty: <strong className="text-gray-700">{guide.difficulty}</strong></span>
          <span>Time: <strong className="text-gray-700">{guide.time}</strong></span>
        </div>
      </div>
      
      <Link 
        to={guide.url}
        className="inline-flex items-center w-full justify-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Learn This Measurement <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default MeasurementGuideCard;
