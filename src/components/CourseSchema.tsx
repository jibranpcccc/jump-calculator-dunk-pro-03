
import StructuredData from "./StructuredData";

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  url?: string;
  image?: string;
  courseMode?: string;
  educationalLevel?: string;
  timeRequired?: string;
  skillLevel?: string;
  prerequisites?: string[];
  learningObjectives?: string[];
}

const CourseSchema = ({
  name,
  description,
  provider = "Dunk Calculator",
  url,
  image = "https://dunkcalculator.com/og-image.jpg",
  courseMode = "Online",
  educationalLevel = "Beginner to Advanced",
  timeRequired,
  skillLevel = "All Levels",
  prerequisites = [],
  learningObjectives = []
}: CourseSchemaProps) => {
  const courseData = {
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://dunkcalculator.com/"
    },
    url: url || "https://dunkcalculator.com/",
    image: [image],
    courseMode,
    educationalLevel,
    skillLevel,
    ...(timeRequired && { timeRequired }),
    ...(prerequisites.length > 0 && { coursePrerequisites: prerequisites }),
    ...(learningObjectives.length > 0 && { 
      teaches: learningObjectives.map(objective => ({
        "@type": "DefinedTerm",
        name: objective
      }))
    }),
    inLanguage: "en",
    isAccessibleForFree: true,
    courseWorkload: timeRequired || "Self-paced",
    about: [
      {
        "@type": "Thing",
        name: "Basketball Training",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      },
      {
        "@type": "Thing",
        name: "Athletic Performance",
        sameAs: "https://en.wikipedia.org/wiki/Athletic_training"
      }
    ]
  };

  return <StructuredData type="Course" data={courseData} />;
};

export default CourseSchema;
