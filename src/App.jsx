
import { useState } from "react"

import Header from "./components/Header"

function App() {

  const [budget, setBudget] = useState(0)    //iniciamos el presupuesto en 0

  return (
    <div>
      <Header
        budget = {budget}
        setBudget = {setBudget}
      />
    </div>
  )
}

export default App
