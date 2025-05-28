
import { Helmet } from "react-helmet";

const Performance = () => {
  return (
    <Helmet>
      {/* Critical Resource Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      
      {/* Preconnect for critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Preload critical assets */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = 'stylesheet';
        }}
      />
      
      {/* Critical CSS for above-the-fold content */}
      <style>
        {`
          /* Critical CSS for initial paint */
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          
          /* Prevent layout shift */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Loading states */
          .loading-skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, transparent 37%, #f0f0f0 63%);
            background-size: 400% 100%;
            animation: loading 1.4s ease infinite;
          }
          
          @keyframes loading {
            0% { background-position: 100% 50%; }
            100% { background-position: -100% 50%; }
          }
          
          /* Optimize for Core Web Vitals */
          .hero-section {
            contain: layout style paint;
          }
          
          /* Reduce CLS with proper spacing */
          .calculator-section {
            min-height: 400px;
          }
        `}
      </style>
      
      {/* Performance monitoring script */}
      <script>
        {`
          // Enhanced Core Web Vitals monitoring
          (function() {
            if ('performance' in window && 'PerformanceObserver' in window) {
              // Monitor LCP (Largest Contentful Paint)
              const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
                
                // Send to analytics if available
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'LCP',
                    value: Math.round(lastEntry.startTime),
                    custom_parameter_lcp: lastEntry.startTime
                  });
                }
              });
              
              try {
                lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
              } catch (e) {
                console.log('LCP observation not supported');
              }
              
              // Monitor FID (First Input Delay)
              const fidObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  const fid = entry.processingStart - entry.startTime;
                  console.log('FID:', fid);
                  
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                      event_category: 'performance',
                      event_label: 'FID',
                      value: Math.round(fid),
                      custom_parameter_fid: fid
                    });
                  }
                }
              });
              
              try {
                fidObserver.observe({ type: 'first-input', buffered: true });
              } catch (e) {
                console.log('FID observation not supported');
              }
              
              // Monitor CLS (Cumulative Layout Shift)
              let clsValue = 0;
              const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                    console.log('CLS delta:', entry.value, 'Total CLS:', clsValue);
                  }
                }
                
                if (typeof gtag !== 'undefined' && clsValue > 0) {
                  gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'CLS',
                    value: Math.round(clsValue * 1000),
                    custom_parameter_cls: clsValue
                  });
                }
              });
              
              try {
                clsObserver.observe({ type: 'layout-shift', buffered: true });
              } catch (e) {
                console.log('CLS observation not supported');
              }
              
              // Monitor FCP (First Contentful Paint)
              const fcpObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  console.log('FCP:', entry.startTime);
                  
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                      event_category: 'performance',
                      event_label: 'FCP',
                      value: Math.round(entry.startTime),
                      custom_parameter_fcp: entry.startTime
                    });
                  }
                }
              });
              
              try {
                fcpObserver.observe({ type: 'paint', buffered: true });
              } catch (e) {
                console.log('FCP observation not supported');
              }
              
              // Monitor TTFB (Time to First Byte)
              window.addEventListener('load', () => {
                const navigationTiming = performance.getEntriesByType('navigation')[0];
                if (navigationTiming) {
                  const ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
                  console.log('TTFB:', ttfb);
                  
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                      event_category: 'performance',
                      event_label: 'TTFB',
                      value: Math.round(ttfb),
                      custom_parameter_ttfb: ttfb
                    });
                  }
                }
              });
              
              // Page Load Complete timing
              window.addEventListener('load', () => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log('Page Load Time:', loadTime);
                
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'page_load_time', {
                    event_category: 'performance',
                    value: Math.round(loadTime),
                    custom_parameter_load_time: loadTime
                  });
                }
              });
            }
          })();
          
          // Optimize images with lazy loading
          if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const img = entry.target;
                  if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('loading-skeleton');
                    observer.unobserve(img);
                  }
                }
              });
            });
            
            document.addEventListener('DOMContentLoaded', () => {
              const lazyImages = document.querySelectorAll('img[data-src]');
              lazyImages.forEach(img => imageObserver.observe(img));
            });
          }
          
          // Service Worker registration for caching
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                  console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
    </Helmet>
  );
};

export default Performance;
