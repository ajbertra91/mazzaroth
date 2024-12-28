import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';

const links = [
    { label: 'Home', href: '/mazzaroth' },
    { label: 'History', href: '/mazzaroth/history' },
    { label: 'Magi', href: '/mazzaroth/magi' },
    { label: 'Mazzaroth', href: '/mazzaroth/stars' },
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
