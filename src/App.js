import './App.css';
import Agentes from './components/Agentes/Agentes';
import Elastic from './components/Elastic/Elastic';
import Navbar from './components/Navbar/Navbar';
import Carousele from './components/Carousele/Carousele';
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
