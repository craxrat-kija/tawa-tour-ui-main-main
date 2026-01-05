/**
 * Latest News Images
 * 
 * Import all news images here and export them as a mapping object.
 * This makes it easy to manage and change news images.
 * 
 * To add a new image:
 * 1. Add the image file to the 'latest' folder
 * 2. Import it here
 * 3. Add it to the latestNewsImages object
 * 4. Reference it in destinations.ts using the key name
 */

// Import news images from the latest folder
// 
// STEP 1: Add your image file to src/assets/news/latest/ folder
// STEP 2: Import it here (add import statement below)
// STEP 3: Add it to the latestNewsImages object with a key
// STEP 4: Use that key in src/data/destinations.ts in the mainNews array
//
// Import existing news images
import tawaBweniWasichana from './latest/tawa-bweni-wasichana.jpg';
import tawaDktKijaji from './latest/tawa-dkt-kijaji.jpg';
import tawaGusaMaishaMeatu from './latest/tawa-gusa-maisha-meatu.jpg';
import tawaMadawatiBaridi from './latest/tawa-madawati-baridi.jpg';
import newsImage from './latest/image.png';

// Export all news images as a mapping object
// The key is the identifier used in destinations.ts
// 
// IMPORTANT: The key name here must match what you use in destinations.ts
// For example, if you use image: "tawa-bweni-wasichana" here, use the same in destinations.ts
export const latestNewsImages: Record<string, string> = {
  // Existing news images
  'tawa-bweni-wasichana': tawaBweniWasichana,
  'tawa-dkt-kijaji': tawaDktKijaji,
  'tawa-gusa-maisha-meatu': tawaGusaMaishaMeatu,
  'tawa-madawati-baridi': tawaMadawatiBaridi,
  'news-image': newsImage, // Image from image.png
  
  // Add more images here as you add them to the latest folder
  // Example:
  // 'my-new-news': myNewNewsImage,
};

/**
 * Helper function to get news image by key or path
 * 
 * Priority:
 * 1. Check if it's a key in latestNewsImages (from assets folder)
 * 2. If it starts with '/', treat it as a public folder path
 * 3. Otherwise, assume it's a filename in the public/news folder
 * 
 * @param imageKey - Image key from assets or path to public image
 * @returns Image URL or undefined
 */
export function getNewsImage(imageKey?: string): string | undefined {
  if (!imageKey) return undefined;
  
  // First, check if it's a key in our imported images (from assets folder)
  if (latestNewsImages[imageKey]) {
    return latestNewsImages[imageKey];
  }
  
  // If it starts with '/', it's already a public path
  if (imageKey.startsWith('/')) {
    return imageKey;
  }
  
  // Otherwise, assume it's a filename in the public/news folder
  return `/news/${imageKey}`;
}

