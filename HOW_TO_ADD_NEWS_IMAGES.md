# 📸 How to Add/Change Latest News Images

## Quick Guide

### 📁 Folder Location
**`src/assets/news/latest/`** - This is where you add your news images!

## ✅ Simple Steps to Add a New Image

### Step 1: Add Your Image
1. Copy your image file (`.jpg`, `.png`, or `.webp`) to:
   ```
   src/assets/news/latest/
   ```
2. Name it descriptively, e.g., `my-news-event-2024.jpg`

### Step 2: Import the Image
Open `src/assets/news/index.ts` and add an import:
```typescript
import myNewsEvent2024 from './latest/my-news-event-2024.jpg';
```

### Step 3: Add to Mapping
In the same file, add it to the `latestNewsImages` object:
```typescript
export const latestNewsImages: Record<string, string> = {
  // ... existing images
  'my-news-event-2024': myNewsEvent2024,  // Add your new image here
};
```

### Step 4: Use in News Data
Open `src/data/destinations.ts` and update your news item:
```typescript
{
  id: "main5",
  title: "My News Title",
  date: "2024-12-20",
  excerpt: "News description...",
  image: "my-news-event-2024"  // Use the key from step 3
}
```

## 🔄 To Change an Existing Image

1. **Replace the image file** in `src/assets/news/latest/` with the same filename
2. **OR** add a new image with a different name and update the import/mapping

## 📋 Current Images in Folder

- `tawa-bweni-wasichana.jpg`
- `tawa-dkt-kijaji.jpg`
- `tawa-gusa-maisha-meatu.jpg`
- `tawa-madawati-baridi.jpg`

## 💡 Tips

- ✅ Keep image files under 500KB for best performance
- ✅ Use descriptive filenames (lowercase with hyphens)
- ✅ Recommended size: 800x600px or larger
- ✅ The system automatically handles image loading and fallbacks

## 🎯 Example: Adding a New News Image

**File:** `src/assets/news/latest/conservation-workshop-2024.jpg`

**In `src/assets/news/index.ts`:**
```typescript
import conservationWorkshop2024 from './latest/conservation-workshop-2024.jpg';

export const latestNewsImages: Record<string, string> = {
  // ... existing
  'conservation-workshop-2024': conservationWorkshop2024,
};
```

**In `src/data/destinations.ts`:**
```typescript
{
  id: "main5",
  title: "Conservation Workshop 2024",
  date: "2024-12-20",
  excerpt: "Join us for an educational workshop...",
  image: "conservation-workshop-2024"
}
```

That's it! The image will automatically appear in the Latest News section! 🎉

