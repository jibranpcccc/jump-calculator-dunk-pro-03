// Dunk Calculator Service Worker
// Version: 2.0.1
// Updated: 2024-05-28

const CACHE_NAME = 'dunk-calculator-v2.0.1';
const STATIC_CACHE_NAME = 'dunk-calculator-static-v2.0.1';
const DYNAMIC_CACHE_NAME = 'dunk-calculator-dynamic-v2.0.1';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/logo.png',
  '/og-image.jpg',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

// Dynamic content patterns to cache
const CACHE_PATTERNS = [
  /^https:\/\/dunkcalculator\.com\//,
  /^https:\/\/fonts\.googleapis\.com\//,
  /^https:\/\/fonts\.gstatic\.com\//,
  /^https:\/\/images\.unsplash\.com\//
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME &&
                cacheName.startsWith('dunk-calculator-')) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Cache cleanup completed');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  // Handle different types of requests
  if (STATIC_ASSETS.includes(url.pathname) || url.pathname === '/') {
    // Static assets - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
  } else if (CACHE_PATTERNS.some(pattern => pattern.test(request.url))) {
    // Dynamic content - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else {
    // Other requests - network only
    event.respondWith(fetch(request));
  }
});

// Cache first strategy for static assets
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('Serving from cache:', request.url);
      return cached;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
      console.log('Cached new resource:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Network error', { status: 408 });
  }
}

// Network first strategy for dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
      console.log('Updated cache with fresh content:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, serving from cache:', request.url);
    
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    // Return offline page or error response
    return new Response('Offline - Content not available', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Background sync for analytics (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  try {
    // Sync any pending analytics data when back online
    console.log('Syncing analytics data...');
    // Implementation would depend on your analytics setup
  } catch (error) {
    console.error('Analytics sync failed:', error);
  }
}

// Push notifications (if needed)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/logo.png',
      badge: '/favicon.ico',
      tag: 'dunk-calculator-notification',
      requireInteraction: false,
      actions: [
        {
          action: 'open',
          title: 'Open Calculator'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      self.clients.openWindow('https://dunkcalculator.com/')
    );
  }
});

// Message handler for client communication
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('Dunk Calculator Service Worker loaded successfully');
