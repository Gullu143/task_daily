import { gql } from "@apollo/client";

export const SUBMIT_REVIEW = gql`
  mutation submitReview($comment: String!, $rating: Int!, $locationId: String!){
    submitReview(locationReview: {comment: $comment, rating: $rating, locationId: $locationId}) {
      code
      success
      message
    }
  }
`
