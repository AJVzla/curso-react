import React, {useEffect, useState} from 'react';
import './itemListContainer.sass';
import swal from 'sweetalert';
import Spinner from 'react-bootstrap/Spinner'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
useEffect(() => {
setLoading(true);
fetch("https://valorant-api.com/v1/weapons/skins")
.then((res) => res.json())
.then((data) => {
	const userData = [
	{
	id: data.data[81].uuid,
	price: '100',
	title: data.data[81].displayName,
	pictureUrl: data.data[81].displayIcon,
	video: data.data[81].levels[3].streamedVideo,
	},
	{
	id: data.data[62].uuid,
	price: '100',
	title: data.data[62].displayName,
	pictureUrl: data.data[62].displayIcon,
	video: data.data[62].levels[3].streamedVideo,
	},
	{
	id: data.data[63].uuid,
	price: '100',
	title: data.data[63].displayName,
	pictureUrl: data.data[63].displayIcon,
	video: data.data[63].levels[3].streamedVideo,
	},
	{
	id: data.data[77].uuid,
	price: '100',
	title: data.data[77].displayName,
	pictureUrl: data.data[77].displayIcon,
	video: data.data[77].levels[3].streamedVideo,
	},
	{
	id: data.data[65].uuid,
	price: '100',
	title: data.data[65].displayName,
	pictureUrl: data.data[65].displayIcon,
	video: data.data[65].levels[3].streamedVideo,
	},
	{
	id: data.data[76].uuid,
	price: '100',
	title: data.data[76].displayName,
	pictureUrl: data.data[76].displayIcon,
	video: data.data[76].levels[3].streamedVideo,
	},

	];
   setUser(userData);
   console.log(data);
  })
  .catch((err) => {
    swal("Houston", "we have a problem in items component", "error");
  })
  .finally(() => {
    setLoading(false);
  });
  }, []);
return(
	<>
	<h3 className="title">Weapons Skins</h3>
	{loading ? (
	      <Spinner animation="grow"  variant="dark" role="status">
	        <span className="sr-only"></span>
	      </Spinner>
	      ) : null}
	<div className="container">
		< ItemList user={user} />
	</div>
	
	</>
);
}
export default ItemListContainer;