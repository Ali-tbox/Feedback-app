import React from 'react'
import Feedbackitem from './Feedbackitem'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Feedbackcontext from './Feedbackcontext/Feedbackcontext'
//import {motion, AnimatePresence} from 'framer-motion'

function Feedbacklist() {
   const {feedback} = useContext(Feedbackcontext)
    if(!feedback || feedback.length ===0){
      return <p>no feedback yet</p>
    }   
    
  



  return (
    <div className='feedback-list'>
      {feedback.map((item)=>(
      <Feedbackitem key={item.id} item ={item}   />
      ))}
    </div>
  )
}
Feedbackitem.propTypes = {
    feedback: PropTypes.array,
}
export default Feedbacklist
