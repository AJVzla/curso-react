import './App.css';
import Agentes from './components/Agentes/Agentes';
import Elastic from './components/Elastic/Elastic';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carousele from './components/Carousele/Carousele';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <div className="App">
            < Elastic />
            < Navbar />
            <body className="App-body">
              < Carousele />
              < ItemListContainer />
            </body>
          </div>
        </Route>
        <Route exact path="/detail/:id">
           <div className="App">
            < Elastic />
            < Navbar />
            <body className="App-body">
            < ItemDetailContainer  />
            </body>
          </div>
        </Route>
        <Route exact path="/Agentes">
          < Elastic />
          < Navbar />
          < Agentes />
        </Route>
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
