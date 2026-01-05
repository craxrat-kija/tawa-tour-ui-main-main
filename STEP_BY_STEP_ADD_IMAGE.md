# 📸 Step-by-Step: How to Insert a Picture in Latest News

## ✅ Quick Steps (3 Easy Steps!)

### Step 1: Add Your Image File
1. **Copy your image** (`.jpg`, `.png`, or `.webp`) to this folder:
   ```
   src/assets/news/latest/
   ```
2. **Name it** something descriptive, like: `my-news-picture.jpg`

### Step 2: Import the Image
Open the file: **`src/assets/news/index.ts`**

Add an import at the top (around line 22):
```typescript
import myNewsPicture from './latest/my-news-picture.jpg';
```

### Step 3: Add to Mapping & Use It
In the same file (`src/assets/news/index.ts`), add it to the object (around line 32):
```typescript
export const latestNewsImages: Record<string, string> = {
  // ... existing images
  'my-news-picture': myNewsPicture,  // ← Add your image here
};
```

Then in **`src/data/destinations.ts`**, add the image to your news item:
```typescript
{
  id: "main5",
  title: "Your News Title",
  date: "2024-12-20",
  excerpt: "Your news description...",
  image: "my-news-picture"  // ← Use the key you created above
}
```

## 🎯 Complete Example

Let's say you want to add an image called `wildlife-conservation.jpg`:

**Step 1:** Put the file in `src/assets/news/latest/wildlife-conservation.jpg`

**Step 2:** In `src/assets/news/index.ts`, add:
```typescript
import wildlifeConservation from './latest/wildlife-conservation.jpg';
```

**Step 3:** In the same file, add to the object:
```typescript
export const latestNewsImages = {
  // ... existing
  'wildlife-conservation': wildlifeConservation,
};
```

**Step 4:** In `src/data/destinations.ts`, use it:
```typescript
{
  id: "main5",
  title: "Wildlife Conservation Event",
  date: "2024-12-20",
  excerpt: "Join us for an important conservation event...",
  image: "wildlife-conservation"  // ← This will show your image!
}
```

## 📝 Current Setup

✅ **Image folder created:** `src/assets/news/latest/`
✅ **Image helper created:** `src/assets/news/index.ts`
✅ **Component updated:** NewsAndEvents.tsx uses the images automatically

## 💡 Tips

- **File location:** Always put images in `src/assets/news/latest/`
- **Naming:** Use lowercase with hyphens (e.g., `my-news-item.jpg`)
- **Formats:** `.jpg`, `.png`, or `.webp` all work
- **Size:** Keep images under 500KB for best performance

## 🔍 Where Images Appear

Your images will automatically appear in:
- ✅ Latest News section (homepage)
- ✅ News & Events page
- ✅ All news cards throughout the site

That's it! Just 3 simple steps and your image will appear! 🎉

