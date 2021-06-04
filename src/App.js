import './App.css';
import Agentes from './components/Agentes/Agentes';
import Elastic from './components/Elastic/index';
import Navbar from './components/Navbar/index';
import Carousele from './components/Carousele/index';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
 
  return (
    <div className="App">
      < Elastic />
      < Navbar />
      <body className="App-body">
        < Carousele />
        < ItemListContainer />
        < Agentes />
      </body>
    </div>
  );
}

export default App;
