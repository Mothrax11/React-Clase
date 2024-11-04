import React from 'react';


function MiComponente(){
    const handleClick = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    <form onSubmit={handleSubmit}>
        <input  type="text" onChange={handleClick}/>
    </form>
    
    return (
        <button onClick={(e)=>handleClick(e)}>Haz click aquí</button>
    )
}
export default MiComponente;