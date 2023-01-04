import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { SUBMIT_REVIEW } from '../gqloperations/mutations';

export default function CreateReview() {

  const [acomment, setComment] = useState("");
  const [arating, setrating] = useState("");
  const [alocation, setLocation] = useState("");



  const [submitReview, {loading, error}] = useMutation(SUBMIT_REVIEW, {
    refetchQueries: [
      'locations'
    ]
  })
  

  if(loading) return <h1>Loading</h1>
 


  const SubmitHandle = (e)=> {
    e.preventDefault();
    submitReview({
      variables:{
        comment: acomment,
        rating: arating,
        locationId: alocation
      }
    })
  
  }



  return (
    <div>
      {
        error && 
        <h1>{error.message}</h1>
      }
      


      <form onSubmit={(e)=>SubmitHandle(e)}>
        <input type= 'text'
          placeholder='Enter comment'
          onChange={(e)=>setComment(e.target.value)}
        />
         <input type= 'number'
          placeholder='Enter rating'
          onChange={(e)=>setrating(parseInt(e.target.value))}
        />
         <input type= 'text'
          placeholder='Enter location ID'
          onChange={(e)=>setLocation(e.target.value)}
        />
        <input type= 'submit'/>
      </form>
    </div>
  )


}
