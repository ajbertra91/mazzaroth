import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';

const links = [
    { label: 'Home', href: '/' },
    { label: 'History', href: '/history' },
    { label: 'Magi', href: '/magi' },
    { label: 'Mazzaroth', href: '/mazzaroth' },
];

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header links={links} />

            {/* Main Content */}
            <main className="flex-grow p-6 bg-gray-100">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
