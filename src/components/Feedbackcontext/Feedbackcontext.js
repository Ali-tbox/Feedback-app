import React from 'react'
import { createContext ,useState } from 'react'
import { v4 as uuidv4 } from "uuid";

    
    const Feedbackcontext = createContext()

export const  FeedbackProvider = ({children}) => {
    const [feedback,setfeedback] =useState([
        {
            id:1,
            text:'this is from item1',
            rating: 10
        },
        {
            id:2,
            text:'this is from item2',
            rating: 9
        },
        {
            id:3,
            text:'this is from item3',
            rating: 8
        }
    ])
   
    const [feedbackedit,setfeedbackedit] = useState({
        item: {},
        edit: false
    })
     //edit feedback
    const editfeedback = (item) =>{
        setfeedbackedit({
            item,
            edit: true
        })
    }
    // delete feedback
    const deletefeedback = (id) => {
        if (window.confirm("Are you sure")) {
          setfeedback(feedback.filter((item) => item.id !== id));
        }
      };
      //update feedback
      const updatefeedback = (id,upditem) =>{ 
        setfeedback(
            feedback.map((item)=> (item.id === id ? {...item,...upditem} : item))
        )

      }
      // add feedback
      const addfeedback = (newfeedback) => {
        newfeedback.id = uuidv4();
        setfeedback([newfeedback, ...feedback]);
      };
    return <Feedbackcontext.Provider value={{
        feedback,
        feedbackedit,
        deletefeedback,
        addfeedback,
        editfeedback,
        updatefeedback,
        
        }}>
    {children}
    </Feedbackcontext.Provider> 
}

export default Feedbackcontext
