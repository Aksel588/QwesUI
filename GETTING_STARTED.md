# 🚀 Getting Started with QwesUI

This guide will show you exactly how to use QwesUI in your projects.

## 📋 **Quick Start (5 minutes)**

### **Step 1: Install QwesUI**

```bash
npm install qwesui
```

### **Step 2: Add to your HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My QwesUI Project</title>
  
  <!-- QwesUI CSS -->
  <link rel="stylesheet" href="node_modules/qwesui/dist/qwesui.min.css">
</head>
<body>
  <!-- Your content here -->
  <div class="container py-5">
    <h1 class="text-center">Hello QwesUI!</h1>
    <button class="btn btn-primary">Click Me</button>
  </div>

  <!-- QwesUI JavaScript -->
  <script src="node_modules/qwesui/dist/qwesui.min.js"></script>
</body>
</html>
```

### **Step 3: Open in browser**

That's it! You now have a working QwesUI project. 🎉

---

## 🎯 **Common Use Cases**

### **1. Landing Page**

```html
<!DOCTYPE html>
<html lang="en">
<head>
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
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="py-5 bg-primary text-white text-center">
    <div class="container">
      <h1 class="display-4">Welcome</h1>
      <p class="lead">Built with QwesUI</p>
      <button class="btn btn-light btn-lg">Get Started</button>
    </div>
  </section>

  <!-- Features -->
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Feature 1</h5>
              <p class="card-text">Amazing feature description.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Feature 2</h5>
              <p class="card-text">Another great feature.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Feature 3</h5>
              <p class="card-text">Third amazing feature.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="node_modules/qwesui/dist/qwesui.min.js"></script>
</body>
</html>
```

### **2. Contact Form with Modal**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Contact Form</title>
  <link rel="stylesheet" href="node_modules/qwesui/dist/qwesui.min.css">
</head>
<body>
  <div class="container py-5">
    <h1 class="text-center mb-4">Contact Us</h1>
    
    <!-- Contact Form -->
    <div class="row justify-content-center">
      <div class="col-md-6">
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
            <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Success Modal -->
  <div class="modal" id="success-modal">
    <div class="modal-backdrop"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Success!</h5>
          <button type="button" class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <p>Your message has been sent successfully!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="QwesUI.modal('success-modal').hide()">Close</button>
        </div>
      </div>
    </div>
  </div>

  <script src="node_modules/qwesui/dist/qwesui.min.js"></script>
  <script>
    // Show success modal on form submit
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      QwesUI.toast('Message sent!', 'success').show();
      QwesUI.modal('success-modal').show();
    });
  </script>
</body>
</html>
```

### **3. Dashboard with Cards**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Dashboard</title>
  <link rel="stylesheet" href="node_modules/qwesui/dist/qwesui.min.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Dashboard</a>
      <div class="navbar-nav ms-auto">
        <button class="btn btn-outline-light btn-sm" data-theme-toggle>🌙</button>
      </div>
    </div>
  </nav>

  <div class="container py-4">
    <!-- Stats Cards -->
    <div class="row mb-4">
      <div class="col-md-3">
        <div class="card bg-primary text-white text-center">
          <div class="card-body">
            <h3 class="card-title">1,234</h3>
            <p class="card-text">Total Users</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-success text-white text-center">
          <div class="card-body">
            <h3 class="card-title">567</h3>
            <p class="card-text">Active Users</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-warning text-white text-center">
          <div class="card-body">
            <h3 class="card-title">89</h3>
            <p class="card-text">New Users</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-info text-white text-center">
          <div class="card-body">
            <h3 class="card-title">$12,345</h3>
            <p class="card-text">Revenue</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex gap-2">
          <button class="btn btn-primary" onclick="QwesUI.toast('User added!', 'success').show()">
            Add User
          </button>
          <button class="btn btn-secondary" onclick="QwesUI.toast('Report generated!', 'info').show()">
            Generate Report
          </button>
          <button class="btn btn-success" onclick="QwesUI.toast('Settings saved!', 'success').show()">
            Save Settings
          </button>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Recent Activity</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Login</td>
                <td>2024-01-15</td>
                <td><span class="badge bg-success">Success</span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Purchase</td>
                <td>2024-01-15</td>
                <td><span class="badge bg-primary">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <script src="node_modules/qwesui/dist/qwesui.min.js"></script>
</body>
</html>
```

---

## 🔧 **Integration Examples**

### **React Component**

```jsx
import 'qwesui/dist/qwesui.min.css';

function MyComponent() {
  const showToast = () => {
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

### **Vue Component**

```vue
<template>
  <div class="container">
    <button class="btn btn-primary" @click="showToast">
      Show Toast
    </button>
  </div>
</template>

<script>
import 'qwesui/dist/qwesui.min.css';

export default {
  methods: {
    showToast() {
      window.QwesUI.toast('Hello from Vue!', 'success').show();
    }
  }
}
</script>
```

### **Laravel Blade Template**

```php
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

---

## 📱 **Responsive Utilities**

```html
<!-- Hide on small screens -->
<div class="d-none d-md-block">Desktop only content</div>

<!-- Show only on small screens -->
<div class="d-block d-md-none">Mobile only content</div>

<!-- Responsive spacing -->
<div class="p-2 p-md-4">Small padding on mobile, large on desktop</div>

<!-- Responsive grid -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    Full width on mobile, half on tablet, third on desktop
  </div>
</div>
```

---

## 🎨 **Customization**

### **Override Colors**

```scss
// In your SCSS file
$primary: #ff6b6b;
$secondary: #4ecdc4;
$success: #45b7d1;

// Import QwesUI
@import 'qwesui';
```

### **Custom Button Styles**

```scss
.btn-custom {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  color: white;
  
  &:hover {
    background: linear-gradient(45deg, #ff5252, #26a69a);
  }
}
```

---

## 🚀 **Next Steps**

1. **Explore Components**: Check out all available components in the examples
2. **Customize**: Modify colors, spacing, and other variables
3. **Build**: Create your own components using QwesUI utilities
4. **Contribute**: Help improve QwesUI by contributing code or ideas

---

**Need help?** Check out the [full documentation](README.md) or [examples](examples/index.html)!
