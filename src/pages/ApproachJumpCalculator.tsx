
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ApproachJumpCalculator from "../components/ApproachJumpCalculator";

const ApproachJumpCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Approach Jump Calculator | Basketball Running Jump vs Standing Jump</title>
        <meta name="description" content="Analyze the effectiveness of your approach jump vs standing jump. Optimize your approach technique for maximum dunking performance with our free calculator." />
        <meta name="keywords" content="approach jump calculator, dunk approach, running vertical jump, basketball training, standing vs running jump" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/approach-jump/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section */}
          <section className="text-center py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Approach Jump Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Analyze the effectiveness of your approach jump versus standing jump. Optimize your approach technique for maximum dunking performance.
            </p>
          </section>
          
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
