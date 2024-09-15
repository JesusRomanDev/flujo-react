import { useState } from "react";

const Arreglo = ({nombre, setSaludo, item}) => {
    const [variableChida, setVariableChida] = useState('desde arreglo');
    console.log('se renderiza desde arreglo');
    console.log(variableChida);
  return (
    <>
        <p onClick={() => setVariableChida(nombre)}>{nombre ? nombre : item}</p>
        <p onClick={() => setSaludo(1)}>{'Click para editar setSaludo'}</p>
    </>
  )
}

export default Arreglo