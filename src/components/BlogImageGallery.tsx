
import FeaturedImageCard from "./FeaturedImageCard";

interface BlogImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const BlogImageGallery = () => {
  const blogImages: BlogImage[] = [
    {
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      alt: "Basketball player dunking during game with perfect form and technique",
      title: "Professional Dunking Technique",
      description: "Master the fundamentals of successful dunking",
      category: "technique"
    },
    {
      src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
      alt: "Athlete performing vertical jump training exercises with plyometric box jumps",
      title: "Vertical Jump Training",
      description: "Explosive exercises to increase jumping power",
      category: "training"
    },
    {
      src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&h=400&fit=crop",
      alt: "NBA regulation basketball hoop at standard 10-foot height on professional court",
      title: "NBA Regulation Rim Height",
      description: "Standard professional basketball rim specifications",
      category: "equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Basketball players practicing vertical leap drills and plyometric exercises",
      title: "Plyometric Training Drills",
      description: "Advanced exercises for explosive jumping ability",
      category: "exercises"
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=600&h=400&fit=crop",
      alt: "Basketball measuring tape showing vertical jump height measurement technique",
      title: "Vertical Jump Measurement",
      description: "Proper techniques for accurate jump testing",
      category: "measurement"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Basketball nutrition foods for athletic performance and vertical jump improvement",
      title: "Basketball Nutrition Guide",
      description: "Foods to fuel your jumping performance",
      category: "nutrition"
    }
  ];

  const categorizeImages = (category: string) => {
    return blogImages.filter(image => image.category === category);
  };

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Training & Technique</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorizeImages('training').concat(categorizeImages('technique')).map((image, index) => (
            <FeaturedImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">Exercises & Measurement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorizeImages('exercises').concat(categorizeImages('measurement')).map((image, index) => (
            <FeaturedImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">Equipment & Nutrition</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categorizeImages('equipment').concat(categorizeImages('nutrition')).map((image, index) => (
            <FeaturedImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogImageGallery;
