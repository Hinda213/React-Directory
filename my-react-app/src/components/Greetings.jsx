import React, { Fragment } from 'react'

const Greetings = (props) => {
  return (
    <Fragment>
        <h1 style={{backgroundColor:"yellow"}}>Hello, {props.name} {props.surname}! </h1>
        <h2 style={{backgroundColor: 'lightcoral'}}>This text wasnot there !</h2>
    </Fragment>
  )
}

export default Greetings