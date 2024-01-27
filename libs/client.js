import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'catakainriga', 
  apiKey: process.env.API_KEY,
});

