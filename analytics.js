/**
 * Vercel Web Analytics initialization for vanilla JavaScript
 * 
 * This script initializes the Vercel Web Analytics tracking according to
 * the official documentation at https://vercel.com/docs/analytics/quickstart
 * 
 * The analytics package automatically tracks page views and web vitals.
 * It will work after deploying to Vercel and enabling analytics in the dashboard.
 * 
 * Configuration:
 * - mode: Set to 'production' to ensure analytics work correctly in production
 * - debug: Automatically enabled in development for testing
 * 
 * For more information, see: https://vercel.com/docs/analytics/package
 */

import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics with production mode
// This ensures analytics are tracked correctly when deployed to Vercel
inject({
  mode: 'production'
});
