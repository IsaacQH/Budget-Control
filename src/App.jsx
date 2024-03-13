
import { useState } from "react"

import Header from "./components/Header"

function App() {

  const [budget, setBudget] = useState(0)    //iniciamos el presupuesto en 0
  const [isValid, setIsValid] = useState(false) //Nos permite ver el estado del sistema

  return (
    <div>
      <Header
        budget = {budget}
        setBudget = {setBudget}

        isValid = {isValid}
        setIsValid = {setIsValid}
      />
    </div>
  )
}

export default App
