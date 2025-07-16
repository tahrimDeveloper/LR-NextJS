import React from 'react';
import { isSuperAdmin } from '@/app/lib/auth';
import '@/app/globals.css';

export const metadata = {
  title: 'BissasDhol Admin',
  description: 'Dashbord for bissas dhol books store',
};

function AdminLayout({ children, balance, expenses, profit, customers }) {
  const superAdmin = isSuperAdmin();
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-amber-300 my-3">
        <h1 className="text-center text-2xl font-bold text-green-600">
          Dashboard
        </h1>
      </div>
      {children}
      {superAdmin ? (
        <div>
          <div className="flex my-4 gap-2.5">
            {balance}
            {expenses}
            {profit}
          </div>
          <div>{customers}</div>
        </div>
      ) : (
        'only Admin can see this (do true on lib/auth.js file component)'
      )}
    </div>
  );
}
export default AdminLayout;
