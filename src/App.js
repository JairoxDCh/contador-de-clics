import './App.css';
import freeCodeCampoLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador';
function App() {
  
  const manejarClic = () => { 
    console.log('Clic');
  }
  const reiniciarContador = () => { 
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampoLogo}
          alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics='10'/>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
