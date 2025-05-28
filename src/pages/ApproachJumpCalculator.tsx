
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ApproachJumpCalculator from "../components/ApproachJumpCalculator";

const ApproachJumpCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Approach Jump Calculator | Optimize Your Dunk Approach</title>
        <meta name="description" content="Analyze the effectiveness of your approach jump vs standing jump. Optimize your approach technique for maximum dunking performance." />
        <meta name="keywords" content="approach jump calculator, dunk approach, running vertical jump, basketball training" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/approach-jump/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <div className="max-w-4xl mx-auto">
            <ApproachJumpCalculator />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApproachJumpCalculatorPage;
