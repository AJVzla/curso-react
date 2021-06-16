import React, {useEffect, useState} from 'react';
import './ItemList.sass';
import Spinner from 'react-bootstrap/Spinner'
import swal from 'sweetalert';
import Item from '../../components/Item/Item';
const ItemList = ({id, title, price, pictureUrl, video}) => {
	return(
		<>			
		< Item id={id}  title={title}  price={price} pictureUrl={pictureUrl} video={video} />		
		</>
	);
}
export default ItemList;