'use client';

import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { StoreContext } from '@/app/context';

function AddToCart({ book }) {
  const { cartData, setCartData } = useContext(StoreContext);

  const handleCart = (event, reason) => {
    event.preventDefault();
    const newBook = { ...book, type: reason };
    setCartData([...cartData, newBook]);
    toast.success(`Added ${newBook.title} to the cart`, {
      autoClose: 1500,
      position: 'top-right',
    });
  };

  return (
    <div className="flex justify-around mt-2 border-t-2 p-2">
      <button
        className="bg-green-500 hover:bg-green-800 px-4 py-2 rounded text-white"
        onClick={event => handleCart(event, 'Buy')}>
        <ShoppingCartIcon className="w-5 mr-0.5 inline" />
        To Buy
      </button>
      <button
        className="bg-green-500 hover:bg-green-800 px-4 py-2 rounded text-white"
        onClick={event => handleCart(event, 'Rent')}>
        <ShoppingCartIcon className="w-5 mr-0.5 inline" />
        To Rent
      </button>
    </div>
  );
}

export default AddToCart;
