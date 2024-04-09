import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import celularImagem from '../../images/celular_02.jpg';

const getItem = () => {
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

const ItemDetailConatiner = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getItem().then(data => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const handleDetailsClick = (itemId) => {
    const selectedItem = items.find(item => item.id === itemId);
    if (selectedItem) {
      console.log("Clicou no botão de detalhes:", selectedItem);
      navigate(`/item/${itemId}`, { state: { selectedItem } });
    }
  };

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
              <button onClick={() => handleDetailsClick(item.id)}>Detalhes do Produto</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemDetailConatiner;
