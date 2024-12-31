import React from 'react';
import { Link } from 'react-router-dom';

type NavLink = {
    label: string;
    href: string;
};

type HeaderProps = {
    links: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo Section */}
                <div className="text-lg font-semibold text-gray-800 hidden md:block">
                    The Mazzaroth
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-8 text-sm font-medium text-gray-600">
                        {links.map((link, index) => (
                            <li key={index} className="hover:text-black transition">
                                <Link to={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
