import React from 'react';
import Link from 'next/link';

function CustomersPage() {
  const customersData = [
    { id: '009', name: 'Abdullah', value: 23949 },
    { id: '021', name: 'Hasan', value: 23939 },
    { id: '011', name: 'Sayeed', value: 93249 },
    { id: '019', name: 'Tahrim', value: 99999 },
    { id: '001', name: 'Muhammad', value: 19999 },
  ];

  return (
    <div className="flex flex-col p-2 border rounded-md border-gray-300 m-3">
      <h2 className="text-xl my-2 font-semibold">All Customers</h2>
      <Link className="underline" href="/store/admin/prime">
        Prime Customers
      </Link>
      <ul className="flex flex-col m-3">
        {customersData.map(item => {
          return (
            <li key={item.id} className="p-1 text-xl">
              <span className="mx-2">{item.name}</span>
              {' - '}
              <span className="mx-2">
                {new Intl.NumberFormat().format(item.value)} BDT
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomersPage;
