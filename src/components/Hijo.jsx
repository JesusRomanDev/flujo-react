import { useEffect, useState } from 'react'
import Arreglo from './Arreglo';

const Hijo = ({saludo, setSaludo}) => {
    const arreglo = [{nombre:'edu'},{ nombre: 'jesus'}];
    let valor = 1;
    const [hijo, setHijo] = useState(false);
    const [hijo2, setHijo2] = useState(false);
    const [array, setArray] = useState(arreglo);
    const handleClick = () => {
        setHijo(true);
        valor = 2;
        console.log(valor);
        setSaludo(0);
        setHijo2(true);
    }
    console.log(valor);
    console.log(hijo);
    console.log(hijo2);
    //Se muestran 2
    useEffect(()=>{
        if(saludo !== null){
            setArray([''])
        }
        console.log('desde useEffect del hijo');
    }, [saludo])

    //Donde solo se muestra 1 elemento
    // useEffect(()=>{
    //     setArray(['nuevoarray'])
    //     console.log('desde useEffect del hijo');
    // }, [saludo])
    console.log(array);
  return (
    <>
        <div onClick={handleClick}>Hijo</div>
        {array.map((item, index) => (
            <Arreglo key={index} nombre={item.nombre ? item.nombre : item} setSaludo={setSaludo} />
        ))}
    
    </>
  )
}

export default Hijo