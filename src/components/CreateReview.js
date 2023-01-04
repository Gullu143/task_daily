import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { SUBMIT_REVIEW } from '../gqloperations/mutations';
import { useNavigate } from "react-router-dom";

export default function CreateReview() {

  const navigate = useNavigate();


  const [variables, setVariables] = useState( {
      comment: '',
      rating: '',
      locationId: ''
  });



  const [submitReview, {loading, error}] = useMutation(SUBMIT_REVIEW, {
    refetchQueries: [
      'locations'
    ]
  })

  if(loading) return <h1>Loading</h1>
 
 const handleChange = (e)=> {
  setVariables({...variables, [e.target.name]:  e.target.type==='number' ? +e.target.value : e.target.value})
 }

//  const StringToNumber = (e)=> {
//   setVariables({...variables, rating:parseInt(e.target.value)})
//  }

  const SubmitHandle = (e)=> {
    e.preventDefault();
    submitReview({
        variables
    })
    navigate("/");
    console.log(variables)
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
          name='comment'
          onChange={handleChange}
        />
         <input type= 'number'
          placeholder='Enter rating'
          name='rating'
          onChange={handleChange} 
        />
         <input type= 'text'
          placeholder='Enter location ID'
          name='locationId'
          onChange={handleChange}
        />
        <input type= 'submit'/>
      </form>
    </div>
  )


}
