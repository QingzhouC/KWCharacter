/**
 * Vercel Web Analytics initialization for vanilla JavaScript
 * 
 * This script initializes the Vercel Web Analytics tracking according to
 * the official documentation at https://vercel.com/docs/analytics
 * 
 * The analytics script loads from Vercel's CDN and automatically tracks
 * page views and web vitals.
 * 
 * In development, use script.debug.js to see console logs of events.
 * In production, events are sent to Vercel's analytics endpoint.
 */

(function() {
  'use strict';
  
  // Initialize the Vercel Analytics queue
  // This allows calling window.va() before the script loads
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Optional: Configure beforeSend hook for filtering events
  // window.va('beforeSend', (event) => {
  //   // Example: Filter out private URLs
  //   if (event.url.includes('/private')) {
  //     return null;
  //   }
  //   return event;
  // });
  
  // Load the Vercel Web Analytics script from CDN
  var script = document.createElement('script');
  script.defer = true;
  
  // Use debug script in development, production script otherwise
  // The debug script logs events to console for verification
  var isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname === '';
  
  script.src = isDevelopment 
    ? 'https://cdn.vercel-insights.com/v1/script.debug.js'
    : 'https://cdn.vercel-insights.com/v1/script.js';
  
  // Error handling for script loading
  script.onerror = function() {
    if (isDevelopment) {
      console.info('Vercel Analytics: Running in development mode. Events will be logged to console.');
    } else {
      console.warn('Vercel Analytics: Failed to load analytics script.');
    }
  };
  
  // Insert script into the document
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
  
  // Log initialization in development
  if (isDevelopment) {
    console.log('Vercel Web Analytics initialized in debug mode');
  }
  
})();
