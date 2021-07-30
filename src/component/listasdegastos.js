export const Listado=({lisa})=>{


    return(
    <>
    {lisa.map((li)=>{

       return (<>
       <li className="gastos"><p> {li.Nombre} <span className="gasto">{li.Gasto}</span></p></li></>
       )
    })}
    </>
    )}
