import React, { useState } from 'react';
import {Error} from './error';
import {Formu} from './formulario'
export const Formulario=()=>{
const [valor,setvalor]=useState(0)
const [error,seterror]=useState(false)
const [presupuesto,setpresupuesto]=useState(0)
const handelva=(e)=>{
e.preventDefault();
if(valor<1){
seterror(true)
}
else{ setpresupuesto(valor)}
}

return(
    <>
     {presupuesto <= 0 ? (<form onSubmit={handelva}>
        {error ? <Error e='Inserte un presupuesto valido'/> :null  }
  
  <h2>Coloca tu Presupuesto</h2>
     <input type="number" className="u-full-width"
    placeholder="Coloca tu presupuesto"
    onChange={e=>{setvalor(e.target.value)}}/>
    
    <input 
    type="submit"
    className="button-primary u-full-width"
    value="Definir Presupuesto"
/>
</form> ) : <Formu total={presupuesto} />

}

   
    </>
)
}