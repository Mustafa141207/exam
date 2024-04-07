import React, { useContext, useState } from 'react'
import { DetailsContext } from '../Context/Details'
import axios from 'axios';

export default function Register() {

let{ottp,Details}=useContext(DetailsContext);
let[Error,setErrors]=useState('')
async function Verify(){
  let data=await axios.post(`https://elkodaa.chd-staging.tech/api/c/auth/verify`,
    {
      "phone":Details.phone,
    "dial_code":Details.dial_code,
    "identity":Details.identity,
    "otp":ottp,
    "fcm_token":`${ottp}`
   
     
  }).catch((errors)=>{
    console.log(errors);
    setErrors(errors.response.data.message);
  })
  console.log(data);
}

  return (
    <>
    <section>
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="regester w-100 my-5 shadow p-5">
          <p className=' fw-bold'>Phone: {Details.phone}</p>
          <p className=' fw-bold'>Code: {Details.dial_code} </p>
          <p className=' fw-bold'>Identity: {Details.identity}</p>
          <p className=' fw-bold'>Ottp: {ottp}</p>
         
          {Error?<div className=' rounded-1 my-2 alert alert-danger'>{Error} </div>:""}

          <button onClick={()=>{
            Verify()
          }}  className=' btn btn-success d-block w-25 m-auto'>Verify</button>
        
        </div>
      </div>
    </section>
    
    </>
   
  )
}
