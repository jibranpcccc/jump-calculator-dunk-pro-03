
import StructuredData from "./StructuredData";

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: string;
  steps: HowToStep[];
  tools?: string[];
  materials?: string[];
}

const HowToSchema = ({
  name,
  description,
  image = "https://dunkcalculator.com/og-image.jpg",
  totalTime,
  estimatedCost,
  steps,
  tools = [],
  materials = []
}: HowToSchemaProps) => {
  const howToData = {
    name,
    description,
    image: [image],
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: estimatedCost } }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url })
    })),
    ...(tools.length > 0 && {
      tool: tools.map(tool => ({
        "@type": "HowToTool",
        name: tool
      }))
    }),
    ...(materials.length > 0 && {
      supply: materials.map(material => ({
        "@type": "HowToSupply",
        name: material
      }))
    }),
    about: [
      {
        "@type": "Thing",
        name: "Basketball Training",
        sameAs: "https://en.wikipedia.org/wiki/Basketball"
      }
    ]
  };

  return <StructuredData type="HowTo" data={howToData} />;
};

export default HowToSchema;
