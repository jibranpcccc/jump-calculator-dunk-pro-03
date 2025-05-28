
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import TrainingProgressTracker from "../components/TrainingProgressTracker";

const TrainingProgressTrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Training Progress Tracker | Track Your Vertical Jump Improvement</title>
        <meta name="description" content="Track your vertical jump training progress over time. Monitor improvements, set goals, and optimize your basketball training routine." />
        <meta name="keywords" content="vertical jump tracker, basketball training tracker, progress tracker, jump improvement" />
        <link rel="canonical" href="https://dunkcalculator.com/tools/progress-tracker/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <div className="max-w-6xl mx-auto">
            <TrainingProgressTracker />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrainingProgressTrackerPage;
