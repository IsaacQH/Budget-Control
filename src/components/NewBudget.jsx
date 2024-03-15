
//Componente para el nuevo presupuesto, pag inicial

import React, { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget, setIsValid}) => {

  const [message, setMessage] = useState('') //State para el mensaje
  const handleBudget = (event) => {
    event.preventDefault()    //Evita que se haga refresh cuando hay un sibmit en el form
    //console.log('Submiting budget...')

    if(!budget == null || budget <= 0){     //Si isNaN es falso, es un número
        setMessage("Not a valid data")
        return
    }  //No es un número
    
    setMessage('')
    setIsValid(true)    //Cambia a que el presupuesto fue válido
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleBudget} className='formulario'>
            <div className='campo'>
                <label>Define your budget </label>
                <input 
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='Add your finances'
                    value = {budget}
                    onChange={(e) => {setBudget(Number(e.target.value))}}
                />
                <input type="submit" value="Add" />

                {message && <Message tipo="error">{message}</Message> /*SI mensaje existe, crea ese div */}

            </div>
        </form>
    </div>
  )
}

export default NewBudget