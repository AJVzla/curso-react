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
	id: '1',
	price: '100',
	title: data.data[32].displayName,
	pictureUrl: data.data[32].displayIcon,
	video: data.data[32].levels[3].streamedVideo,
	},
	{
	id: '2',
	price: '200',
	title: data.data[24].displayName,
	pictureUrl: data.data[24].displayIcon,
	video: data.data[24].levels[3].streamedVideo,
	},
	{
	id: '3',
	price: '300',
	title: data.data[26].displayName,
	pictureUrl: data.data[26].displayIcon,
	video: data.data[26].levels[3].streamedVideo,
	},
	{
	id: '4',
	price: '400',
	title: data.data[28].displayName,
	pictureUrl: data.data[28].displayIcon,
	video: data.data[28].levels[3].streamedVideo,
	},
	{
	id: '5',
	price: '500',
	title: data.data[39].displayName,
	pictureUrl: data.data[39].displayIcon,
	video: data.data[39].levels[3].streamedVideo,
	},
	{
	id: '6',
	price: '600',
	title: data.data[48].displayName,
	pictureUrl: data.data[48].displayIcon,
	video: data.data[48].levels[3].streamedVideo,
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