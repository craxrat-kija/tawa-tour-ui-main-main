# Latest News Images Folder

This folder contains images for the Latest News section.

## 📁 Folder Location
`src/assets/news/latest/`

## 🖼️ How to Add/Change News Images

### Method 1: Using Assets Folder (Recommended)

1. **Add your image** to this folder (`src/assets/news/latest/`)
   - Name it descriptively (e.g., `tawa-bweni-wasichana.jpg`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

2. **Import the image** in `src/assets/news/index.ts`:
   ```typescript
   import tawaBweniWasichana from './latest/tawa-bweni-wasichana.jpg';
   ```

3. **Add it to the mapping** in `src/assets/news/index.ts`:
   ```typescript
   export const latestNewsImages: Record<string, string> = {
     'tawa-bweni-wasichana': tawaBweniWasichana,
     // ... other images
   };
   ```

4. **Reference it** in `src/data/destinations.ts`:
   ```typescript
   {
     id: "main1",
     title: "TAWA YAKABIDHI BWENI...",
     date: "2024-12-15",
     excerpt: "...",
     image: "tawa-bweni-wasichana" // Use the key from latestNewsImages
   }
   ```

### Method 2: Using Public Folder (Alternative)

You can also place images in `public/news/` folder and reference them directly:
```typescript
{
  image: "/news/my-image.jpg" // Direct path to public folder
}
```

## 📐 Image Guidelines

- **Recommended size**: 800x600px or larger
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB for optimal performance
- **Aspect ratio**: 4:3 or 16:9 works best
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `tawa-event-2024.jpg`)

## ✅ Quick Checklist

- [ ] Image added to `src/assets/news/latest/` folder
- [ ] Image imported in `src/assets/news/index.ts`
- [ ] Image added to `latestNewsImages` object
- [ ] Image key referenced in `src/data/destinations.ts`
- [ ] Image displays correctly in the Latest News section

## 🔄 Migrating from Public Folder

If you have images in `public/news/`, you can migrate them:
1. Copy images from `public/news/` to `src/assets/news/latest/`
2. Import them in `src/assets/news/index.ts`
3. Update `destinations.ts` to use the key instead of the path

## 💡 Tips

- Use descriptive file names that match the news content
- Optimize images before adding (compress for web)
- Keep a consistent naming convention
- The system automatically handles both asset imports and public folder paths

