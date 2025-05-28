
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import VerticalJumpImprovementCalculator from "../components/VerticalJumpImprovementCalculator";

const VerticalJumpImprovementCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Vertical Jump Improvement Calculator | Plan Your Training Goals</title>
        <meta name="description" content="Calculate realistic vertical jump improvement goals and get personalized training recommendations based on your timeframe and current ability." />
        <meta name="keywords" content="vertical jump improvement, training goals, jump training calculator, basketball training" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/vertical-jump-improvement/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <div className="max-w-4xl mx-auto">
            <VerticalJumpImprovementCalculator />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VerticalJumpImprovementCalculatorPage;
