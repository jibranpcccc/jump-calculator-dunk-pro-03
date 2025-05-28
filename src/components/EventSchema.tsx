
import StructuredData from "./StructuredData";

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: {
    name: string;
    address?: string;
  };
  organizer?: string;
  url?: string;
  image?: string;
  eventStatus?: "scheduled" | "cancelled" | "postponed";
  eventAttendanceMode?: "online" | "offline" | "mixed";
}

const EventSchema = ({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer = "Dunk Calculator",
  url,
  image = "https://dunkcalculator.com/event-image.jpg",
  eventStatus = "scheduled",
  eventAttendanceMode = "online"
}: EventSchemaProps) => {
  const eventData = {
    name,
    description,
    startDate,
    endDate,
    eventStatus: `https://schema.org/Event${eventStatus.charAt(0).toUpperCase() + eventStatus.slice(1)}`,
    eventAttendanceMode: `https://schema.org/${eventAttendanceMode.charAt(0).toUpperCase() + eventAttendanceMode.slice(1)}EventAttendanceMode`,
    location: location ? {
      "@type": "Place",
      name: location.name,
      address: location.address
    } : {
      "@type": "VirtualLocation",
      url: url || "https://dunkcalculator.com"
    },
    organizer: {
      "@type": "Organization",
      name: organizer,
      url: "https://dunkcalculator.com"
    },
    image,
    url: url || "https://dunkcalculator.com",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: url || "https://dunkcalculator.com"
    }
  };

  return <StructuredData type="Event" data={eventData} />;
};

export default EventSchema;
