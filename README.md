# 🎉 Dishari's Birthday Wishes & Gifts Website

A beautiful, interactive birthday celebration website with wishes, gift ideas, and photo gallery!

## Features ✨

- 🎂 **Animated Header** - Floating balloons and celebration theme
- 💌 **Birthday Wishes** - Add and view wishes with local storage
- 🎁 **Gift Ideas** - Curated gift suggestions with descriptions
- 📸 **Memory Gallery** - Photo gallery section for memories
- 🎊 **Confetti Animation** - Celebratory effects on page load
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- 💾 **Local Storage** - Wishes are saved in browser storage

## How to Use

### Option 1: View Locally (Recommended)
1. Clone or download the repository
2. Open `index.html` in your web browser
3. That's it! The site is fully functional

### Option 2: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select `main` branch as the source
4. Click Save
5. Your site will be live at: `https://sayandas16990-beep.github.io/birthday-wishes-site`

### Option 3: Use a Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server installed)
http-server
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
birthday-wishes-site/
├── index.html          # Main HTML file with structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Customization

### Change Dishari's Birthday Date
Edit line 229 in `script.js`:
```javascript
const birthdayDate = new Date(2026, 8, 15); // Change to actual date
```
Note: Month is 0-indexed (0 = January, 8 = September)

### Add More Gift Ideas
Edit the gift cards section in `index.html` (around line 75-113):
```html
<div class="gift-card">
    <div class="gift-icon">🎯</div>
    <h3>Gift Name</h3>
    <p>Gift description here</p>
    <a href="#" class="gift-link">View Options →</a>
</div>
```

### Customize Colors
Edit `style.css` and change the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Features Explained

### 1. Birthday Wishes Section
- Pre-loaded with 3 sample wishes
- Add new wishes using the form
- Wishes are saved to browser's local storage
- Wishes persist even after page refresh

### 2. Gift Ideas
- 6 categorized gift suggestions
- Hover effects and animations
- Easy to customize for different interests

### 3. Memory Gallery
- Placeholder for 6 photos
- Can be replaced with actual images
- Responsive grid layout

### 4. Animations
- Floating balloons in header
- Confetti falling on page load
- Smooth transitions and hover effects
- Parallax scrolling effect

## Browser Compatibility

✅ Chrome/Edge
✅ Firefox
✅ Safari
✅ Mobile browsers

## Local Storage Data

Wishes are stored in:
```javascript
localStorage.getItem('birthdayWishes')
```

To clear saved wishes:
1. Open Developer Console (F12)
2. Type: `localStorage.clear()`
3. Press Enter

## Tips

- 🎨 Personalize the color scheme by editing `style.css`
- 📸 Add real photos by replacing the gallery placeholders
- 🎁 Update gift ideas based on Dishari's interests
- 🔗 Share the GitHub link with friends to add wishes
- 💾 Wishes are saved locally on each device

## Made with ❤️

This website was created to celebrate Dishari's special day with love and appreciation from friends!

---

**Enjoy the celebration! 🎉**
