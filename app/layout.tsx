import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <header className='bg-white shadow-md py-4'>
        <div className='container mx-auto'>
          <h1 className='text-2xl font-bold'>Online Store</h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;