
//Componente para el header, este alberga todo el top i decide si hay un nuevo presupuesto o hay control de presupuesto

import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({budget, setBudget, isValid, setIsValid, gastos}) => {
  return (
    <header>
        <h1>Planning your budget</h1>

        {isValid ? (
            <ControlBudget
                budget = {budget}

                gastos = {gastos}
            />
        ) : (
            <NewBudget
                budget = {budget}
                setBudget = {setBudget}
                
                setIsValid = {setIsValid}
            />
        )}
    </header>
  )
}
export default Header