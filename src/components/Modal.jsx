
//Componente para el Modal (el Ñdidor de gastos)

import { useEffect, useState } from "react"
import CloseMod from "../img/cerrar.svg" //imagen de curz para cerrar
import Message from "./Message"


const Modal = ({setModal, modalAnimation, setModalAnimation, saveBill, gastoEdit}) => {

    const [name, setName] = useState('')  //State para el nombre en el form
    const [amount, setAmount] = useState('')  //State para cantidad en el form
    const [category, setCategory] = useState('')  //State para category en el form
    const [message, setMessage] = useState('')  //State para mostar el mensaje

    useEffect(() => { 
        if(Object.keys(gastoEdit).length > 0){ //una vez que detecta que se hace llamado de la funcón, solo si existe un gastoEdit ID coloca los valores existendes del edit
            setName(gastoEdit.name)
            setAmount(gastoEdit.amount)
            setCategory(gastoEdit.category)
          }
    }, [])  //Cargará siempre que el componente modal es iniciado

    const hideModal = () => {
        //console.log("HIDDING MODAL")
        setModalAnimation(false)
        
        setTimeout(() => {
            setModal(false)
            
        }, 500)    //Después de medio segundo activa la animación
    }

    const handleSubmit = (e) => {     //Revisa que se haga el submit
        e.preventDefault()
        //console.log("ADDING THE BILL")
        if([name, amount, category].includes('') === true){ //Revisa si esta vacío
            setMessage("All fields are required")
            return     //Así corta el condicional y no ponemos un else
        } 

        saveBill({name, amount, category})  //Crea el objeto para pasar a App.jsx

        setModalAnimation(false)    //Cierra el objeto
                
        setTimeout(() => {
            setModal(false)
            
        }, 500)    //Después de medio segundo activa la animación
    }


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src = {CloseMod}
                alt= "Closing Bill"
                onClick={hideModal}
            />    
        </div> {/*Este es la cruz para cerrar la ventana*/}

        <form 
            className = {`formulario ${modalAnimation ? "animar" : "cerrar"}`}
            onSubmit={handleSubmit}
            >
            <legend>{gastoEdit.name ? "Edit Bill" : "New Bill"}</legend>

            {message && <Message tipo="error">{message}</Message> /*SI mensaje existe, crea ese div */}


            {/**CAMPO DE NOMBRE */}
            <div className="campo">
                <label htmlFor = "name">Bill's name</label>
                <input 
                    id = "name"
                    type="text"
                    placeholder="Add the Bill's name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>

            {/**CAMPO DE CANTIDAD */}
            <div className="campo">
                <label htmlFor = "amount">Amount</label>
                <input 
                    id = "campo"
                    type="number"
                    placeholder="Add the ammount of the bill"
                    value = {amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                ></input>
            </div>

            {/**CAMPO DE category */}
            <div className="campo">
                <label htmlFor = "category">Category</label>
                <select 
                    id = "categoria"
                    value = {category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    <option value="saving">Savings</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="personal">Personal</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="services">Services</option>
                </select>
            </div>

            <input type = "submit" value = {gastoEdit.name ? "Edit" : "Add"}></input>


        </form>

    </div>
  )
}

export default Modal