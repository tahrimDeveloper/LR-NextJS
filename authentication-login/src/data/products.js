const products = [
  {
    id: '1',
    image: '⌚',
    name: 'Watch',
    details: 'Buy is for 500 BDT',
  },
  {
    id: '2',
    image: '🥒',
    name: 'Cucumber',
    details: '2 KGS for 45.76 BDT',
  },
  {
    id: '3',
    image: '💻',
    name: 'Laptop',
    details: '23K BDT Without EMI',
  },
  {
    id: '4',
    image: '🎈',
    name: 'Baloon',
    details: 'One bag (12P) for 45 BDT',
  },
  {
    id: '5',
    image: '🎁',
    name: 'Mystry GiftBox',
    details: 'Each Box for 1070 BDT',
  },
  {
    id: '6',
    image: '🖼',
    name: 'Picture Frame',
    details: 'Each Frame for 150 BDT',
  },
  {
    id: '7',
    image: '🛒',
    name: 'Shopping Troly',
    details: 'Buy is for 1500 BDT',
  },
  {
    id: '8',
    image: '🥼',
    name: 'Mens Fatua',
    details: 'Buy it for 1599 BDT',
  },
  {
    id: '9',
    image: '👔',
    name: 'Mens Shirt',
    details: 'Buy it for 599 BDT only',
  },
  {
    id: '10',
    image: '👖',
    name: 'Mens Jins Pant',
    details: 'Buy it for 999 BDT only',
  },
  {
    id: '11',
    image: '🥻',
    name: 'Girls Lehenga',
    details: 'Buy it for 3999 BDT only',
  },
  {
    id: '12',
    image: '👓',
    name: 'SunGlass',
    details: 'Buy it for 199 BDT only',
  },
  {
    id: '13',
    image: '🥽',
    name: 'Virtual Reality',
    details: 'Buy it for 5999 BDT only',
  },
  {
    id: '14',
    image: '⚽',
    name: 'Football',
    details: 'Buy it for 999 BDT only',
  },
  {
    id: '15',
    image: '💍',
    name: 'Dimond Ring',
    details: 'Buy it for 19,89,990 BDT only',
  },
  {
    id: '16',
    image: '☎',
    name: 'Telephone',
    details: 'Buy it in 8999 BDT only',
  },
  {
    id: '17',
    image: '📱',
    name: 'SmartPhone',
    details: 'Buy it for 19,999 BDT only',
  },
  {
    id: '18',
    image: '🖨',
    name: 'Printer',
    details: 'Buy it for 7999 BDT only',
  },
  {
    id: '19',
    image: '⏰',
    name: 'Wall Watch',
    details: 'Buy it for 999 BDT only',
  },
];

export const getAllProducts = () => {
  return products;
};

export const getProductById = id => {
  const found = products.find(product => product.id === id);
  return found;
};
