import React, {useEffect, useState} from 'react';
import './ItemDetail.sass';
import Spinner from 'react-bootstrap/Spinner'
import swal from 'sweetalert';
import ItemCount from '../../components/ItemCount/ItemCount';
import Modal from '../../components/Modal/Modal';
const ItemDetail = ({getItems}) => {
	const onAdd = (amount) => {
 		swal("Great!",`You send ${amount} items to your cart`, "success");
 	}
	return(
		<>
		{getItems ? (
		<>
			<div className="detail" >
			      <h3>{getItems.[0].title}  <Modal video={getItems.[0].video} title={getItems.[0].title} /> </h3>
				<img src={getItems.[0].pictureUrl} className="imagen" alt="" />
				<h4>{getItems.[0].price} $ </h4>
			     <ItemCount initial={1} stock={5} onAdd={onAdd} />
			</div>
		</>
		) : null}
		</>
);
}
export default ItemDetail;