import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_LOCATION, GET_LATEST_REVIEW } from '../gqloperations/queries';
import { Link } from 'react-router-dom';


export default function Home() {
  
  const {loading, error, data} = useQuery(GET_ALL_LOCATION);
  const {loading:loadingReview, error:errorReview, data:dataReview} = useQuery(GET_LATEST_REVIEW);



 
  if(loading) return "loading"
  if(error) {
    console.log(error.message)
  }
  if(loadingReview) return "loading"
  if(errorReview) {
    console.log(error.message)
  }




  return (
    <div>
      {
        data.locations.map((locationall) => 
          <div key={locationall.id}>
            <h1>{locationall.name}</h1>
            <img src={locationall.photo} width="500" /><br />
            <p>{locationall.id}</p>
            <p>{locationall.overallRating}</p>
            {locationall.description}
            <br></br>
            <br></br>
            {
              locationall.reviewsForLocation.map((review) =>

                <div key={review.id}>
                  {review.comment}
                </div> 
              )
            }
            <Link to={`location/${locationall.id}`}>Reae More</Link>
            <hr />
          </div>
          )
      } 

      {
        dataReview.latestReviews.map((reviewall) => 
          <div key={reviewall.id}>
            <h1>{reviewall.rating}</h1>
            <p className=''>{reviewall.comment}</p>
              {reviewall.location.name}
             <p className='hello comment'> {reviewall.location.reviewsForLocation.comment}</p>
          </div>
           
        )
      }
     
    
    </div>
  )
}
