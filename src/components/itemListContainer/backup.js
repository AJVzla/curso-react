import React, {useEffect, useState} from 'react';
import './itemListContainer.sass';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';
import ItemCount from '../../components/ItemCount/ItemCount';
import Item from '../../components/Item/Item';
import Spinner from 'react-bootstrap/Spinner'
const ItemListContainer = () => {
	const [user, setUser] = useState(null);
 	const [lgShow1, setLgShow1] = useState(false);
 	const [lgShow2, setLgShow2] = useState(false);
 	const [lgShow3, setLgShow3] = useState(false);
 	const [lgShow4, setLgShow4] = useState(false);
 	const [lgShow5, setLgShow5] = useState(false);
 	const [lgShow6, setLgShow6] = useState(false);
 	const [lgShow7, setLgShow7] = useState(false);
 	const onAdd = (amount) => {
 		swal("Great!",`You send ${amount} items to your cart`, "success");
 	}
 	const [loading, setloading] = useState(true);
 	useEffect(() => {
	fetch("https://valorant-api.com/v1/weapons/skins")
	.then((res) => res.json())
	.then((data) => {
		const userData = {
			

		wep1: data.data[24].displayName,
		wepy1: data.data[24].displayIcon,
		wepyv1: data.data[24].levels[3].streamedVideo,

		wep2: data.data[59].displayName,
		wepy2: data.data[59].displayIcon,
		wepyv2: data.data[59].levels[3].streamedVideo,

		wep3: data.data[80].displayName,
		wepy3: data.data[80].displayIcon,
		wepyv3: data.data[80].levels[3].streamedVideo,

		wep4: data.data[111].displayName,
		wepy4: data.data[111].displayIcon,
		wepyv4: data.data[111].levels[3].streamedVideo,

		wep5: data.data[124].displayName,
		wepy5: data.data[124].displayIcon,
		wepyv5: data.data[124].levels[3].streamedVideo,

		wep6: data.data[191].displayName,
		wepy6: data.data[191].displayIcon,
		wepyv6: data.data[191].levels[3].streamedVideo,


		wep8: data.data[270].displayName,
		wepy8: data.data[270].displayIcon,

		wep9: data.data[48].displayName,
		wepy9: data.data[48].displayIcon,
		wepyv9: data.data[48].levels[3].streamedVideo,
		
		};
		setUser(userData);
		setloading(false);
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
			{user ?(
				<div className="box item" >
				      < Item />
				     <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			{user ?(
				<div className="box item" >
					<h3>{user.wep1} <Button variant="light" onClick={() => setLgShow1(true)}>Demo</Button> </h3>
					<img src={user.wepy1} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow1}
				        onHide={() => setLgShow1(false)}
				        aria-labelledby="example-modal-sizes-title-lg" >
				        <Modal.Header closeButton><h5>{user.wep1}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv1} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				     <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			{user ?(
				<div className="box item" >
					<h3>{user.wep2} <Button variant="light" onClick={() => setLgShow2(true)}>Demo</Button></h3>
					<img src={user.wepy2} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow2}
				        onHide={() => setLgShow2(false)}
				        aria-labelledby="example-modal-sizes-title-lg" >
				        <Modal.Header closeButton> <h5>{user.wep2}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv2} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				      <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			{user ?(
				<div className="box item" >
					<h3>{user.wep3} <Button variant="light" onClick={() => setLgShow3(true)}>Demo</Button></h3>
					<img src={user.wepy3} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow3}
				        onHide={() => setLgShow3(false)}
				        aria-labelledby="example-modal-sizes-title-lg" >
				        <Modal.Header closeButton> <h5>{user.wep3}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv3} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				      <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			{user ?(
				<div className="box item" >
					<h3>{user.wep9} <Button variant="light" onClick={() => setLgShow4(true)}>Demo</Button></h3>
					<img src={user.wepy9} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow4}
				        onHide={() => setLgShow4(false)}
				        aria-labelledby="example-modal-sizes-title-lg">
				        <Modal.Header closeButton><h5>{user.wep9}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv9} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				      <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			{user ?(
				<div className="box item" >
					<h3>{user.wep6} <Button variant="light" onClick={() => setLgShow5(true)}>Demo</Button></h3>
					<img src={user.wepy6} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow5}
				        onHide={() => setLgShow5(false)}
				        aria-labelledby="example-modal-sizes-title-lg">
				        <Modal.Header closeButton><h5>{user.wep6}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv6} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				      <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			{user ?(
				<div className="box item" >
					<h3>{user.wep4} <Button variant="light" onClick={() => setLgShow6(true)}>Demo</Button></h3>
					<img src={user.wepy4} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow6}
				        onHide={() => setLgShow6(false)}
				        aria-labelledby="example-modal-sizes-title-lg">
				        <Modal.Header closeButton><h5>{user.wep4}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv4} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				      <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}

			{user ?(
				<div className="box item" >
					<h3>{user.wep5} <Button variant="light" onClick={() => setLgShow7(true)}>Demo</Button></h3>
					<img src={user.wepy5} 
					className="imagen"
					alt="" />
				      <Modal
				        size="lg"
				        show={lgShow7}
				        onHide={() => setLgShow7(false)}
				        aria-labelledby="example-modal-sizes-title-lg">
				        <Modal.Header closeButton><h5>{user.wep5}</h5></Modal.Header>
				        <Modal.Body>
							<iframe className="video" width="100%" height="400" src={user.wepyv5} 
							title="Video Player" frameBorder="0"
							 allow="accelerometer; autoplay;" ></iframe>
				        </Modal.Body>
				      </Modal>
				      <ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}

			{user ?(
				<div className="box item" >
					<h3>{user.wep8} </h3>
					<img src={user.wepy8} 
					className="imagen"
					alt="" />
					<ItemCount initial={1} stock={5} onAdd={onAdd} />
				</div>
			) : null}
			
		</div>
		</>
	);
}
export default ItemListContainer;