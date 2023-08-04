import React from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import Feedbackcontext from './Feedbackcontext/Feedbackcontext'


function Feedbackitem({item}) {
  const {deletefeedback,editfeedback} = useContext(Feedbackcontext)
  
  return (
    <Card reverse={true}>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deletefeedback(item.id)} className='close'>
          <FaTimes color='purple '/>
        </button>
        <button onClick={() => editfeedback(item)} className='edit'>
          <FaEdit color='purple '/>
        </button>
        <div className='text-display'> {item.text} </div>
        
      
    </Card>
  )
}

export default Feedbackitem
