import { Link } from 'react-router-dom';
import Logo from '../assets/logo-1.png';
import Apple from '../assets/Apple.svg';

const NavbarComponent = () => {
    return (
        <nav className="text-white shadow-md fixed w-full" style={{ backgroundColor: "#0A518C", fontFamily: "Roboto" }}>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
                <Link to="/" className="w-32">
                    <img src={Logo} alt="Logo Super-League" />
                </Link>
                <ul className="flex gap-10 items-center">
                    <li>
                        <Link to="/" className="hover:text-gray-200">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/match" className="hover:text-gray-200">Pertandingan</Link>
                    </li>
                    <li>
                        <Link to="/table" className="hover:text-gray-200">Tabel</Link>
                    </li>
                    <li>
                        <Link to="/news" className="hover:text-gray-200">Berita</Link>
                    </li>
                </ul>
                <div className='flex gap-4 items-center'>
                    <div>
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                    </svg>

                                </button>
                            </span>
                            <input type="search" name="q" className="py-2 text-sm text-gray-600 bg-gray-100 opacity-50 rounded-4xl pl-10 focus:outline-none hover:ring-2 hover:ring-gray-400" placeholder="Pencarian..." autoComplete="off" />
                        </div>
                    </div>
                    <button type="button" className="bg-gray-100 opacity-50 rounded-full p-1 hover:ring-2 hover:ring-gray-400">
                        <img className="w-8 h-8 p-1 rounded-2xl" src={Apple} alt="Apple" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;