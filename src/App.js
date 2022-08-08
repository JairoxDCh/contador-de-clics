import './App.css';
import freeCodeCampoLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampoLogo}
          alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
      <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={}/>
      <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={}/>
      </div>
    </div>
  );
}

export default App;
