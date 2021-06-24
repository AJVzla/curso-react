import React, {useEffect, useState} from 'react';
import './Item.sass';
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';
import ItemCount from '../../components/ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';

const Item = ({id, title, price, pictureUrl, video}) => {
 	const onAdd = (amount) => {
 		swal("Great!",`You send ${amount} items to your cart`, "success");
 	}


	return(
		<>
			<NavLink  to={`/detail/${id}`}  className="box item" >
			      <h3>{title}  </h3>
				<img src={pictureUrl} className="imagen" alt="" />
				<h4>{price} $ </h4>
			     <ItemCount initial={1} stock={5} onAdd={onAdd} />
			</NavLink>
		</>
	);
}
export default Item;