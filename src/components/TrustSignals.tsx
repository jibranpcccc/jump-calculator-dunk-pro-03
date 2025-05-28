
import { Shield, Clock, Star, Users, CheckCircle, Award } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    { icon: Shield, text: "100% Free", color: "text-green-500" },
    { icon: Clock, text: "Instant Results", color: "text-blue-500" },
    { icon: Star, text: "No Registration", color: "text-yellow-500" },
    { icon: Users, text: "10,000+ Users", color: "text-purple-500" },
    { icon: CheckCircle, text: "Science-Based", color: "text-emerald-500" },
    { icon: Award, text: "Trusted Tool", color: "text-orange-500" }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 text-sm text-gray-600">
      {signals.map((signal, index) => (
        <div key={index} className="flex items-center space-x-1">
          <signal.icon className={`h-4 w-4 ${signal.color}`} />
          <span>{signal.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustSignals;
