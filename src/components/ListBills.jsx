
//Componente para el listado de gastos

import { Bill } from "./Bill"

export const ListBills = ({gastos, setGastoEdit, deleteGasto}) => {
  return (
    <div className=" listado-gastos contenedor">
        <h2>{(gastos.length > 0) ? "Bills" : "There are no bills yet"}</h2>

        {gastos.map( (gasto) => (
            <Bill   //Pasamos el objeto gasto del arreglo gastos a Bill junto al key
                key = {gasto.id}  
                gasto = {gasto}
                setGastoEdit = {setGastoEdit}
                deleteGasto = {deleteGasto}
            />
        ))}
    </div>
  )
}
