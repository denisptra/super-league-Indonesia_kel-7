// src/components/Layout.tsx

import React from 'react';
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="layout-container">
            <NavbarComponent />
            <main className='pt-20'>
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
}

export default Layout;