import React from 'react';
import './Input';

function Input({input,setInput}){
    return(
        <>
            <input className="Input_item" type="email" value={input} onChange={(e) => setInput(e.target.value)} name="email" id="email"></input>
        </>
    )
}

export default Input;