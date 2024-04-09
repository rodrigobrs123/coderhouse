import React from 'react';
import { useLocation } from 'react-router-dom';

const ItemDetail = () => {
  const { state } = useLocation();
  const selectedItem = state?.selectedItem;

  if (!selectedItem) {
    return <p>No item selected</p>;
  }

  const { id, name, price, details, image } = selectedItem;

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Price: ${price}</p>
        <p>Details: {details}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
