import { useState } from 'react'

import './App.css'
import Hijo from './components/Hijo'

function App() {
  const [saludo, setSaludo] = useState(null);
  console.log('Se renderiza el padre');
  console.log(saludo);
  return (
    <>
      <h1>Flujo React</h1>
      <Hijo saludo={saludo} setSaludo={setSaludo} />
    </>
  )
}

export default App
