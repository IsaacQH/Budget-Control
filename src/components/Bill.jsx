
//Componente que se encarga de tener el bill completo

export const Bill = ({gasto}) => {

    const {name, amount, category, date} = gasto   //Destructuración de objeto

    const format = (value) => {        //Convierte el formato de el dinero en $x,xxx.xx
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency:'USD'
        })}

  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <p className="categoria">{category}</p>
                <p className="nombre-gasto">{name}</p>
                <p className="fecha-gasto">
                    Created on {''}
                    <span>{date}</span>
                </p>
            </div>
            <p className="cantidad-gasto">{format(amount)}</p>
        </div>
    </div>
  )
}
