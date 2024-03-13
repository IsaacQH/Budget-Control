
const ControlBudget = ({budget}) => {

    const format = (value) => {
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

            <div className="contenido-presupuesto">
                <p> <span>Budget: </span> {format(budget)} </p>

                <p> <span>Available: </span> {format(0)} </p>
                
                <p> <span>Spent: </span> {format(0)} </p>

            </div>
        </div>
    )
    }
export default ControlBudget