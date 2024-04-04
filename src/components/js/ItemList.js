import React, { useState, useEffect } from 'react';
import Item from './Item';
import celularImagem from '../../images/celular_02.jpg'

const produtoList  = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const items = [
        {
          id: 1,
          name: "Product 1",
          price: 10,
          details: "Details of product 1",
          image: celularImagem
        },
        {
          id: 2,
          name: "Product 2",
          price: 20,
          details: "Details of product 2",
          image: celularImagem
        },
       
      ];
      resolve(items);
    }, 2000); 
  });
};

const  ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    produtoList().then(data => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>{item.details}</p>
              <img src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;  
