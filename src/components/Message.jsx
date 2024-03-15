
//Componente para el mensaje , es reutilizable

const Message = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}> {/* Detecta el tipo, le da las clases corresopndientes y coloca el valor del hijo (message)*/}
        {children}
    </div>
  )
}

export default Message