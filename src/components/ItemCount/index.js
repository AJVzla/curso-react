import React, {useState} from 'react';
import './ItemCount.sass';

import Button from 'react-bootstrap/Button'

const ItemCount = () => {
  const [count, setCount] = useState(0);


  return(
    <>
      <div className="count">
        
        <div className="inc">
          <div className="value-button" id="decrease" onClick={() => {setCount(count - 1); }} value="Decrease Value"><i class="fas fa-minus-circle"></i></div>
          <input type="text" id="number" value={count}/>
          <div className="value-button" id="increase" onClick={() => {setCount(count + 1); }} value="Increase Value"><i class="fas fa-plus-circle"></i></div>
        </div>
        <Button variant="light" className="add">Add Cart</Button>
      </div>
    </>


  );
}
export default ItemCount;