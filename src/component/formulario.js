import React, { useState } from 'react';
import {Error} from './error';
import { Listado } from './listasdegastos';

export const Formu=({total})=>{

    const [resto,setresto]=useState(total)
    const [lista,setlista]=useState([])
    const[NombreGasto,setnombregasto]=useState()
    const[Gasto,Setgasto]=useState()
    
    
        
const handelsub=(e)=>{
e.preventDefault();

if(resto>0){
setresto(resto-Gasto);
setlista([...lista,{
    Nombre:NombreGasto,
    Gasto:Gasto
}])
}
}

console.log(lista)
    return(
<>
{resto<0 ? <Error e='presupuesto menor'/> : null}
<div className="row">
<div className="one-half column">
        
        <form onSubmit={handelsub}>
            <div className="campo">
            <label>Nombre Gasto</label>
            <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                onChange={(e)=>{setnombregasto(
                    e.target.value.length>2 ? e.target.value : "gasto"
                )}}
            />
        </div>

        <div className="campo">
            <label>Cantidad Gasto</label>
            <input 
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
              
                onChange={(e)=>{Setgasto(
                   e.target.value == '' ? 0  : parseInt(e.target.value)
                     
                    ); 
                }
                    
                }
            />
        </div>

        <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
        />

    </form>
    </div>
    <div className="one-half column">
    <div className="alert alert-primary">
        Total: ${total}
    </div>
    <div className="alert alert-success">
        Resto: ${resto}
    </div>
    <div className="gastos-realizados">
<Listado lisa={lista} />

</div>
</div>
</div>
 </>

    )
}