
import { Helmet } from "react-helmet";

const Performance = () => {
  return (
    <Helmet>
      {/* Enhanced DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="//unpkg.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="//ajax.googleapis.com" />
      <link rel="dns-prefetch" href="//www.gstatic.com" />
      <link rel="dns-prefetch" href="//ssl.gstatic.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//platform.twitter.com" />
      <link rel="dns-prefetch" href="//www.linkedin.com" />
      <link rel="dns-prefetch" href="//s.pinimg.com" />
      
      {/* Enhanced Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Enhanced Preload critical resources */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      <link rel="modulepreload" href="/src/main.tsx" />
      <link rel="modulepreload" href="/src/App.tsx" />
      <link rel="modulepreload" href="/src/components/DunkCalculator.tsx" />
      <link rel="preload" href="/logo.png" as="image" type="image/png" />
      <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
      
      {/* Prefetch important pages for faster navigation */}
      <link rel="prefetch" href="/vertical-jump-training" />
      <link rel="prefetch" href="/basketball-dunk-tips" />
      <link rel="prefetch" href="/blog" />
      <link rel="prefetch" href="/calculators" />
      <link rel="prefetch" href="/faq" />
      <link rel="prefetch" href="/basketball-bmi-calculator" />
      <link rel="prefetch" href="/hangtime-calculator" />
      <link rel="prefetch" href="/reach-calculator" />
      
      {/* Resource Hints for Images */}
      <link rel="prefetch" href="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop" />
      <link rel="prefetch" href="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop" />
      <link rel="prefetch" href="https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=500&h=300&fit=crop" />
      <link rel="prefetch" href="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop" />
      <link rel="prefetch" href="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=300&fit=crop" />
      
      {/* Enhanced Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()" />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-site" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.gpteng.co https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';" />
      
      {/* Enhanced Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, stale-while-revalidate=86400" />
      <meta httpEquiv="Edge-Control" content="cache, max-age=31536000" />
      <meta httpEquiv="Pragma" content="public" />
      <meta httpEquiv="Expires" content="31536000" />
      
      {/* Performance Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Resource loading optimization */}
      <meta name="prerender" content="https://dunkcalculator.com/vertical-jump-training" />
      <meta name="next-head-count" content="50" />
      
      {/* Enhanced Critical CSS inline for above-the-fold content */}
      <style>
        {`
          /* Critical CSS for immediate rendering */
          * { box-sizing: border-box; }
          body { 
            margin: 0; 
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background-color: #ffffff;
            overflow-x: hidden;
          }
          .hero-gradient { 
            background: linear-gradient(135deg, #f97316 0%, #3b82f6 100%); 
            min-height: 60vh;
          }
          .calculator-section { 
            background-color: #f9fafb; 
            padding: 4rem 0;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .btn-primary {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }
          .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
          }
          .card {
            background: white;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
          .loading {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
          }
          .fade-in {
            animation: fadeIn 0.6s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          /* Responsive utilities */
          @media (max-width: 768px) {
            .container { padding: 0 0.5rem; }
            .hero-gradient { min-height: 50vh; }
            .calculator-section { padding: 2rem 0; }
          }
        `}
      </style>
      
      {/* Additional Performance Scripts */}
      <script>
        {`
          // Performance monitoring
          if ('performance' in window) {
            window.addEventListener('load', function() {
              setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                  console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                  
                  // Send performance data to analytics if available
                  if (window.gtag) {
                    gtag('event', 'page_load_time', {
                      event_category: 'performance',
                      value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
                      custom_parameter_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart)
                    });
                  }
                }
              }, 0);
            });
          }
          
          // Critical resource loading optimization
          function loadCriticalResources() {
            const criticalImages = [
              '/logo.png',
              '/og-image.jpg',
              'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop'
            ];
            
            criticalImages.forEach(src => {
              const img = new Image();
              img.src = src;
            });
          }
          
          // Load critical resources after DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadCriticalResources);
          } else {
            loadCriticalResources();
          }
          
          // Service Worker registration for caching
          if ('serviceWorker' in navigator && 'caches' in window) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                  console.log('ServiceWorker registration failed');
                });
            });
          }
          
          // Intersection Observer for lazy loading
          if ('IntersectionObserver' in window) {
            const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  const lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove('lazy');
                  lazyImageObserver.unobserve(lazyImage);
                }
              });
            });
            
            // Apply to images with data-src attribute
            document.addEventListener('DOMContentLoaded', function() {
              const lazyImages = document.querySelectorAll('img[data-src]');
              lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
              });
            });
          }
        `}
      </script>
    </Helmet>
  );
};

export default Performance;
