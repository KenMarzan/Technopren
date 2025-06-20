# AgriGrow - HTML/CSS Website

A professional agricultural services website built with HTML, CSS, and JavaScript, featuring a modern design and responsive layout.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Professional design with smooth animations and micro-interactions
- **Contact Form**: Functional contact form with client-side validation
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Responsive navigation for mobile devices
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: Focus states and keyboard navigation support

## File Structure

```
/
├── index.html             # Main homepage
├── contact.html           # Contact form page
├── css/                   # Stylesheets
│   └── styles.css         # Custom CSS styles
├── js/                    # JavaScript files
│   ├── main.js            # Main functionality
│   └── contact.js         # Contact form handling
└── README.md              # This file
```

## Setup Instructions

### Option 1: Simple File Opening
1. Download all files to a folder
2. Open `index.html` in any modern web browser
3. Navigate using the menu or click "Contact" to visit the contact page

### Option 2: Local Web Server (Recommended)
1. **Using Python** (if installed):
   ```bash
   cd /path/to/agrigrow
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Using Node.js** (if installed):
   ```bash
   npx serve .
   ```

3. **Using PHP** (if installed):
   ```bash
   php -S localhost:8000
   ```

### Option 3: Deploy to Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Visit your domain to see the live site

## Customization

### Colors and Styling
- The site uses Tailwind CSS via CDN for rapid styling
- Primary color scheme: Green (#059669)
- Custom styles are in `css/styles.css`
- Modify Tailwind classes in HTML or add custom CSS

### Content
- Edit HTML files directly to modify content
- Update images by changing the Pexels URLs
- Modify contact information in both `index.html` and `contact.html`

### Navigation
- Update navigation items in the header sections
- Add new pages by creating new HTML files
- Update links in the footer sections

## JavaScript Features

### Main Functionality (`js/main.js`)
- Smooth scrolling navigation
- Header hide/show on scroll
- Scroll-triggered animations
- Mobile menu toggle
- Form validation utilities

### Contact Form (`js/contact.js`)
- Client-side form validation
- Form submission handling
- Success/error message display
- Phone number formatting
- Loading states

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach
- Graceful degradation for older browsers

## Performance Features

- Uses CDN for Tailwind CSS and fonts
- Optimized images from Pexels
- Minimal JavaScript for enhanced functionality
- Clean, semantic HTML structure
- Efficient CSS with utility classes

## Contact Form Features

- **Client-side validation**: Real-time field validation
- **Error handling**: User-friendly error messages
- **Success feedback**: Confirmation messages
- **Phone formatting**: Automatic phone number formatting
- **Accessibility**: Proper labels and focus management

### Form Integration
The contact form currently uses client-side validation and simulated submission. To integrate with a backend:

1. Replace the `simulateFormSubmission` function in `js/contact.js`
2. Update the form action and method as needed
3. Add server-side validation and email sending

Example backend integration:
```javascript
async function submitContactForm(formData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}
```

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Focus indicators
- Keyboard navigation support
- Screen reader friendly

## SEO Optimization

- Meta tags for viewport and charset
- Semantic HTML5 elements
- Descriptive page titles
- Clean URL structure
- Fast loading times

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please refer to the contact information on the website or create an issue in the project repository.#   T e c h n o p r e n  
 