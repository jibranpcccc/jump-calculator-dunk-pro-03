
import StructuredData from "./StructuredData";

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: string;
  supply?: string[];
  tool?: string[];
}

const HowToSchema = ({ 
  name, 
  description, 
  steps, 
  totalTime,
  estimatedCost,
  supply = [],
  tool = []
}: HowToSchemaProps) => {
  const howToData = {
    name,
    description,
    totalTime,
    estimatedCost: estimatedCost ? {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: estimatedCost
    } : undefined,
    supply: supply.map(item => ({
      "@type": "HowToSupply",
      name: item
    })),
    tool: tool.map(item => ({
      "@type": "HowToTool",
      name: item
    })),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url
    }))
  };

  return <StructuredData type="WebPage" data={{ mainEntity: { "@type": "HowTo", ...howToData } }} />;
};

export default HowToSchema;
