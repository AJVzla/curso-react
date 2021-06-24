import React, {useEffect, useState} from 'react';
import './itemDetailContainer.sass';
import swal from 'sweetalert';
import Spinner from 'react-bootstrap/Spinner'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Item from '../../components/Item/Item';
const ItemDetailContainer = () => {
const [getItems, setgetItems] = useState(null);
const [loading, setLoading] = useState(false);
useEffect(() => {
setLoading(true);
fetch("https://valorant-api.com/v1/weapons/skins")
.then((res) => res.json())
.then((data) => {
	const getItemsData = [
	{
	id: data.data[62].uuid,
	price: '100',
	title: data.data[62].displayName,
	pictureUrl: data.data[62].displayIcon,
	video: data.data[62].levels[3].streamedVideo,
	},
	
	

	];
   setgetItems(getItemsData);
   console.log(data);
  })
  .catch((err) => {
    swal("Houston", "we have a problem in item component", "error");
  })
  .finally(() => {
    setLoading(false);
  });
  }, []);
return(
	<>
	{getItems ? (
		<>
	<div className="container">
		< ItemDetail getItems={getItems}  />
	</div>
	</>
	) : null}
	</>
);
}
export default ItemDetailContainer;