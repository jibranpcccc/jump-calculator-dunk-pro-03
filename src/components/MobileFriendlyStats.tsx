
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Calculator, CheckCircle } from "lucide-react";

const MobileFriendlyStats = () => {
  const stats = [
    { number: "75,000+", label: "Athletes Tested", icon: Target, color: "text-orange-600" },
    { number: "98%", label: "Accuracy Rate", icon: TrendingUp, color: "text-green-600" },
    { number: "Free", label: "Always", icon: Calculator, color: "text-blue-600" },
    { number: "Instant", label: "Results", icon: CheckCircle, color: "text-purple-600" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/90">
            <CardContent className="p-4 md:p-6">
              <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MobileFriendlyStats;
