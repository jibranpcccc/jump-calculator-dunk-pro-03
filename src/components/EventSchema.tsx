
import StructuredData from "./StructuredData";

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  organizer?: string;
  url?: string;
  image?: string;
  eventType?: string;
  isVirtual?: boolean;
}

const EventSchema = ({
  name,
  description,
  startDate,
  endDate,
  location = "Online",
  organizer = "Dunk Calculator",
  url,
  image = "https://dunkcalculator.com/og-image.jpg",
  eventType = "SportsEvent",
  isVirtual = true
}: EventSchemaProps) => {
  const eventData = {
    "@type": eventType,
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    location: isVirtual ? {
      "@type": "VirtualLocation",
      url: url || "https://dunkcalculator.com/"
    } : {
      "@type": "Place",
      name: location
    },
    organizer: {
      "@type": "Organization",
      name: organizer,
      url: "https://dunkcalculator.com/"
    },
    image: [image],
    url: url || "https://dunkcalculator.com/",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: isVirtual ? 
      "https://schema.org/OnlineEventAttendanceMode" : 
      "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    inLanguage: "en"
  };

  return <StructuredData type="Event" data={eventData} />;
};

export default EventSchema;
