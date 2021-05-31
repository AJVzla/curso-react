import React from 'react';

import './styles.css';
import { elastic as Menu } from 'react-burger-menu'

class Elastic extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
       <ul>
			<li>
				<a href="#">Agents</a>
			</li>	
			<li>
				<a href="#">Weapons Skins</a>
			</li>	
			<li>
				<a href="#">Support</a>
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
      </Menu>
    );
  }
}



export default Elastic;
