import React from 'react';
import valorant from '../../valorant-header.svg';
import Cartwidget from '../../components/CartWidget/index';
import './Navbar.sass';


const Navbar = () => (
  <React.Fragment>
  <header className="cabecera">
  		<div className="cont-1300">
  		<a href=""><img src={valorant} className="logo" alt="Valorant Gamers" /></a>
  			<ul>
  				<li>
  					<a href="#">Agents</a>
  				</li>	
  				<li>
  					<a href="#">Weapons Skins</a>
  				</li>	
  				<li>
            < Cartwidget />
  				</li>	
          <li>
             <a
            className="App-link bottom-home"
            href="https://playvalorant.com/es-mx/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="bot">PLAY </span>
          </a>
          </li>
  			</ul>	
  		</div>	
  </header>

 
  </React.Fragment>
);

export default Navbar;
