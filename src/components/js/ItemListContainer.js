import React from 'react';
import { Container } from 'react-bootstrap';


function ItemListenerContainer(props){
    return (
      <Container>
        <div >
          {props.greeting}
        </div>
      </Container>
    );
  };

export default ItemListenerContainer;