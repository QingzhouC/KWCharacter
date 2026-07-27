/**
 * Vercel Web Analytics initialization for vanilla JavaScript
 * 
 * This script initializes the Vercel Web Analytics tracking.
 * The analytics script is automatically injected by Vercel when deployed.
 * 
 * For local development, events are logged to the console.
 * In production (on Vercel), events are sent to the analytics endpoint.
 */

(function() {
  'use strict';
  
  // Initialize the Vercel Analytics queue
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Load the Vercel Web Analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Error handling for script loading
  script.onerror = function() {
    console.warn('Vercel Analytics: Failed to load analytics script. This is expected in local development.');
  };
  
  // Insert script into the document
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
  
  // Optional: Track page views manually (useful for SPAs)
  // For multi-page apps like this one, automatic tracking is usually sufficient
  
})();
