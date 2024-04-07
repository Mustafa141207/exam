import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import {Formik, useFormik} from'formik';

import * as Yup from'yup';
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../Context/Details';


export default function Login() {
  let{SetDetails,SetOttp} = useContext(DetailsContext)
    let gat=useNavigate();

    async function Loogin(value){
        let{ data}=await axios.post(`http://elkodaa.chd-staging.tech/api/c/auth/login`,value)
        console.log(data)
        console.log(value)
        if(data.status==200){
            gat('/Regester')
            SetDetails(value)
            SetOttp(data.otp)

        }

    }
    let validationSchema=Yup.object({
        phone:Yup.string().required('Phone is Required'),
        dial_code:Yup.string().required('DialCode is required'),
        identity:Yup.string().required('identity is required'),
      });
      let formik=useFormik({
        initialValues:{
          phone: "",
          dial_code:"",
          identity:"",
        },
        validationSchema:validationSchema,
        onSubmit:Loogin
     
      })
  
  return (
   <>
   <section>
    <div className="container py-5 d-flex w-50 justify-content-center align-items-center">
        <div className="login py-5 w-100  ">
            <h2 className=' text-center text-success py-3'>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                
                <input type="text" className=' form-control' placeholder='phone'  name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.phone&& formik.touched.phone?<div className=' my-2 alert alert-danger p-2'>{formik.errors.phone}</div>:''}
               
                <input type="text" placeholder='Code' name='dial_code'  className=' form-control my-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.dial_code} />
                {formik.errors.dial_code&& formik.touched.dial_code?<div className=' p-2 alert alert-danger'>{formik.errors.dial_code}</div>:''}

                <input type="text" placeholder='identity' name='identity'  className=' form-control my-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.identity} />
                {formik.errors.identity&& formik.touched.identity?<div className=' p-2 alert alert-danger'>{formik.errors.identity}</div>:''}
                <button type='submit' className=' d-block w-25 btn btn-success p-2  m-auto'>Login</button>
            </form>
          
        </div>
    </div>
   </section>
  
   
   </>
  )
}
