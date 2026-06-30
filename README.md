# 🛍️ Tech-Store - E-Commerce Platform

A modern, full-featured e-commerce platform for technology products built with React, Vite, and Tailwind CSS. This project demonstrates a production-ready SPA (Single Page Application) with cart management, product filtering, and a responsive design that works seamlessly across all devices.

**Repository**: [github.com/ozguneyin/Tech-Store](https://github.com/ozguneyin/Tech-Store)

## ✨ Key Features

### 🎯 Core Features
- **Single Page Application (SPA)**: Smooth navigation with React Router v7
- **Modern Dark Theme**: Professional UI with electric blue/purple gradients and glassmorphism effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop screens
- **Persistent Cart**: Context API + js-cookie for 7-day data retention
- **Fast Performance**: Vite for rapid development and optimized production builds
- **Advanced Filtering**: Filter by category, price range, and ratings
- **Smart Sorting**: Sort products by popularity, price, rating, and date added

### 📱 Main Pages
- **🏠 Home**: Hero banner, category showcase, featured products, quick navigation
- **📦 Products**: Advanced filtering, sorting, product grid with quick view
- **🔍 Product Detail**: Full product info, image gallery, specs, similar products, reviews
- **🛒 Shopping Cart**: Add/remove items, quantity control, order summary, checkout preview
- **📋 Checkout**: Order review and payment interface

### 🛒 Shopping Cart System
- ✅ Add/remove products dynamically
- ✅ Quantity controls with +/- buttons
- ✅ Automatic total calculation
- ✅ Cart persistence across browser sessions
- ✅ 7-day cookie-based storage
- ✅ Stock availability checks
- ✅ Real-time cart updates

### 🎨 UI/UX Highlights
- ✨ Smooth shadows and rounded corners
- 🎬 Elegant hover animations and transitions
- 🌈 Vibrant gradients and color accents
- 📊 Stock status indicators
- 🏷️ Discount percentage badges
- 🔔 Toast notifications for user actions
- 🌙 Dark mode optimized design

## 🚀 Getting Started

### Prerequisites
- **Node.js**: 16 or higher
- **npm**: v7+ or **yarn** v1.22+
- Modern web browser

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/ozguneyin/Tech-Store.git
cd Tech-Store
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

The dev server features Hot Module Replacement (HMR) - changes automatically reflect in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.7 | Component-based UI framework |
| **Vite** | 8.1.2 | Next-gen build tool & dev server |
| **React Router** | 7.x | Client-side routing and navigation |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **lucide-react** | Latest | Beautiful icon library |
| **js-cookie** | Latest | Client-side cookie management |
| **PostCSS** | Latest | CSS transformation tool |

## 📁 Project Structure

```
Tech-Store/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar with logo and cart
│   │   ├── Footer.jsx          # Footer component
│   │   ├── ProductCard.jsx     # Reusable product display card
│   │   ├── ProductGrid.jsx     # Product grid layout
│   │   ├── FilterSidebar.jsx   # Product filtering controls
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Products.jsx        # Product listing with filters
│   │   ├── ProductDetail.jsx   # Single product detail view
│   │   └── Cart.jsx            # Shopping cart page
│   ├── context/
│   │   └── CartContext.jsx     # Global cart state management
│   ├── utils/
│   │   └── products.js         # Sample product data
│   ├── App.jsx                 # Main app component with routes
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎮 Usage Guide

### Home Page
- Browse featured products and categories
- Click on category cards to see filtered products
- Quick access to popular items

### Product Listing
- **Filter Products**: By category, price range, and customer ratings
- **Sort Options**: By popularity, newest, price (low-high), and ratings
- **Product Preview**: Hover or click cards to see quick details

### Product Details
- **Full Product Info**: Description, specifications, and customer reviews
- **Image Gallery**: Multiple product images with zoom capability
- **Stock Status**: Real-time inventory information
- **Similar Products**: Related product recommendations
- **Add to Cart**: Quick add with quantity selector

### Shopping Cart
- **View Items**: See all products in your cart
- **Modify Quantities**: Increase or decrease item quantities
- **Remove Items**: Delete products from cart
- **Order Summary**: View subtotal, taxes, and total
- **Proceed to Checkout**: Review and finalize your order

## 📊 Sample Product Data

The project includes 20+ sample technology products (phones, laptops, headphones, accessories, etc.):

```javascript
{
  id: 1,
  name: "Product Name",
  category: "Electronics",
  price: 1299,
  oldPrice: 1999,
  image: "product-image-url",
  rating: 4.5,
  stock: 15,
  description: "Product description here",
  specs: [
    { label: "Display", value: "6.5 inch AMOLED" },
    { label: "Memory", value: "8GB RAM" },
    { label: "Storage", value: "256GB SSD" }
  ]
}
```

## 🔄 Cart System Architecture

### CartContext Structure
```javascript
{
  cart: [],                           // Array of cart items
  addToCart(product, quantity),       // Add product to cart
  removeFromCart(productId),          // Remove product from cart
  updateQuantity(productId, qty),     // Update product quantity
  clearCart(),                        // Clear all items
  getCartTotal(),                     // Calculate total price
  getCartCount()                      // Get total item count
}
```

### Cookie Management
- **Key**: `tech_store_cart`
- **Format**: JSON array of cart items
- **Expiry**: 7 days
- **Sync**: Automatic update on cart changes

## 🎨 Color Scheme

| Color | Hex Value | Usage |
|-------|-----------|-------|
| Dark Background | `#0f172a` | Page background |
| Card Background | `#1e293b` | Component background |
| Light Text | `#ffffff` | Primary text |
| Secondary Text | `#d1d5db` | Secondary text |
| Purple Accent | `#a855f7` | Gradient start |
| Blue Accent | `#3b82f6` | Gradient end |

## 🚀 Build & Deployment

### Production Build
```bash
npm run build
```

Output is generated in the `dist/` folder as static files.

### Preview Build Locally
```bash
npm run preview
```

This command builds and starts a local preview server.

### Deploy to Production
The built files in `dist/` can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## 📝 Important Notes

- **Styling**: Tailwind CSS classes provide responsive design
- **Browser Compatibility**: Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- **Images**: Uses placeholder images from external CDN
- **Cart Storage**: Requires cookies enabled in browser
- **No Backend**: This is a frontend-only demo (no server payment processing)

## 🔮 Future Enhancements

- [ ] 💳 Real payment gateway integration (Stripe, PayPal)
- [ ] 👤 User authentication and account management
- [ ] 📦 Order tracking and history
- [ ] ⭐ Product reviews and ratings system
- [ ] ❤️ Wishlist/Favorites feature
- [ ] 🔎 Advanced search with autocomplete
- [ ] 🌙 Dark/Light theme toggle
- [ ] 📧 Email newsletter subscription
- [ ] 📱 Mobile native app version
- [ ] 🤖 AI-powered product recommendations

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR:
- Follows the existing code style
- Includes meaningful commit messages
- Adds tests for new features if applicable
- Updates documentation as needed

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 👨‍💻 About

**Tech-Store** - E-Commerce Platform Demo - 2026

- **Repository**: [github.com/ozguneyin/Tech-Store](https://github.com/ozguneyin/Tech-Store)
- **Issues & Support**: [GitHub Issues](https://github.com/ozguneyin/Tech-Store/issues)

---

### ⚠️ Important Disclaimer

This project is created for **educational and demonstration purposes**. For a production e-commerce platform, the following are required:

- ✅ Backend API with database (Node.js, Python, Java, etc.)
- ✅ Secure payment processing (PCI DSS compliant)
- ✅ User authentication and authorization
- ✅ SSL/TLS encryption
- ✅ GDPR and data privacy compliance
- ✅ Regular security audits
- ✅ Inventory management system
- ✅ Order management and fulfillment

**Use this as a learning resource and starting point for your own projects!**
