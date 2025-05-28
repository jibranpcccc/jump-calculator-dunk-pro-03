
import { Helmet } from "react-helmet";

const TechnicalSEO = () => {
  return (
    <Helmet>
      {/* Enhanced Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()" />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-site" />
      
      {/* Enhanced Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, stale-while-revalidate=86400" />
      <meta httpEquiv="Pragma" content="public" />
      
      {/* Additional Technical SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* PWA Enhancement */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
      <meta name="application-name" content="Dunk Calculator" />
      
      {/* Enhanced Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes, minimum-scale=1.0, maximum-scale=5.0" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea580c" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Web Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Alternative Formats */}
      <link rel="alternate" type="application/rss+xml" title="Dunk Calculator Blog RSS" href="https://dunkcalculator.com/rss.xml" />
      <link rel="alternate" type="application/atom+xml" title="Dunk Calculator Blog Atom" href="https://dunkcalculator.com/atom.xml" />
      
      {/* Search Console Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code" />
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Dunk Calculator",
          "url": "https://dunkcalculator.com",
          "applicationCategory": "SportsApplication",
          "operatingSystem": "All",
          "permissions": "none",
          "storageRequirements": "50MB",
          "memoryRequirements": "512MB",
          "processorRequirements": "Any modern browser",
          "softwareRequirements": "JavaScript enabled",
          "softwareVersion": "2.0.1",
          "fileSize": "2MB",
          "downloadUrl": "https://dunkcalculator.com",
          "installUrl": "https://dunkcalculator.com",
          "screenshot": "https://dunkcalculator.com/app-screenshot.jpg",
          "softwareHelp": "https://dunkcalculator.com/faq",
          "releaseNotes": "https://dunkcalculator.com/changelog",
          "applicationSuite": "Dunk Calculator Suite",
          "device": "Desktop, Mobile, Tablet"
        }, null, 2)}
      </script>
      
      {/* Performance Optimization */}
      <script>
        {`
          // Critical performance monitoring
          if ('performance' in window && 'PerformanceObserver' in window) {
            // Monitor Core Web Vitals
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  console.log('LCP:', entry.startTime);
                }
                if (entry.entryType === 'first-input') {
                  console.log('FID:', entry.processingStart - entry.startTime);
                }
                if (entry.entryType === 'layout-shift') {
                  if (!entry.hadRecentInput) {
                    console.log('CLS:', entry.value);
                  }
                }
              }
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
          }
          
          // Accessibility enhancements
          document.addEventListener('DOMContentLoaded', function() {
            // Add skip link if not present
            if (!document.getElementById('skip-link')) {
              const skipLink = document.createElement('a');
              skipLink.id = 'skip-link';
              skipLink.href = '#main-content';
              skipLink.textContent = 'Skip to main content';
              skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white px-4 py-2 rounded z-50';
              document.body.insertBefore(skipLink, document.body.firstChild);
            }
            
            // Enhanced keyboard navigation
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
              }
            });
            
            document.addEventListener('mousedown', function() {
              document.body.classList.remove('keyboard-navigation');
            });
          });
        `}
      </script>
    </Helmet>
  );
};

export default TechnicalSEO;
