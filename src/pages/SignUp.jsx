import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import '@/signup.css';

const SignUp = () => {

  const [formData,setFormData] = useState({
    fName:'', lName: '', EMPLID: '',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()
    if (formData.email.includes('@stu.bmcc.cuny.edu') ){
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.fName,
              last_name: formData.lName,
              emplidid: formData.EMPLID,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }else{
    alert("You have to have a BMCC associated email")
  } 
} 




  return (
    <div className="signup-container"> 
        <form onSubmit={handleSubmit}>
        <input type='text'
          placeholder='First Name'
          name='fName'
          onChange={handleChange}
        />

        <input type='text'
          placeholder='Last Name'
          name='lName'
          onChange={handleChange}
        />

        <input type='text'
          placeholder='EMPLID'
          name='EMPLID'
          onChange={handleChange}
        />

        <input type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />

        <input 
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />

        <button type='submit'>
          Submit
        </button>


      </form>
      Already have an account?<Link to='/login'>Login</Link> 
    </div>
  )
}

export default SignUp