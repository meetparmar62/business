# CREATIVO - Web Development Agency Website

A fully responsive website built with HTML, Tailwind CSS, and JavaScript featuring a video background and services showcase.

## Features

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Video Background** - High-quality video background in hero section (optimized for all devices)
✅ **Dynamic Navbar** - Sticky navbar with mobile menu toggle
✅ **Services Section** - Showcase of 9 main services with hover effects
✅ **Mobile Optimized** - Video doesn't break on mobile devices
✅ **Smooth Animations** - Scroll animations and transitions
✅ **Tailwind CSS** - Modern utility-first CSS framework
✅ **SEO Ready** - Semantic HTML structure

## Setup Instructions

### 1. Add Video File

The website expects a video file at: `assets/hero-video.mp4`

**To add your video:**
1. Place your video file in the `assets` folder
2. Name it `hero-video.mp4`
3. **Video Optimization Tips:**
   - Reduce quality for faster loading
   - Recommended: 1920x1080 resolution
   - Recommended: 2-3 MB file size
   - Format: MP4 (H.264 codec)
   - Use ffmpeg to compress:
     ```
     ffmpeg -i input-video.mp4 -vf scale=1920:1080 -b:v 2000k -crf 28 hero-video.mp4
     ```

### 2. Project Structure

```
jobwebsite/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── hero-video.mp4 (add your video here)
└── README.md
```

### 3. Run Locally

- **Option 1:** Open `index.html` directly in your browser
- **Option 2:** Use a local server (recommended for video playback)
  ```
  python -m http.server 8000
  ```
  Then visit: `http://localhost:8000`

## File Descriptions

### index.html
- Main HTML structure
- Navigation bar with mobile menu
- Hero section with video background
- 9-service cards grid
- Footer with links

### styles.css
- Custom animations
- Mobile responsive styles
- Video optimization for all devices
- Scrollbar styling
- Smooth transitions

### script.js
- Mobile menu toggle functionality
- Smooth scroll navigation
- Navbar scroll effects
- Video optimization
- Intersection Observer for animations
- Slider navigation

## Video Background Features

🎬 **Responsive Video Handling:**
- Maintains aspect ratio on all devices
- Doesn't break on mobile phones
- Optimized `object-fit: cover` for full coverage
- Muted autoplay with fallback for browser policies
- Smooth playback on desktop and mobile

## Customization

### Change Colors
Edit the Tailwind classes in `index.html`. Look for:
- `text-teal-400` - Primary accent color
- `bg-gray-800`, `bg-gray-700` - Background colors

### Change Content
- Logo/Company Name: Line 22 in index.html
- Service titles and descriptions: Services section
- Footer information: Update contact details

### Add More Services
Duplicate any service card (lines 191-199) and update the content.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Video Compression:** Keep video file under 3MB
2. **Image Optimization:** Use compressed images in portfolio
3. **Caching:** Configure browser caching for assets
4. **CDN:** Use Tailwind CDN (already included)

## Contact & Support

For questions or customization needs, modify the contact information in the footer section.

---

**Built with ❤️ using HTML, Tailwind CSS, and Vanilla JavaScript**
