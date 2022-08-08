import './App.css';
import freeCodeCampoLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampoLogo}
          alt='Logo de freecodecamp'/>
      </div>
    </div>
  );
}

export default App;
