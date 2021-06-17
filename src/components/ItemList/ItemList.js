import React, {useEffect, useState} from 'react';
import './ItemList.sass';
import Spinner from 'react-bootstrap/Spinner'
import swal from 'sweetalert';
import Item from '../../components/Item/Item';
const ItemList = ({user}) => {

	return(
		<>
			{user ? (
				<>
					{user.map((element, i) => {
            			return (
    				<>
    				< Item id={element.id}  title={element.title}  price={element.price} pictureUrl={element.pictureUrl} video={element.video} />
				      </>
				      );
         			 })}
				</>
			) : null}
		</>
	);
}
export default ItemList;