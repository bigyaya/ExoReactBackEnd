import React from 'react'
import "./myStyle.css"

function Stylesheets(props) {
    let couleur = props.primary ? "primary" : ""
  return (
    <div>
      <h1 className={couleur}>Stylsheets</h1>

    </div>
    
  )
}

export default Stylesheets
