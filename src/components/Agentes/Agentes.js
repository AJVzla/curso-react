import React, {useEffect, useState} from 'react';
import './Agentes.sass';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';
const Agentes = () => {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
	setLoading(true);
	fetch("https://valorant-api.com/v1/agents")
	.then((res) => res.json())
	.then((data) => {
		const userData = [
		{	
		name: data.data[0].displayName,
		description: data.data[0].description,
		foto: data.data[0].fullPortrait,
		role: data.data[0].role.displayIcon,
		habilidades: data.data[0].abilities[0].displayIcon,
		habilidades1: data.data[0].abilities[1].displayIcon,
		habilidades2: data.data[0].abilities[2].displayIcon,
		habilidades3: data.data[0].abilities[3].displayIcon,
		},
		{	
		name: data.data[1].displayName,
		description: data.data[1].description,
		foto: data.data[1].fullPortrait,
		role: data.data[1].role.displayIcon,
		habilidades: data.data[1].abilities[0].displayIcon,
		habilidades1: data.data[1].abilities[1].displayIcon,
		habilidades2: data.data[1].abilities[2].displayIcon,
		habilidades3: data.data[1].abilities[3].displayIcon,
		},
		{
		name: data.data[2].displayName,
		description: data.data[2].description,
		foto: data.data[2].fullPortrait,
		role: data.data[2].role.displayIcon,
		habilidades: data.data[2].abilities[0].displayIcon,
		habilidades1: data.data[2].abilities[1].displayIcon,
		habilidades2: data.data[2].abilities[2].displayIcon,
		habilidades3: data.data[2].abilities[3].displayIcon,
		},

		{
		name: data.data[3].displayName,
		description: data.data[3].description,
		foto: data.data[3].fullPortrait,
		role: data.data[3].role.displayIcon,
		habilidades: data.data[3].abilities[0].displayIcon,
		habilidades1: data.data[3].abilities[1].displayIcon,
		habilidades2: data.data[3].abilities[2].displayIcon,
		habilidades3: data.data[3].abilities[3].displayIcon,
		},

		{
		name: data.data[6].displayName,
		description: data.data[6].description,
		foto: data.data[6].fullPortrait,
		role: data.data[6].role.displayIcon,
		habilidades: data.data[6].abilities[0].displayIcon,
		habilidades1: data.data[6].abilities[1].displayIcon,
		habilidades2: data.data[6].abilities[2].displayIcon,
		habilidades3: data.data[6].abilities[3].displayIcon,
		},

		{
		name: data.data[16].displayName,
		description: data.data[16].description,
		foto: data.data[16].fullPortrait,
		role: data.data[16].role.displayIcon,
		habilidades: data.data[16].abilities[0].displayIcon,
		habilidades1: data.data[16].abilities[1].displayIcon,
		habilidades2: data.data[16].abilities[2].displayIcon,
		habilidades3: data.data[16].abilities[3].displayIcon,
		},

		{
		name: data.data[7].displayName,
		description: data.data[7].description,
		foto: data.data[7].fullPortrait,
		role: data.data[7].role.displayIcon,
		habilidades: data.data[7].abilities[0].displayIcon,
		habilidades1: data.data[7].abilities[1].displayIcon,
		habilidades2: data.data[7].abilities[2].displayIcon,
		habilidades3: data.data[7].abilities[3].displayIcon,
		},

		{
		name: data.data[8].displayName,
		description: data.data[8].description,
		foto: data.data[8].fullPortrait,
		role: data.data[8].role.displayIcon,
		habilidades: data.data[8].abilities[0].displayIcon,
		habilidades1: data.data[8].abilities[1].displayIcon,
		habilidades2: data.data[8].abilities[2].displayIcon,
		habilidades3: data.data[8].abilities[3].displayIcon,
		},

		{
		name: data.data[9].displayName,
		description: data.data[9].description,
		foto: data.data[9].fullPortrait,
		role: data.data[9].role.displayIcon,
		habilidades: data.data[9].abilities[0].displayIcon,
		habilidades1: data.data[9].abilities[1].displayIcon,
		habilidades2: data.data[9].abilities[2].displayIcon,
		habilidades3: data.data[9].abilities[3].displayIcon,
		},

		{
		name: data.data[10].displayName,
		description: data.data[10].description,
		foto: data.data[10].fullPortrait,
		role: data.data[10].role.displayIcon,
		habilidades: data.data[10].abilities[0].displayIcon,
		habilidades1: data.data[10].abilities[1].displayIcon,
		habilidades2: data.data[10].abilities[2].displayIcon,
		habilidades3: data.data[10].abilities[3].displayIcon,
		},

		{
		name: data.data[11].displayName,
		description: data.data[11].description,
		foto: data.data[11].fullPortrait,
		role: data.data[11].role.displayIcon,
		habilidades: data.data[11].abilities[0].displayIcon,
		habilidades1: data.data[11].abilities[1].displayIcon,
		habilidades2: data.data[11].abilities[2].displayIcon,
		habilidades3: data.data[11].abilities[3].displayIcon,
		},

		{
		name: data.data[12].displayName,
		description: data.data[12].description,
		foto: data.data[12].fullPortrait,
		role: data.data[12].role.displayIcon,
		habilidades: data.data[12].abilities[0].displayIcon,
		habilidades1: data.data[12].abilities[1].displayIcon,
		habilidades2: data.data[12].abilities[2].displayIcon,
		habilidades3: data.data[12].abilities[3].displayIcon,
		},

		{
		name: data.data[13].displayName,
		description: data.data[13].description,
		foto: data.data[13].fullPortrait,
		role: data.data[13].role.displayIcon,
		habilidades: data.data[13].abilities[0].displayIcon,
		habilidades1: data.data[13].abilities[1].displayIcon,
		habilidades2: data.data[13].abilities[2].displayIcon,
		habilidades3: data.data[13].abilities[3].displayIcon,
		},

		{
		name: data.data[14].displayName,
		description: data.data[14].description,
		foto: data.data[14].fullPortrait,
		role: data.data[14].role.displayIcon,
		habilidades: data.data[14].abilities[0].displayIcon,
		habilidades1: data.data[14].abilities[1].displayIcon,
		habilidades2: data.data[14].abilities[2].displayIcon,
		habilidades3: data.data[14].abilities[3].displayIcon,
		},

		{
		name: data.data[15].displayName,
		description: data.data[15].description,
		foto: data.data[15].fullPortrait,
		role: data.data[15].role.displayIcon,
		habilidades: data.data[15].abilities[0].displayIcon,
		habilidades1: data.data[15].abilities[1].displayIcon,
		habilidades2: data.data[15].abilities[2].displayIcon,
		habilidades3: data.data[15].abilities[3].displayIcon,
		},

		];
		setUser(userData);
		console.log(data);
	  	})
	  .catch((err) => {
	    swal("Houston", "we have a problem in agentes component", "error");
	  })
	  .finally(() => {
	    setLoading(false);
	  });
	}, []);
	return(
		<>

		<h3 className="title">Agents</h3>
		{loading ? (
	      <Spinner animation="grow"  variant="dark" role="status">
	        <span className="sr-only"></span>
	      </Spinner>
	      ) : null}
		<div className="container">
			{user.map((element, i) => {
		        return (
		         <div className="box" >
					<h3>{element.name} <img src={element.role} alt="" /></h3>
					<p>{element.description}</p>
					<img src={element.foto} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={element.habilidades} 
						alt="" />
						<img src={element.habilidades1} 
						alt="" />
						<img src={element.habilidades2} 
						alt="" />
						<img src={element.habilidades3} 
						alt="" />
					</div>
				</div>	
		        );
		      })}
		</div>
		</>
	);
}
export default Agentes;