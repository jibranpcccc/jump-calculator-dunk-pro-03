
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import MaxHangtimeCalculator from "../components/MaxHangtimeCalculator";

const MaxHangtimeCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Max Hangtime Calculator | How Long Can You Stay in the Air?</title>
        <meta name="description" content="Calculate your maximum hangtime based on vertical jump height. Discover the physics behind air time and compare to professional athletes." />
        <meta name="keywords" content="hangtime calculator, air time, vertical jump, basketball physics, jump duration" />
        <link rel="canonical" href="https://dunkcalculator.com/calculators/max-hangtime/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />
          
          <div className="max-w-4xl mx-auto">
            <MaxHangtimeCalculator />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MaxHangtimeCalculatorPage;
