import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import NotFound from './NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleLocation from './SingleLocation';
import CreateReview from './CreateReview';



export default function Links() {
  return (
     <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element= {<SignIn />}/>
      <Route path='/register' element= {< SignUp />}/>
      <Route path='/location/:id' element= {< SingleLocation />}/>
      <Route path='/create' element= {< CreateReview />}/>
     </Routes>
  )
}
