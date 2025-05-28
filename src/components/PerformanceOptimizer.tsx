
import { Helmet } from "react-helmet";

const PerformanceOptimizer = () => {
  return (
    <Helmet>
      {/* Critical Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/src/main.tsx" as="script" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" as="style" />
      
      {/* Critical CSS for LCP optimization */}
      <style>{`
        /* Critical above-the-fold styles */
        .hero-section {
          background: linear-gradient(135deg, #fff7ed 0%, #fef2f2 100%);
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .calculator-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          transform: translateZ(0);
          will-change: transform;
        }
        
        .btn-primary {
          background-color: #ea580c;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        
        .btn-primary:hover {
          background-color: #dc2626;
          transform: translateY(-1px);
        }
        
        /* Image optimization */
        img {
          loading: lazy;
          decoding: async;
        }
        
        /* Font optimization */
        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-display: swap;
        }
        
        /* Reduce layout shift */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Optimize animations */
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-30px,0);
          }
          70% {
            transform: translate3d(0,-15px,0);
          }
          90% {
            transform: translate3d(0,-4px,0);
          }
        }
      `}</style>
      
      {/* Service Worker for caching */}
      <script>{`
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
              .then(function(registration) {
                console.log('ServiceWorker registration successful');
              })
              .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
              });
          });
        }
      `}</script>
      
      {/* Core Web Vitals monitoring */}
      <script>{`
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              switch (entry.entryType) {
                case 'largest-contentful-paint':
                  console.log('LCP:', entry.startTime);
                  if (entry.startTime > 2500) {
                    console.warn('LCP is slower than recommended (2.5s)');
                  }
                  break;
                case 'first-input':
                  const fid = entry.processingStart - entry.startTime;
                  console.log('FID:', fid);
                  if (fid > 100) {
                    console.warn('FID is slower than recommended (100ms)');
                  }
                  break;
                case 'layout-shift':
                  if (!entry.hadRecentInput) {
                    console.log('CLS:', entry.value);
                    if (entry.value > 0.1) {
                      console.warn('CLS is higher than recommended (0.1)');
                    }
                  }
                  break;
              }
            }
          });
          
          observer.observe({ 
            entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
          });
        }
        
        // Optimize loading
        document.addEventListener('DOMContentLoaded', function() {
          // Lazy load images
          const images = document.querySelectorAll('img[data-src]');
          const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            });
          });
          
          images.forEach(img => imageObserver.observe(img));
          
          // Preload critical resources
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
          document.head.appendChild(link);
        });
      `}</script>
    </Helmet>
  );
};

export default PerformanceOptimizer;
