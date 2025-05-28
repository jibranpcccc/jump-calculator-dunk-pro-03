
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, BookOpen } from "lucide-react";

const QuickStats = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Players Tested",
      color: "text-blue-600"
    },
    {
      icon: Target,
      number: "85%",
      label: "Accuracy Rate",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      number: "4-12\"",
      label: "Avg Jump Increase",
      color: "text-orange-600"
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Training Tips",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
