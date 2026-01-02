# Motorcycle Parts & Service Shop Management System - Project Overview

## 📋 Project Description
A complete, modern React.js frontend application for managing a motorcycle parts and service shop. The system includes separate admin and customer portals with full CRUD operations, service management, inventory tracking, and reporting features.

## 🛠️ Tech Stack
- **React.js 18.3.1** - Functional components with hooks (useState, useEffect)
- **React Router DOM 6.30.2** - Client-side routing and navigation
- **Tailwind CSS 3.4.19** - Utility-first CSS framework for styling
- **React Icons 5.3.0** - Icon library (Font Awesome icons)
- **Vite 6.0.0** - Build tool and dev server
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - CSS vendor prefixing

## 📁 Project Structure
```
src/
 ├── components/
 │   ├── Navbar.jsx          # Top navigation bar (with logout)
 │   ├── Sidebar.jsx          # Side navigation menu (admin/customer)
 │   ├── DashboardCard.jsx    # Reusable stat card component
 │   └── Modal.jsx            # Reusable modal dialog component
 │
 ├── pages/
 │   ├── Landing.jsx          # Homepage with login options
 │   │
 │   ├── admin/
 │   │   ├── AdminLogin.jsx      # Admin authentication
 │   │   ├── AdminDashboard.jsx  # Admin overview with stats
 │   │   ├── Inventory.jsx       # Parts inventory (CRUD operations)
 │   │   ├── Services.jsx        # Service management (assign mechanics, update status)
 │   │   ├── Customers.jsx       # Customer list with service history
 │   │   └── Reports.jsx         # Analytics and reports
 │   │
 │   └── customer/
 │       ├── CustomerLogin.jsx      # Customer authentication
 │       ├── CustomerRegister.jsx   # Customer registration
 │       ├── CustomerDashboard.jsx  # Customer service overview
 │       ├── RequestService.jsx     # Submit new service requests
 │       ├── ServiceHistory.jsx     # View past services
 │       └── Parts.jsx              # Browse and search parts catalog
 │
 ├── data/
 │   ├── mockParts.js      # Mock motorcycle parts data
 │   ├── mockServices.js   # Mock service requests data
 │   └── mockCustomers.js  # Mock customer data
 │
 ├── App.jsx              # Main app component with routing
 ├── main.jsx            # React entry point
 └── index.css           # Tailwind CSS imports and custom styles
```

## 🎯 Key Features

### Admin Module
1. **Dashboard**
   - Total sales, low stock alerts, pending/completed services
   - Recent services table
   - Real-time statistics

2. **Inventory Management**
   - View all parts with stock levels
   - Add/Edit/Delete parts (modal-based)
   - Low stock highlighting
   - Category, price, supplier tracking

3. **Services Management**
   - View all service requests
   - Assign mechanics (dropdown selection)
   - Update service status (Pending → In Progress → Completed)
   - Track service costs and dates

4. **Customers**
   - Customer list with contact info
   - View customer service history in modal
   - Total services and last service date

5. **Reports**
   - Revenue and service statistics
   - Service type distribution charts
   - Recent completed services

### Customer Module
1. **Dashboard**
   - Personal service overview
   - Pending/completed service counts
   - Service history cards

2. **Request Service**
   - Service request form
   - Bike model, service type, date selection
   - Description/issue input

3. **Service History**
   - Complete service history table
   - Status tracking
   - Cost and mechanic information

4. **Parts Catalog**
   - Browse available parts
   - Search functionality
   - Category filtering
   - Add to cart (demo functionality)
   - Stock availability display

## 🔐 Authentication & Routing

### Routes
- `/` - Landing page
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/inventory` - Inventory management
- `/admin/services` - Services management
- `/admin/customers` - Customer management
- `/admin/reports` - Reports & analytics
- `/customer/login` - Customer login
- `/customer/register` - Customer registration
- `/customer/dashboard` - Customer dashboard
- `/customer/request-service` - Request new service
- `/customer/service-history` - Service history
- `/customer/parts` - Parts catalog

### Authentication
- **Admin**: `admin@motorshop.com` / `admin123`
- **Customer**: Any email/password (demo mode)
- Uses localStorage for session management
- Protected routes with `ProtectedRoute` component

## 🎨 Styling
- **Tailwind CSS** utility classes
- Custom color scheme (primary blue)
- Responsive design (mobile, tablet, desktop)
- Custom component classes (btn-primary, input-field, card)
- Glassmorphism effects on cards
- Status badges with color coding

## 📦 Mock Data
All data is stored in mock files:
- **mockParts.js**: 8 sample parts with categories, stock, prices
- **mockServices.js**: 5 sample services with different statuses
- **mockCustomers.js**: 5 sample customers with bike info

## 🚀 How to Run

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build
```bash
npm run build
```

## 🔧 Configuration Files

### `package.json`
- Dependencies and scripts
- React, React Router, Tailwind, Vite setup

### `vite.config.js`
- Vite configuration
- React plugin setup
- Port 5173

### `tailwind.config.js`
- Tailwind content paths
- Custom primary color palette
- Theme extensions

### `postcss.config.js`
- PostCSS plugins (Tailwind, Autoprefixer)
- CommonJS format

## 📝 Key Components

### `App.jsx`
- Main routing configuration
- Protected route wrapper
- Admin/Customer layout components
- Route definitions

### `ProtectedRoute`
- Authentication check
- Redirects to login if not authenticated
- Separate admin/customer protection

### Layout Components
- `AdminLayout`: Sidebar + Navbar for admin pages
- `CustomerLayout`: Sidebar + Navbar for customer pages

## 🎯 State Management
- Uses React hooks (useState, useEffect)
- Local state for forms and UI
- localStorage for authentication tokens
- No external state management library

## 🔄 Data Flow
1. Mock data imported from `/data` folder
2. State managed in component level
3. CRUD operations update local state
4. No backend API calls (all frontend)

## 🐛 Known Limitations
- No backend integration (mock data only)
- No database persistence
- No real authentication (localStorage tokens)
- No payment processing
- No image uploads
- No email notifications

## 🚧 Future Enhancements
- Backend API integration
- Database connectivity (MongoDB/PostgreSQL)
- Real authentication (JWT tokens)
- Payment gateway integration
- Email notifications
- Image uploads for parts
- Advanced analytics
- PDF invoice generation
- SMS notifications

## 📄 Important Notes
- All styling uses Tailwind CSS classes
- Components are functional (no class components)
- Uses React Router v6 syntax
- Responsive design with mobile-first approach
- Accessible UI with proper semantic HTML
- Clean code structure with reusable components

---

**Current Status**: Fully functional frontend with mock data, ready for backend integration.

