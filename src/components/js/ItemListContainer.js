import React from 'react';
import { Container } from 'react-bootstrap';
import ItemCount from "./ItemCount";

function ItemListenerContainer(props){
    return (
      <Container>
        <div >
          <ItemCount></ItemCount>
          {props.greeting}
        </div>
      </Container>
    );
  };

export default ItemListenerContainer;