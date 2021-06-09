import React, {useEffect, useState} from 'react';
import './Agentes.sass';

const Agentes = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
	fetch("https://valorant-api.com/v1/agents")
	.then((res) => res.json())
	.then((data) => {
		const userData = {
			
		breach: data.data[0].displayName,
		breach1: data.data[0].description,
		breach2: data.data[0].fullPortrait,
		breachrole: data.data[0].role.displayIcon,
		habilidades: data.data[0].abilities[0].displayIcon,
		habilidades1: data.data[0].abilities[1].displayIcon,
		habilidades2: data.data[0].abilities[2].displayIcon,
		habilidades3: data.data[0].abilities[3].displayIcon,
	
		raze: data.data[1].displayName,
		raze1: data.data[1].description,
		raze2: data.data[1].fullPortrait,
		razerole: data.data[1].role.displayIcon,
		habilidadesraze: data.data[1].abilities[0].displayIcon,
		habilidadesraze1: data.data[1].abilities[1].displayIcon,
		habilidadesraze2: data.data[1].abilities[2].displayIcon,
		habilidadesraze3: data.data[1].abilities[3].displayIcon,

		skye: data.data[2].displayName,
		skye1: data.data[2].description,
		skye2: data.data[2].fullPortrait,
		skyerole: data.data[2].role.displayIcon,
		habilidadesskye: data.data[2].abilities[0].displayIcon,
		habilidadesskye1: data.data[2].abilities[1].displayIcon,
		habilidadesskye2: data.data[2].abilities[2].displayIcon,
		habilidadesskye3: data.data[2].abilities[3].displayIcon,

		cypher: data.data[3].displayName,
		cypher1: data.data[3].description,
		cypher2: data.data[3].fullPortrait,
		cypherrole: data.data[3].role.displayIcon,
		habilidadescypher: data.data[3].abilities[0].displayIcon,
		habilidadescypher1: data.data[3].abilities[1].displayIcon,
		habilidadescypher2: data.data[3].abilities[2].displayIcon,
		habilidadescypher3: data.data[3].abilities[3].displayIcon,

		sova: data.data[5].displayName,
		sova1: data.data[5].description,
		sova2: data.data[5].fullPortrait,
		sovarole: data.data[5].role.displayIcon,
		habilidadessova: data.data[5].abilities[0].displayIcon,
		habilidadessova1: data.data[5].abilities[1].displayIcon,
		habilidadessova2: data.data[5].abilities[2].displayIcon,
		habilidadessova3: data.data[5].abilities[3].displayIcon,

		killjoy: data.data[6].displayName,
		killjoy1: data.data[6].description,
		killjoy2: data.data[6].fullPortrait,
		killjoyrole: data.data[6].role.displayIcon,
		habilidadeskilljoy: data.data[6].abilities[0].displayIcon,
		habilidadeskilljoy1: data.data[6].abilities[1].displayIcon,
		habilidadeskilljoy2: data.data[6].abilities[2].displayIcon,
		habilidadeskilljoy3: data.data[6].abilities[3].displayIcon,

		};

		setUser(userData);
		
	});
	}, []);
	return(
		<>
		<h3 className="title">Agents</h3>
		<div className="container">
			
			{user ?(
				<div className="box" >
					<h3>{user.breach} <img src={user.breachrole} alt="" /></h3>
					<p>{user.breach1}</p>
					<img src={user.breach2} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={user.habilidades} 
						alt="" />
						<img src={user.habilidades1} 
						alt="" />
						<img src={user.habilidades2} 
						alt="" />
						<img src={user.habilidades3} 
						alt="" />
					</div>
				</div>
				
			) : null}
			{user ?(
				<div className="box" >
					<h3>{user.raze} <img src={user.razerole} alt="" /></h3>
					<p>{user.raze1}</p>
					<img src={user.raze2} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={user.habilidadesraze} 
						alt="" />
						<img src={user.habilidadesraze1} 
						alt="Es"  />
						<img src={user.habilidadesraze2} 
						alt="" />
						<img src={user.habilidadesraze3} 
						alt="" />
					</div>
				</div>
				
			) : null}
			{user ?(
				<div className="box" >
					<h3>{user.skye} <img src={user.skyerole} alt="" /> </h3>
					<p>{user.skye1}</p>
					<img src={user.skye2} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={user.habilidadesskye} 
						alt="" />
						<img src={user.habilidadesskye1} 
						alt="Es"  />
						<img src={user.habilidadesskye2} 
						alt="" />
						<img src={user.habilidadesskye3} 
						alt="" />
					</div>
				</div>
			) : null}
			{user ?(
				<div className="box" >
					<h3>{user.cypher} <img src={user.cypherrole} alt="" /></h3>
					<p>{user.cypher1}</p>
					<img src={user.cypher2} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={user.habilidadescypher} 
						alt="" />
						<img src={user.habilidadescypher1} 
						alt="Es"  />
						<img src={user.habilidadescypher2} 
						alt="" />
						<img src={user.habilidadescypher3} 
						alt="" />
					</div>
				</div>
			) : null}
			{user ?(
				<div className="box" >
					<h3>{user.sova} <img src={user.sovarole} alt="" /></h3>
					<p>{user.sova1}</p>
					<img src={user.sova2} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={user.habilidadessova} 
						alt="" />
						<img src={user.habilidadessova1} 
						alt="Es"  />
						<img src={user.habilidadessova2} 
						alt="" />
						<img src={user.habilidadessova3} 
						alt="" />
					</div>
				</div>
			) : null}
			{user ?(
				<div className="box" >
					<h3>{user.killjoy} <img src={user.killjoyrole} alt="" /></h3>
					<p>{user.killjoy1}</p>
					<img src={user.killjoy2} 
					className="imagen"
					alt="" />
					<div className="habilidades">
						<img src={user.habilidadeskilljoy} 
						alt="" />
						<img src={user.habilidadeskilljoy1} 
						alt="Es"  />
						<img src={user.habilidadeskilljoy2} 
						alt="" />
						<img src={user.habilidadeskilljoy3} 
						alt="" />
					</div>
				</div>
			) : null}
		</div>
		</>
	);
}
export default Agentes;