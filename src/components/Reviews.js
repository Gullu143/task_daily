import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_LATEST_REVIEW } from '../gqloperations/queries';

export default function Reviews() {
  const {loading, error, data} = useQuery(GET_LATEST_REVIEW);

  if(loading) return "loading"
  if(error) {
    console.log(error.message)
  }
  
  
  return (
    <div>
       {
        data.latestReviews.map((review) => 
          <div key={review.id}>
            <h1>{review.rating}</h1>
            <p className=''>{review.comment}</p>
            
             
                {review.location.name}
              
            
           
          </div>
           
        )
      }
    </div>
  )
}
