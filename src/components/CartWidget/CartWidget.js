import React from 'react';

import './CartWidget.sass';


const Cartwidget = () => (
  <React.Fragment>
  	<div className="cart">
		<button>
	  		<i class="fas fa-shopping-cart"></i>
	  		<span>2</span>
	  	</button>
  	</div>
  </React.Fragment>
);

export default Cartwidget;
