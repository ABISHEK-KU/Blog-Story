import React from "react";
import './Button.css'

function Button(props) {
  const { variant = 'primary', children, handelClick } = props
  return (
    <button className={`button ${variant}`} onClick={handelClick} >
      {children}
    </button>
  )
}
export default Button