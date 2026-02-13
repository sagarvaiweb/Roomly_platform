import React from 'react'


function Button({clsName , btnText}) {
    return ( <>
    <button className={`${clsName}`}>{btnText}</button>
    </> );
}

export default Button;