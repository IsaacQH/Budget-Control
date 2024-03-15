
//Componente principal de toda la aplicación

import { useState } from "react"

import Header from "./components/Header"
import { ListBills } from "./components/ListBills"
import Modal from "./components/Modal"


import { generateID } from "./helpers"
import { generateDate } from "./helpers"
import IconNewSpent from "./img/nuevo-gasto.svg"


function App() {

  const [budget, setBudget] = useState(0)    //iniciamos el presupuesto en 0
  const [isValid, setIsValid] = useState(false) //Nos permite si se añadió un presupuesto
  const [modal, setModal] = useState(false)     //Nos permite controlar si se añade un gasto 
  const [modalAnimation, setModalAnimation] = useState(false)
  //nos permite controlar  la animación de modal
  const [gastos, setGastos] = useState([])

  const handleNewSpent = () => {
    //console.log("YOU ARE ADDING A BILL ")
    setModal(true)

    setTimeout(() => {
      setModalAnimation(true)
    }, 500)    //Después de medio segundo activa la animación
  }

  const saveBill = (object) => {  //Captura el objeto desde Modal.jsx
    object.id = generateID() //Le genera ID al objeto nuevo
    object.date = generateDate()  //Generando fecha
    setGastos([...gastos, object])       //Hce que el state tenga el valor del objeto
  }

  return (
    <div>
      <Header
        budget = {budget}
        setBudget = {setBudget}

        isValid = {isValid}
        setIsValid = {setIsValid}
      />

      {isValid && (      /*Revisa si modal es true y si es así nos coloca la imagen + */
      <>
        <main>
          <ListBills
            gastos = {gastos}
          />
        </main>

        <div className="nuevo-gasto">
          <img 
            src={IconNewSpent}
            alt= "Icon new spent" 
            onClick={handleNewSpent}
            />
        </div>
      </>
      )}

      {modal && 
      <Modal 
        setModal = {setModal} 
        modalAnimation = {modalAnimation}
        setModalAnimation = {setModalAnimation} 
        saveBill = {saveBill}
      />   /*Revisa si modal es true y si es así nos lleva al componente */}


    </div>
  )
}

export default App
