import React from 'react';
import valorant from '../../valorant-header.svg';
import Cartwidget from '../../components/CartWidget/CartWidget';
import './Navbar.sass';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
  <header className="cabecera">
  		<div className="cont-1300">
  		<NavLink  to={'/'}><img src={valorant} className="logo" alt="Valorant Gamers" /></NavLink>
  			<div className="lista">
           <NavLink activeClassName="selected" to={'/Agentes'}>
            Agents
          </NavLink>
          <NavLink activeClassName="selected" exact to={'/'}>
             Weapons Skins
          </NavLink>
  				<NavLink activeClassName="selected" to={'/detail/1'}>
             < Cartwidget />
          </NavLink>
  				<NavLink activeClassName="selected" to={'/detail/1'}>
             <a
            className="App-link bottom-home"
            href="https://playvalorant.com/es-mx/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="bot">PLAY </span>
          </a>
          </NavLink>
         
  			</div>	
  		</div>	
  </header>

 
  </React.Fragment>
);

export default Navbar;
