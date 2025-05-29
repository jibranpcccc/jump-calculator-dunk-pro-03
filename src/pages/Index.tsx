
import React from 'react';
import DunkCalculator from '../components/DunkCalculator';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';
import EnhancedSEO from '../components/EnhancedSEO';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import CallToAction from '../components/CallToAction';
import MobileOptimizedHero from '../components/MobileOptimizedHero';
import TouchOptimizedSocial from '../components/TouchOptimizedSocial';
import ResponsiveSections from '../components/ResponsiveSections';
import MobileFAQ from '../components/MobileFAQ';
import MobileFriendlyStats from '../components/MobileFriendlyStats';

const Index = () => {
  return (
    <>
      <EnhancedSEO 
        title="Dunk Calculator | Free Basketball Dunk Test - Can You Dunk?"
        description="Test if you can dunk a basketball with our free dunk calculator! Enter your height, reach, and vertical jump to get instant results. Used by 100,000+ athletes worldwide."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height, basketball fitness, athletic performance, sports calculator, dunking ability, jump training"
        canonicalUrl="https://dunkcalculator.com/"
        pageType="website"
      />
      <PerformanceOptimizer />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8">
          <BreadcrumbNavigation />
          
          {/* Hero Section with Correct H1 */}
          <section className="text-center py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Dunk Calculator
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find out if you can dunk a basketball! Test your dunking ability with our free, accurate calculator used by over 100,000 athletes worldwide.
            </p>
          </section>
          
          <TouchOptimizedSocial />

          {/* Mobile-optimized Stats Section */}
          <div className="mb-8 md:mb-12">
            <MobileFriendlyStats />
          </div>

          {/* Main Calculator */}
          <div className="calculator-container mb-8 md:mb-12" id="calculator">
            <DunkCalculator />
          </div>

          <ResponsiveSections />

          {/* Call to Action Section */}
          <CallToAction
            title="Ready to Discover Your Dunking Potential?"
            description="Join over 100,000 athletes who've used our calculator to test their vertical jump and improve their game. Get instant results and start your journey to dunking today!"
            buttonText="Calculate My Dunk Potential"
            buttonLink="#calculator"
            variant="orange"
            showStats={true}
            showTrustSignals={true}
          />

          <MobileFAQ />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
