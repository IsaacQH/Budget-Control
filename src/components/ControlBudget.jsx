
//Componente para el control del budget, muestra el presupuesto

import { useState, useEffect } from "react"

const ControlBudget = ({budget, gastos}) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        let totalSpent = 0
        gastos.map( (gasto) => {totalSpent += gasto.amount})  //Itera en el arreglo de gastos y suma en totalSpent los amounts
        let totalAvailable = budget-totalSpent

        setSpent(totalSpent)   //setea el total
        setAvailable(totalAvailable) //setea el budget-total

    },[gastos])

    const format = (value) => {   //Convierte el formato de el dinero en $x,xxx.xx
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency:'USD'
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Graph Here</p>
            </div>

            <div className="contenido-presupuesto">dwd
                <p> <span>Budget: </span> {format(budget)} </p>

                <p> <span>Available: </span> {format(available)} </p>
                
                <p> <span>Spent: </span> {format(spent)} </p>

            </div>
        </div>
    )
    }
export default ControlBudget