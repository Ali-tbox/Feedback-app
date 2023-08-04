import React from 'react'


function Header({text, bgclr,textclr}) {
    const styless= {
        backgroundColor: bgclr,
        color: textclr,
    }
    return (
    
    <div style ={styless}>
      <h1>{text}</h1>
    </div>
  
  
  )
}
Header.defaultProps = {
    text : 'this is defualt props',
}


export default Header
