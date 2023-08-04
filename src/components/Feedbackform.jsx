import React from 'react'
import Card from './shared/Card'
import { useState, useContext , useEffect} from 'react'
import Button from './shared/Button'
import Ratingselect from './shared/Ratingselect'
import Feedbackcontext from './Feedbackcontext/Feedbackcontext'

function Feedbackform() {
    const [text,settext] = useState('')
    const [rating,setrating] = useState(10)
    const [btnDisable,setbtnDisable] = useState(true)
    const [message,setMessage] = useState('') 
    const {addfeedback,feedbackedit,updatefeedback} = useContext(Feedbackcontext)


    useEffect (() => {
      if(feedbackedit.edit === true){
        setbtnDisable(false)
        settext(feedbackedit.item.text)
        setrating(feedbackedit.item.rating)
      }

    },[feedbackedit])



    const handletextchange = (e) => 
    {
        if(text === ''){
            setbtnDisable(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10){
            setbtnDisable(true)
            setMessage('messeage must be contain atleast  10 characters')   
        }
        else{
            setbtnDisable(false)
            setMessage(null)
        }
        settext(e.target.value)
    }


    const handleSubmit = (e) => {
          e.preventDefault()
            if(text.trim().length > 10){
              const newfeedback = {
                text,
                rating 
            }
            if(feedbackedit.edit === true)
            {
            updatefeedback(feedbackedit.item.id,newfeedback)
            }
            else{
              addfeedback(newfeedback)
            }
          
          
          settext('')
        }
        }
  return (
    <Card>
      
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our services</h2>
        {/* // call back function */}
        <Ratingselect  select={(rating)=> setrating(rating)}/>
        <div className='input-group'>
        <input onChange={handletextchange} type={text} placeholder='Write a review'/>
        <Button type='submit' isDisable={btnDisable}> Send </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default Feedbackform
