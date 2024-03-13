import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({budget, setBudget, isValid, setIsValid}) => {
  return (
    <header>
        <h1>Planning your budget</h1>

        {isValid ? (
            <ControlBudget
                budget = {budget}
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