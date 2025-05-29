
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
        title="Free Dunk Calculator | Can You Dunk a Basketball? Test Your Vertical Jump Now"
        description="Use our free dunk calculator to instantly find out if you can dunk a basketball. Enter your height, reach, and vertical jump. No signup required! Get personalized training tips and track your progress with expert guidance from professional coaches."
        keywords="dunk calculator, can you dunk, basketball dunk test, vertical jump calculator, dunk height calculator, free dunk test, basketball training, how to dunk, vertical jump training, NBA rim height, basketball fitness, athletic performance, sports calculator, dunking ability, jump training"
        canonicalUrl="https://dunkcalculator.com/"
        pageType="website"
      />
      <PerformanceOptimizer />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8">
          <BreadcrumbNavigation />
          
          <MobileOptimizedHero />
          
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
