import React from 'react'
const Validation=(props)=>{
    let ValidationMessage='text long enough';
    if(props.inputLegth<=5){
        ValidationMessage='text to short';
    }
    return(
        <div>
            
    <p>{ ValidationMessage}</p>
            </div>
    );
};     
export default Validation;
