# React Flujo

## Notas

-El punto clave aqui es que si se afecta a algun hook este se renderiza nuevamente

-Hay que recordar que los hooks no se ven afectados por los re renderizados, el valor que se tuvo antes de causar el re renderizado es el que se tendra, a no ser que sea una variable normal, esta si en el re renderizado vuelve a su valor/estado base.

-Si hay varias funciones modificadoras dentro del evento que ocurrio estas no cambian instantaneamente el valor que le indicamos, lo que sucede es que almacena o junta todas las funciones modificadoras hasta el final y espera a que se termine de correr hasta la ultima linea de la funcion y ahora si se ejecutan y por ende el re renderizado. Nota: puedes imprimir con console.log y si es una variable que no es hook esta si cambia de valor pero si una funcion modificadora actua en ese componente o el componente padre este en el re renderizado regresa a su estado base esa variable, en caso si hacemos un console log a la variable DE NUESTRO HOOK por ejemplo tenemos [saludo, setSaludo]= useState(null) y estamos en nuestra funcion:
    const handleClick = () => {
        setSaludo(true);
        console.log(saludo) <----- NOS IMPRIME NULL, porque no es inmediato
    }

-Si se le pasa por props al hijo y el hijo de modifica(alguna funcion modificadora) ese props causa que se re renderize el padre junto con su hijo


-El useEffect a pesar de tener dependencias, siempre que se carga el componente este se ejecuta, ya despues solo cuando las dependencias cambien, tambien el useEffect se ejecuta hasta el final igual que las funciones modificadoras

-Si en algun evento llamamos a una funcion y dentro de esa funcion se ejecuta codigo y no existe alguna funcion modificadora entonces el COMPONENTE NO SE RENDERIZA, porque no hay necesidad, por ejemplo
        <button onClick={testing}>Click para testing de funcion</button>
    const testing = () => {
      console.log('testeando');
      numeroClick = 7;
      console.log(numeroClick);
    }
Aqui no se renderizaria nada