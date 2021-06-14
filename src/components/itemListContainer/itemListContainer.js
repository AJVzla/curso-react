import React from 'react';
import './itemListContainer.sass';
import ItemList from '../../components/ItemList/ItemList';
const ItemListContainer = () => {
	
	return(
		<>
		<h3 className="title">Weapons Skins</h3>
		<div className="container">
			< ItemList />
		</div>
		</>
	);
}
export default ItemListContainer;