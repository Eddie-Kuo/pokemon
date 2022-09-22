import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Compendium from './components/Compendium/Compendium';
import { usePokemon } from './hooks/UsePokemon';

function App() {
  const { loading } = usePokemon();
  return (
    <>
      { loading ? <div className='load-container'><span className="loader"> </span></div> :
        <div className="App">
          <Header/>
          <Compendium/>
          <Footer/>
        </div>
      }
    </>
  );
}

export default App;
