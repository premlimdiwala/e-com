import React, { useState } from 'react'

function Search() {
    const [value,setValue] = useState("");
    const [isVissible,setIsvisible] = useState(false);

    const handleValue = (e) =>{
        setValue(e.target.value)
    };

    const handleVisibility = () => {
        setIsvisible(!isVissible)
    }
  return (
    <>
     <h1>Searched value : {isVisible ? value : ""} </h1>
  
  <input onChange={handleValue} />

  <button onClick={handleVisbility}>search</button>
    </>
  )
}

export default Search