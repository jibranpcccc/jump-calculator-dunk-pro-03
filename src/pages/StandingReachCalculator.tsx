
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import StandingReachCalculator from "../components/StandingReachCalculator";

const StandingReachCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Standing Reach Calculator | Measure Your Basketball Reach</title>
        <meta name="description" content="Calculate your standing reach for basketball and dunking. Essential measurement to determine how high you need to jump to dunk a basketball." />
        <meta name="keywords" content="standing reach calculator, basketball reach, dunk measurement, basketball calculator" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/standing-reach/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <div className="max-w-4xl mx-auto">
            <StandingReachCalculator />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StandingReachCalculatorPage;
