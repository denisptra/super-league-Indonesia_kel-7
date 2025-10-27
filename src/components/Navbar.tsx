import { Link } from 'react-router-dom';
import Logo from '../assets/logo-1.png';
import Apple from '../assets/Apple.svg';
import { useState, useEffect } from 'react';

const NavbarComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem("token")));
    }, []);

    return (
        <nav className="text-white shadow-md fixed w-full z-50" style={{ backgroundColor: "#0A518C", fontFamily: "Roboto" }}>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-4 md:px-0">
                <Link to="/" className="w-32">
                    <img src={Logo} alt="Logo Super-League" />
                </Link>
                <ul className="flex gap-10 items-center">
                    <li><Link to="/" className="hover:text-gray-200 transition">Beranda</Link></li>
                    <li><Link to="/match" className="hover:text-gray-200 transition">Pertandingan</Link></li>
                    <li><Link to="/table" className="hover:text-gray-200 transition">Tabel</Link></li>
                    <li><Link to="/news" className="hover:text-gray-200 transition">Berita</Link></li>
                </ul>
                <div className='flex gap-4 items-center'>
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="q" className="py-2 text-sm text-gray-600 bg-gray-100 opacity-50 rounded-full pl-10 focus:outline-none hover:ring-2 hover:ring-gray-400 transition" placeholder="Pencarian..." autoComplete="off" />
                    </div>
                    <button type="button" className="bg-gray-100 opacity-50 rounded-full p-1 hover:ring-2 hover:ring-gray-400 transition">
                        <img className="w-8 h-8 p-1 rounded-2xl" src={Apple} alt="Apple" />
                    </button>
                    {isLoggedIn && (
                        <Link to="/dashboard" className="p-2 px-4 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300">
                            Dashboard
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;