import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '@/client';
import '@/login.css';


const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
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

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/homepage')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }





  return (
    <div>
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Email'
                name='email'
                type='text'
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
        Don't have an account? <Link to='/signup'>Sign Up</Link>
    </div>
    </div>

);


}

export default Login