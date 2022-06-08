import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories, categories}) => {

  const [inputValue, setInputValue] = useState("")

  const handleImputValue = () => {
    
    if(inputValue.trim().length > 2){
      setCategories([inputValue, ...categories ])
      setInputValue("")
    }
    
    
  }
  return (
    <div>
        <input 
        type="text" 
        value={inputValue} 
        onChange={(e)=> setInputValue(e.target.value)}
        />

        <button onClick={handleImputValue}>Agregar</button>
    </div>
  )
}

AddCategory.propTypes ={
  setCategories: PropTypes.func.isRequired
}