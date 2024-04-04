import React from 'react';


const Item = ({ id, name, price, details, image }) => {

     
 
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

export default Item;
