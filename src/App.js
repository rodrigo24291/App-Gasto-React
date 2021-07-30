import React from 'react';
import { Formulario } from './component/gastos';


function App() {
  return (
<div className="container">
  <header>
<h1>Gasto semanal</h1>
<div className="contenido-principal contenido">
<Formulario/>
</div>
</header>
</div>  
  );
}

export default App;
