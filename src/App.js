import { useState } from 'react';
import './App.css';
import Tarjeta from './components/Tarjeta';

const App = () => {
  const gatitos = [
    {
      nombre: "Michifuz", 
      color: "negro",
      id: 1
    },
    {
      nombre: "Cocó", 
      color: "blanco",
      id: 2
    },
    {
      nombre: "Garfield",
      color: "naranja",
      id: 3
    },
  ]

  const [mostrarGatitos, setMostrarGatitos] = useState(true)

  const handleClick = () => {
    setMostrarGatitos(false)
  }

  return (
    <div>
      <h2>HOLA</h2>
      {mostrarGatitos && gatitos.map(gatito => 
        
        <Tarjeta 
        nombre={gatito.nombre}
        color={gatito.color}
        key={gatito.id}
        />
      
      )}
      <button onClick={handleClick}>Ocultar gatitos</button>
    </div>
  );







  /* const gato = {
    nombre: "Garfield",
    color: "naranja", 
    edad: 12, 
    comeLasagna: false,
    amigos: ["Odie", "Jon"],
    img: "https://media.historiahoy.com.ar/adjuntos/231/imagenes/000/033/0000033260.jpg"
  }

  return (
    <div>
      <Tarjeta 
      nombre={gato.nombre}
      color={gato.color}
      edad={gato.edad}
      comeLasagna={gato.comeLasagna}
      amigos={gato.amigos}
      img={gato.img}/>
    </div>
  ); */

  /* const titulo = "Practica React"
  const tituloTarj = "Titulo de Tarjeta"

  const [mostrarTituloApp, setMostrarTituloApp] = useState(true)

  const handleClick = () => {
    console.log("hiciste click")
    setMostrarTituloApp(false)
  }

  return (
    <div>
      {mostrarTituloApp && <h1>{titulo}</h1>}
      <Tarjeta 
      tituloTarj={tituloTarj}
      />
      <button onClick={handleClick}>Ocultar titulo</button>
    </div>
  ); */
}

export default App;
