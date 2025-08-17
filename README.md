# QwesUI 🚀

**Modern, lightweight frontend framework for fast UI development**

QwesUI is a comprehensive frontend framework that provides utility classes, prebuilt components, and JavaScript functionality for building modern, responsive web interfaces. It's designed to be lightweight, modular, and easy to use.

## ✨ Features

- **🎨 Utility-First CSS**: Comprehensive utility classes for spacing, colors, typography, and layout
- **🧩 Prebuilt Components**: Buttons, cards, modals, forms, navigation, and more
- **📱 Responsive Design**: Mobile-first approach with responsive utilities
- **🌙 Dark Mode**: Built-in theme switching with localStorage persistence
- **⚡ JavaScript API**: Simple API for modals, toasts, dropdowns, and interactive components
- **🎯 Modern CSS**: Uses CSS Grid, Flexbox, and modern CSS features
- **📦 NPM Ready**: Install via npm and import into your projects
- **🔧 Customizable**: Easy to customize with SCSS variables and mixins

## 🚀 Installation & Usage

### **Method 1: NPM (Recommended for projects)**

```bash
# Install QwesUI
npm install qwesui

# Use in your project
```

**HTML Usage:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My QwesUI Project</title>
  <link rel="stylesheet" href="node_modules/qwesui/dist/qwesui.min.css">
</head>
<body>
  <button class="btn btn-primary">Hello QwesUI!</button>
  
  <script src="node_modules/qwesui/dist/qwesui.min.js"></script>
</body>
</html>
```

**ES6 Import:**
```javascript
import 'qwesui/dist/qwesui.min.css';
import QwesUI from 'qwesui/dist/qwesui.min.js';

// Use the API
QwesUI.toast('Success!', 'success').show();
```

### **Method 2: CDN (Quick prototypes, no build tools)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QwesUI CDN Demo</title>
  
  <!-- CSS from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/qwesui@latest/dist/qwesui.min.css">
</head>
<body>
  <div class="container py-5">
    <h1 class="text-center">QwesUI via CDN</h1>
    <button class="btn btn-primary" data-modal="demo">Open Modal</button>
  </div>

  <!-- JavaScript from CDN -->
  <script src="https://unpkg.com/qwesui@latest/dist/qwesui.min.js"></script>
</body>
</html>
```

### **Method 3: Download & Self-Host**

```bash
# Clone the repository
git clone https://github.com/qwesui/qwesui.git

# Build from source
cd qwesui
npm install
npm run build

# Copy dist files to your project
cp dist/qwesui.min.css your-project/css/
cp dist/qwesui.min.js your-project/js/
```

## 🎯 **Real-World Usage Examples**

### **Example 1: Simple Landing Page**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Landing Page</title>
  <link rel="stylesheet" href="node_modules/qwesui/dist/qwesui.min.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">My Brand</a>
      <div class="navbar-nav ms-auto">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="py-5 bg-primary text-white text-center">
    <div class="container">
      <h1 class="display-4 mb-4">Welcome to My Site</h1>
      <p class="lead mb-4">Built with QwesUI for fast, modern design</p>
      <button class="btn btn-light btn-lg" data-modal="contact">Get Started</button>
    </div>
  </section>

  <!-- Features -->
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Feature 1</h5>
              <p class="card-text">Description of your amazing feature.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Feature 2</h5>
              <p class="card-text">Another great feature description.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Feature 3</h5>
              <p class="card-text">Third feature description.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Modal -->
  <div class="modal" id="contact">
    <div class="modal-backdrop"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Contact Us</h5>
          <button type="button" class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <form class="form">
            <div class="form-group mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" placeholder="Your name">
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="your@email.com">
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Message</label>
              <textarea class="form-control" rows="3" placeholder="Your message"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="QwesUI.modal('contact').hide()">Close</button>
          <button type="button" class="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  </div>

  <script src="node_modules/qwesui/dist/qwesui.min.js"></script>
</body>
</html>
```

### **Example 2: React/Vue Integration**

```javascript
// React Component
import 'qwesui/dist/qwesui.min.css';

function MyComponent() {
  const showToast = () => {
    // QwesUI is available globally
    window.QwesUI.toast('Hello from React!', 'success').show();
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={showToast}>
        Show Toast
      </button>
    </div>
  );
}
```

### **Example 3: Laravel/PHP Integration**

```php
<!-- In your Blade template -->
<!DOCTYPE html>
<html>
<head>
    <title>Laravel + QwesUI</title>
    <link rel="stylesheet" href="{{ asset('css/qwesui.min.css') }}">
</head>
<body>
    <div class="container">
        <h1>Welcome {{ $user->name }}</h1>
        <button class="btn btn-primary" data-modal="user-profile">
            View Profile
        </button>
    </div>

    <script src="{{ asset('js/qwesui.min.js') }}"></script>
</body>
</html>
```

## 🧩 Components

### Buttons

```html
<!-- Basic Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>

<!-- Button Variants -->
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-gradient-primary">Gradient</button>

<!-- Button Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Button States -->
<button class="btn btn-primary btn-loading">Loading</button>
<button class="btn btn-primary" disabled>Disabled</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Card Title</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Card content goes here.</p>
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Card Variants -->
<div class="card card-primary">Primary Card</div>
<div class="card card-gradient-primary">Gradient Card</div>
<div class="card card-clickable">Clickable Card</div>
```

### Modals

```html
<!-- Modal Trigger -->
<button class="btn btn-primary" data-modal="my-modal">Open Modal</button>

<!-- Modal Structure -->
<div class="modal" id="my-modal">
  <div class="modal-backdrop"></div>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        Modal content here...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
```

### Forms

```html
<form class="form">
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" placeholder="Enter password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Navigation

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-dropdown="navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## 🎯 JavaScript API

### Modals

```javascript
// Show modal
QwesUI.modal('my-modal').show();

// Hide modal
QwesUI.modal('my-modal').hide();
```

### Toasts

```javascript
// Show toast
QwesUI.toast('Success message!', 'success').show();

// Toast types: 'info', 'success', 'warning', 'danger'
// Auto-hides after 5 seconds by default
```

### Dropdowns

```javascript
// Toggle dropdown
const dropdown = document.querySelector('.dropdown');
QwesUI.dropdown(dropdown).toggle();

// Show/hide dropdown
QwesUI.dropdown(dropdown).show();
QwesUI.dropdown(dropdown).hide();
```

### Tabs

```javascript
// Switch to tab
const tabContainer = document.querySelector('.tabs');
QwesUI.tab(tabContainer, 'tab2').show();
```

## 🎨 Utility Classes

### Spacing

```html
<!-- Margins -->
<div class="m-0">No margin</div>
<div class="m-1">Small margin</div>
<div class="m-2">Medium margin</div>
<div class="m-3">Large margin</div>

<!-- Padding -->
<div class="p-0">No padding</div>
<div class="p-1">Small padding</div>
<div class="p-2">Medium padding</div>
<div class="p-3">Large padding</div>

<!-- Responsive spacing -->
<div class="m-md-3">Medium margin on medium screens and up</div>
```

### Colors

```html
<div class="bg-primary text-white">Primary background</div>
<div class="bg-success text-white">Success background</div>
<div class="bg-warning text-white">Warning background</div>
<div class="bg-danger text-white">Danger background</div>
<div class="bg-info text-white">Info background</div>
```

### Typography

```html
<h1 class="text-center">Centered text</h1>
<p class="text-muted">Muted text</p>
<p class="text-truncate">Truncated text...</p>
<p class="lead">Lead paragraph</p>
```

### Layout

```html
<!-- Flexbox -->
<div class="d-flex justify-content-center align-items-center">
  Centered content
</div>

<!-- Grid -->
<div class="row">
  <div class="col-md-6">Half width on medium screens</div>
  <div class="col-md-6">Half width on medium screens</div>
</div>

<!-- Display -->
<div class="d-none d-md-block">Hidden on small screens</div>
<div class="d-block d-md-none">Visible only on small screens</div>
```

## 🌙 Dark Mode

QwesUI includes built-in dark mode support:

```html
<!-- Theme toggle button -->
<button class="btn btn-outline-secondary" data-theme-toggle>
  🌙
</button>
```

The theme automatically:
- Detects user's system preference
- Saves choice to localStorage
- Applies appropriate color scheme

## 📱 Responsive Breakpoints

```scss
$breakpoints: (
  xs: 0,      // Extra small devices
  sm: 576px,  // Small devices
  md: 768px,  // Medium devices
  lg: 992px,  // Large devices
  xl: 1200px, // Extra large devices
  xxl: 1400px // Extra extra large devices
);
```

## 🛠️ Development

### Building from Source

```bash
# Install dependencies
npm install

# Development mode (watch for changes)
npm run dev

# Build for production
npm run build

# Clean build files
npm run clean
```

### Project Structure

```
qwesui/
├── src/
│   ├── css/              # SCSS source files
│   │   ├── components/   # Component styles
│   │   ├── utilities/    # Utility classes
│   │   ├── base/         # Base styles
│   │   ├── layout/       # Layout system
│   │   ├── themes/       # Theme styles
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── qwesui.scss
│   └── js/               # JavaScript source
│       └── qwesui.js
├── dist/                 # Built files
├── examples/             # Demo and examples
├── package.json          # NPM configuration
├── webpack.config.js     # Build configuration
├── install.sh            # Quick setup script
├── README.md             # Documentation
└── LICENSE               # Apache 2.0 License
```

### Customization

QwesUI is built with SCSS and can be easily customized:

```scss
// Override variables
$primary: #your-color;
$border-radius: 0.5rem;
$box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

// Import QwesUI
@import 'qwesui';
```

## 📦 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (with polyfills)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📄 License

Apache 2.0 License - see the [LICENSE](LICENSE) file for details.


## 🆘 Support & Documentation

- 📖 **Documentation:** Coming soon! Full usage guide and examples will be available shortly.  
- 🚀 **Open Source Code:** Check out the repository on GitHub: [QwesUI Repository](https://github.com/Aksel588/QwesUI)  
- 📧 **Contact:** Reach out via email: [akseldeveloper8@gmail.com](mailto:akseldeveloper8@gmail.com)

## 🚀 Roadmap

- [ ] Web Components support
- [ ] AI-powered UI generation tools
- [ ] Advanced animation system
- [ ] Component library
- [ ] VS Code extension
- [ ] Figma plugin

---

**Built with ❤️ by the QwesUI Team**
