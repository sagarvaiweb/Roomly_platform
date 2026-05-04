import React from 'react'


function Button({clsName , btnText , onClick}) {
    return ( <>
    <button className={`${clsName}`} onClick={onClick}>{btnText}</button>
    </> );
}

export default Button;