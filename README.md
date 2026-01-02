# Motorcycle Parts & Service Shop Management System

A modern, responsive React.js frontend application for managing a motorcycle parts and service shop.

## 🚀 Features

### Admin Module
- **Dashboard**: Overview with sales, stock, and service statistics
- **Inventory Management**: Add, edit, delete parts with low stock alerts
- **Services Management**: Track and manage service requests, assign mechanics
- **Customers**: View customer list and service history
- **Reports**: Analytics and service distribution charts

### Customer Module
- **Dashboard**: Personal service overview
- **Request Service**: Submit new service requests
- **Service History**: View all past and current services
- **Parts Catalog**: Browse and search available parts

## 🛠️ Tech Stack

- **React.js** (Functional Components)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **React Icons** (Icons)
- **Vite** (Build Tool)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🔐 Demo Credentials

### Admin Login
- **Email**: `admin@motorshop.com`
- **Password**: `admin123`

### Customer Login
- Use any email and password (demo mode)
- Or register a new account

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── Sidebar.jsx
 │   ├── DashboardCard.jsx
 │   └── Modal.jsx
 ├── pages/
 │   ├── Landing.jsx
 │   ├── admin/
 │   │   ├── AdminLogin.jsx
 │   │   ├── AdminDashboard.jsx
 │   │   ├── Inventory.jsx
 │   │   ├── Services.jsx
 │   │   ├── Customers.jsx
 │   │   └── Reports.jsx
 │   └── customer/
 │       ├── CustomerLogin.jsx
 │       ├── CustomerRegister.jsx
 │       ├── CustomerDashboard.jsx
 │       ├── RequestService.jsx
 │       ├── ServiceHistory.jsx
 │       └── Parts.jsx
 ├── data/
 │   ├── mockParts.js
 │   ├── mockServices.js
 │   └── mockCustomers.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## 🎨 Features Highlights

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Mock Data**: Pre-populated with sample data for testing
- **Protected Routes**: Authentication-based route protection
- **Real-time Updates**: State management with React hooks

## 📝 Notes

- This is a frontend-only application with mock data
- No backend integration yet
- All data is stored in localStorage for session persistence
- Perfect for prototyping and demonstration

## 🚧 Future Enhancements

- Backend API integration
- Database connectivity
- Payment gateway integration
- Email notifications
- Advanced analytics and reporting
- Image uploads for parts and services

---

Built with ❤️ using React.js and Tailwind CSS

