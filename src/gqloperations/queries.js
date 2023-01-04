import { gql } from "@apollo/client";

export const GET_ALL_LOCATION = gql`
  query locations {
    locations {
      id
      name
      photo
      description
      overallRating
      reviewsForLocation {
        id
        comment
      }
    }
  }
`
export const GET_SINGLE_LOCATION = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      photo
      overallRating
    }
  }
`


export const GET_LATEST_REVIEW = gql`
  query latestReviews {
    latestReviews {
      id
      comment
      rating
      location {
        name
        reviewsForLocation {
          comment
        }
      }

    }
  }
`