import { useState } from "react";

const Tarjeta = ({nombre, color}) => {
    
    const [mostrarColor, setMostrarColor] = useState(true)
    const handleClick = () => {
        setMostrarColor(false)
    }

    return (
        <div>
            <h3>{nombre}</h3>
            {mostrarColor && <p>{color}</p>}
            <button onClick={handleClick}>Ocultar color</button>
        </div>
    );
    
    
    
    
    
    
    /* return (
        <div>
            <h2>{nombre}</h2>
            <p>{color}</p>
            <p>{edad}</p>
            {comeLasagna ? <p>Come Lasagna</p>
            : <p>No come Lasagna</p>
            }
            <p>{amigos}</p>
            <img src={img}/>
        </div>
    ); */
}

export default Tarjeta;