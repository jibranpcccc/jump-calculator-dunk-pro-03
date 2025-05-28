
import { Helmet } from "react-helmet";

const Performance = () => {
  return (
    <Helmet>
      {/* DNS Prefetch for faster resource loading */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//static.hotjar.com" />
      <link rel="dns-prefetch" href="//www.clarity.ms" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Resource Hints for better performance */}
      <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/critical.css" as="style" />
      <link rel="preload" href="/js/main.js" as="script" />
      
      {/* Critical CSS inlined */}
      <style type="text/css">
        {`
          /* Critical CSS for above-the-fold content */
          body { 
            font-family: system-ui, -apple-system, sans-serif; 
            margin: 0; 
            padding: 0; 
            line-height: 1.6;
          }
          .hero-section { 
            min-height: 100vh; 
            display: flex; 
            align-items: center; 
            justify-content: center;
          }
          .calculator-section {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          /* Loading states */
          .skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          /* Focus styles for accessibility */
          .focus\\:ring:focus {
            outline: 2px solid #ea580c;
            outline-offset: 2px;
          }
        `}
      </style>
      
      {/* Performance monitoring script */}
      <script>
        {`
          // Critical performance monitoring
          if ('performance' in window && 'PerformanceObserver' in window) {
            // Monitor Core Web Vitals
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  console.log('LCP:', entry.startTime);
                  // Send to analytics if needed
                  if (window.gtag) {
                    gtag('event', 'core_web_vital', {
                      event_category: 'performance',
                      event_label: 'LCP',
                      value: Math.round(entry.startTime)
                    });
                  }
                }
                if (entry.entryType === 'first-input') {
                  console.log('FID:', entry.processingStart - entry.startTime);
                  if (window.gtag) {
                    gtag('event', 'core_web_vital', {
                      event_category: 'performance',
                      event_label: 'FID',
                      value: Math.round(entry.processingStart - entry.startTime)
                    });
                  }
                }
                if (entry.entryType === 'layout-shift') {
                  if (!entry.hadRecentInput) {
                    console.log('CLS:', entry.value);
                    if (window.gtag) {
                      gtag('event', 'core_web_vital', {
                        event_category: 'performance',
                        event_label: 'CLS',
                        value: Math.round(entry.value * 1000)
                      });
                    }
                  }
                }
              }
            });
            
            try {
              observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
            } catch (error) {
              console.log('Performance observer not supported');
            }
          }
          
          // Page load timing
          window.addEventListener('load', function() {
            setTimeout(function() {
              const perfData = performance.getEntriesByType('navigation')[0];
              if (perfData) {
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
                if (window.gtag) {
                  gtag('event', 'timing_complete', {
                    name: 'page_load',
                    value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
                  });
                }
              }
            }, 0);
          });
          
          // Image loading optimization
          if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            document.querySelectorAll('img[data-src]').forEach(img => {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            });
          } else {
            // Fallback for browsers without native lazy loading
            const imageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  observer.unobserve(img);
                }
              });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
              imageObserver.observe(img);
            });
          }
          
          // Service Worker registration for caching
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
          
          // Preload critical resources
          const preloadCriticalResources = () => {
            const criticalImages = [
              '/og-image.jpg',
              '/calculator-screenshot.jpg',
              '/logo.png'
            ];
            
            criticalImages.forEach(src => {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'image';
              link.href = src;
              document.head.appendChild(link);
            });
          };
          
          // Execute after DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', preloadCriticalResources);
          } else {
            preloadCriticalResources();
          }
        `}
      </script>
      
      {/* Structured Data for performance metrics */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          "name": "Performance Optimizations",
          "description": "Advanced performance optimizations for basketball dunk calculator",
          "isPartOf": {
            "@type": "WebPage",
            "url": "https://dunkcalculator.com"
          },
          "potentialAction": {
            "@type": "MonitorAction",
            "object": {
              "@type": "WebSite",
              "name": "Dunk Calculator Performance"
            }
          }
        }, null, 2)}
      </script>
    </Helmet>
  );
};

export default Performance;
