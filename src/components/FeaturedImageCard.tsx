
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string;
}

const FeaturedImageCard = ({ 
  src, 
  alt, 
  title, 
  description, 
  className = "" 
}: FeaturedImageCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <div className="relative">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            {description && (
              <p className="text-white/90 text-sm mt-1">{description}</p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default FeaturedImageCard;
