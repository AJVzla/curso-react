import React, {useState} from 'react';
import './ItemCount.sass';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button'


const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
  const addCount = () => {
    count < stock ? setCount(count+1) : swal("Sorry!", "We don't have stock", "error");
  }
  const lessCount = () => {
    count > initial ? setCount(count-1) : setCount(initial)
  }


  return(
    <>
      <div className="count">
        
        <div className="inc">
          <div className="value-button" id="decrease" onClick={lessCount} value="Decrease Value"><i class="fas fa-minus-circle"></i></div>
          <input type="text" id="number" value={count}/>
          <div className="value-button" id="increase" onClick={addCount} value="Increase Value"><i class="fas fa-plus-circle"></i></div>
        </div>
        <Button variant="light" className="add" onClick={() => onAdd(count)} >Add Cart</Button>
      </div>
    </>


  );
}
export default ItemCount;