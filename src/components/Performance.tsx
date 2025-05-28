
import { Helmet } from "react-helmet";

const Performance = () => {
  return (
    <Helmet>
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="//unpkg.com" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      <link rel="modulepreload" href="/src/main.tsx" />
      <link rel="modulepreload" href="/src/App.tsx" />
      
      {/* Resource Hints for Images */}
      <link rel="prefetch" href="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop" />
      <link rel="prefetch" href="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop" />
      <link rel="prefetch" href="https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=500&h=300&fit=crop" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      
      {/* Performance Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Critical CSS inline for above-the-fold content */}
      <style>
        {`
          /* Critical CSS for immediate rendering */
          body { margin: 0; font-family: Inter, system-ui, sans-serif; }
          .hero-gradient { background: linear-gradient(135deg, #f97316 0%, #3b82f6 100%); }
          .calculator-section { background-color: #f9fafb; }
        `}
      </style>
    </Helmet>
  );
};

export default Performance;
