import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function Aboutpage() {
  return (
    <Card>
      this a about page
      <p>
        <Link to='/'>Back to home</Link>
      </p>
      </Card>

  )
}

export default Aboutpage
