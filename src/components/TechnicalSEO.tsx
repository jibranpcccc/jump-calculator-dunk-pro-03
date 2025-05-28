
import { Helmet } from "react-helmet";

const TechnicalSEO = () => {
  return (
    <Helmet>
      {/* Technical SEO Meta Tags */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Enhanced Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.gpteng.co https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()" />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      
      {/* Cache Control and Performance */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, stale-while-revalidate=86400" />
      <meta httpEquiv="Edge-Control" content="cache, max-age=31536000" />
      
      {/* Enhanced Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dunk Calculator" />
      <meta name="application-name" content="Dunk Calculator" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tooltip" content="Basketball Dunk Calculator" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      
      {/* Progressive Web App */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1f2937" />
      <meta name="color-scheme" content="light dark" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional Icons and Assets */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea580c" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="your-google-verification-code-here" />
      <meta name="msvalidate.01" content="your-bing-verification-code-here" />
      <meta name="yandex-verification" content="your-yandex-verification-code-here" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code-here" />
      <meta name="facebook-domain-verification" content="your-facebook-verification-code-here" />
      
      {/* Structured Data Enhancement */}
      <meta name="google" content="notranslate" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      
      {/* Additional Technical Meta */}
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta name="applicable-device" content="pc,mobile" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      
      {/* Accessibility */}
      <meta name="screen-orientation" content="portrait" />
      <meta name="full-screen" content="yes" />
      <meta name="x5-orientation" content="portrait" />
      <meta name="x5-fullscreen" content="true" />
      
      {/* Performance Monitoring */}
      <meta name="generator" content="Vite + React + TypeScript" />
      <meta name="build-version" content="2.0.0" />
      <meta name="last-modified" content="2024-05-28" />
    </Helmet>
  );
};

export default TechnicalSEO;
