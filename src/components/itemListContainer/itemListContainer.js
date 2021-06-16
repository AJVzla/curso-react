import React, {useEffect, useState} from 'react';
import './itemListContainer.sass';
import Spinner from 'react-bootstrap/Spinner'
import swal from 'sweetalert';
import ItemList from '../../components/ItemList/ItemList';
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
	   setUser(userData);
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
		{loading ? (
			<Spinner animation="grow"  variant="dark" role="status">
			  <span className="sr-only"></span>
			</Spinner>
			) : null}
		<h3 className="title">Weapons Skins</h3>

		<div className="container">
		{user.map((element, i) => {
			return (
			< ItemList id={element.id}  title={element.title}  price={element.price} pictureUrl={element.pictureUrl} video={element.video}  />
			);
		})}
		</div>
		</>
	);
}
export default ItemListContainer;