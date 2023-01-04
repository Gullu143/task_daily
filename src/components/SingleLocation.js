import React from 'react'
import { GET_SINGLE_LOCATION } from '../gqloperations/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export default function SingleLocation() {
  const params = useParams();
  const {loading, error, data} = useQuery(GET_SINGLE_LOCATION, {
    variables: {id: params?.id}
  });

  if(loading) return "loading"
  if(error) {
    console.log(error.message)
  }
  if(data) {
    console.log(data)
  }
 
  return (
    <div>
      <h1>{data.location.name}</h1>
      <img src={data.location.photo} width="500" /><br />
      {data.location.id}<br />
      </div>
  )
}
