#!/bin/bash

# QwesUI Installation Script
# ==========================

echo "🚀 Installing QwesUI..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install QwesUI
echo "📦 Installing QwesUI via npm..."
npm install qwesui

# Create basic project structure
echo "📁 Creating project structure..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy QwesUI files
echo "📋 Copying QwesUI files..."
cp node_modules/qwesui/dist/qwesui.min.css dist/
cp node_modules/qwesui/dist/qwesui.min.js dist/

# Create basic HTML template
echo "📝 Creating basic HTML template..."
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QwesUI Project</title>
    <link rel="stylesheet" href="dist/qwesui.min.css">
</head>
<body>
    <div class="container py-5">
        <h1 class="text-center mb-4">Welcome to QwesUI!</h1>
        
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Getting Started</h5>
                        <p class="card-text">Your QwesUI project is ready to go!</p>
                        <button class="btn btn-primary" data-modal="demo-modal">Open Modal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Demo Modal -->
    <div class="modal" id="demo-modal">
        <div class="modal-backdrop"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Hello QwesUI!</h5>
                    <button type="button" class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>This modal demonstrates QwesUI's JavaScript functionality.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="QwesUI.modal('demo-modal').hide()">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="dist/qwesui.min.js"></script>
</body>
</html>
EOF

# Create package.json if it doesn't exist
if [ ! -f package.json ]; then
    echo "📦 Creating package.json..."
    cat > package.json << 'EOF'
{
  "name": "qwesui-project",
  "version": "1.0.0",
  "description": "A QwesUI project",
  "main": "index.html",
  "scripts": {
    "start": "python3 -m http.server 8000 || python -m SimpleHTTPServer 8000 || npx serve .",
    "dev": "npm run start"
  },
  "keywords": ["qwesui", "frontend", "ui", "framework"],
  "author": "Your Name",
  "license": "MIT"
}
EOF
fi

echo ""
echo "✅ QwesUI installation complete!"
echo ""
echo "📁 Project structure created:"
echo "   ├── dist/"
echo "   │   ├── qwesui.min.css"
echo "   │   └── qwesui.min.js"
echo "   ├── index.html"
echo "   └── package.json"
echo ""
echo "🚀 To start your project:"
echo "   npm start"
echo ""
echo "📖 Documentation: https://github.com/qwesui/qwesui"
echo "🎯 Examples: https://github.com/qwesui/qwesui/tree/main/examples"
echo ""
echo "Happy coding with QwesUI! 🎉"
