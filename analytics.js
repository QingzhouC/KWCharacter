/**
 * Vercel Web Analytics initialization for vanilla JavaScript
 * 
 * This script initializes the Vercel Web Analytics tracking according to
 * the official documentation at https://vercel.com/docs/analytics/quickstart
 * 
 * The analytics package automatically tracks page views and web vitals.
 * It will work after deploying to Vercel and enabling analytics in the dashboard.
 */

import { inject } from '@vercel/analytics';

inject();
