// src/components/Layout.tsx

import React from 'react';
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <div className="layout-container">
            <NavbarComponent />
            <main className='pt-20'>
                {children}
            </main>
            <FooterComponent />
        </div>
    );
}

export default Layout;