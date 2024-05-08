// layout component
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props: {
    children: React.ReactNode;
}) => {
    return (
        <div className="font-body flex flex-col min-h-screen">
            <Header />
                <main className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 flex-1">
                    {props.children}
                </main>
            <Footer />
        </div>
    )
}

export default Layout;