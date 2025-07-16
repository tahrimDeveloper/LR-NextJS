import React from 'react';
import SideBar from '../ui/sidebar/SideBar';
import StoreProvider from '../provider';

export const metadata = {
  title: 'Bissas- Buy or Rent Books',
  description: 'An Online Bookstore to sell and rent used books',
};

function BooksStorelayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex flex-col md:flex-row min-h-screen">
        <SideBar />
        <div className="flex flex-wrap p-2 justify-center w-full">
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}

export default BooksStorelayout;
