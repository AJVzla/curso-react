import React, {useEffect, useState} from 'react';
import './ItemList.sass';
import Spinner from 'react-bootstrap/Spinner'
import swal from 'sweetalert';
import Item from '../../components/Item/Item';
const ItemList = () => {
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
		title: data.data[0].displayName,
		pictureUrl: data.data[0].displayIcon,
		video: data.data[0].levels[3].streamedVideo,
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
		title: data.data[25].displayName,
		pictureUrl: data.data[25].displayIcon,
		video: data.data[25].levels[3].streamedVideo,
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
			{user ?(
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