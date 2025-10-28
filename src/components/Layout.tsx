// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';

function Layout() {
  return (
    <div className="layout-container flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="pt-18 flex-grow">
        <Outlet /> {/* <- nested routes akan dirender di sini */}
      </main>
      <FooterComponent />
    </div>
  );
}

export default Layout;