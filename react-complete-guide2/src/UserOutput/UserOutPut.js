import React from 'react';

import './UserOutPut.css';
const UserOutput=(props)=>{
    return(
        <div className="UserOutPut">
                   <p> userName: {props.userName}</p> 
                   <p>   i hope i'll be overwritten</p>
            
        </div>
    );


};
export default UserOutput;