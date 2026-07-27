/**
 * Vercel Web Analytics initialization for vanilla JavaScript
 * 
 * This script initializes the Vercel Web Analytics tracking according to
 * the official documentation at https://vercel.com/docs/analytics/quickstart
 * 
 * The analytics script loads from Vercel's deployment and automatically tracks
 * page views and web vitals.
 */

(function() {
  'use strict';
  
  // Initialize the Vercel Analytics queue
  // This allows calling window.va() before the script loads
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Load the Vercel Web Analytics script
  // The script path is provided by Vercel after enabling analytics in the dashboard
  // During development, this will fail gracefully and can be tested after deployment
  var script = document.createElement('script');
  script.defer = true;
  
  // In production, Vercel will serve the analytics script from /_vercel/insights/script.js
  // This path is automatically configured when analytics is enabled in the Vercel dashboard
  script.src = '/_vercel/insights/script.js';
  
  // Error handling for script loading (expected in local development)
  script.onerror = function() {
    console.info('Vercel Analytics: Script not loaded. This is expected in local development. Analytics will work after deploying to Vercel and enabling analytics in the dashboard.');
  };
  
  // Insert script into the document
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
  
})();
