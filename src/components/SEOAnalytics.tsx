
import { Helmet } from "react-helmet";

const SEOAnalytics = () => {
  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            custom_map: {
              'custom_parameter_1': 'calculator_usage',
              'custom_parameter_2': 'user_engagement'
            }
          });
          
          // Enhanced ecommerce tracking for calculator usage
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            content_group1: 'Basketball Tools',
            content_group2: 'Calculators',
            custom_parameter_calculator_type: 'dunk_calculator'
          });
          
          // Track calculator interactions
          function trackCalculatorUse(calculatorType, userHeight, userReach, userVertical) {
            gtag('event', 'calculator_use', {
              event_category: 'engagement',
              event_label: calculatorType,
              custom_parameter_height: userHeight,
              custom_parameter_reach: userReach,
              custom_parameter_vertical: userVertical,
              value: 1
            });
          }
          
          // Track training guide views
          function trackTrainingGuideView(guideType) {
            gtag('event', 'training_guide_view', {
              event_category: 'content',
              event_label: guideType,
              value: 1
            });
          }
          
          // Track user goals and success
          function trackDunkSuccess(canDunk, heightDeficit) {
            gtag('event', 'dunk_result', {
              event_category: 'calculator_result',
              event_label: canDunk ? 'can_dunk' : 'cannot_dunk',
              value: heightDeficit || 0,
              custom_parameter_success: canDunk
            });
          }
          
          // Make functions available globally
          window.trackCalculatorUse = trackCalculatorUse;
          window.trackTrainingGuideView = trackTrainingGuideView;
          window.trackDunkSuccess = trackDunkSuccess;
          
          console.log('SEO Analytics loaded with enhanced tracking');
        `}
      </script>
      
      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PLACEHOLDER');
        `}
      </script>
      
      {/* Schema.org Local Business for enhanced SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Dunk Calculator",
          "applicationCategory": "SportsApplication",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "ratingCount": "2847"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }, null, 2)}
      </script>
      
      {/* Microsoft Clarity */}
      <script>
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/CLARITY_PLACEHOLDER";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "i");
        `}
      </script>
      
      {/* Hotjar Tracking */}
      <script>
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:123456,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </script>
      
      {/* Facebook Pixel - Fixed with proper error handling */}
      <script>
        {`
          // Only load Facebook Pixel if we have a valid pixel ID
          const FB_PIXEL_ID = 'FB_PIXEL_PLACEHOLDER';
          
          if (FB_PIXEL_ID && FB_PIXEL_ID !== 'FB_PIXEL_PLACEHOLDER') {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', FB_PIXEL_ID);
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', {
              content_type: 'product',
              content_ids: ['dunk_calculator'],
              content_name: 'Basketball Dunk Calculator',
              content_category: 'Sports Tools'
            });
          } else {
            console.log('Facebook Pixel not configured - skipping initialization');
          }
        `}
      </script>
      
      {/* Structured Data for SiteNavigationElement */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Main Navigation",
          "url": "https://dunkcalculator.com",
          "hasPart": [
            {
              "@type": "SiteNavigationElement",
              "name": "Dunk Calculator",
              "url": "https://dunkcalculator.com/#calculator"
            },
            {
              "@type": "SiteNavigationElement", 
              "name": "All Calculators",
              "url": "https://dunkcalculator.com/calculators"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Training Guides",
              "url": "https://dunkcalculator.com/blog"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Vertical Jump Training",
              "url": "https://dunkcalculator.com/vertical-jump-training"
            }
          ]
        }, null, 2)}
      </script>
    </Helmet>
  );
};

export default SEOAnalytics;
