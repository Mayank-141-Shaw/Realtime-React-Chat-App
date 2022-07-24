import React from 'react'
import { Link } from 'react-router-dom';


function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form ");
  }

  const handleChange = (e) => {
    
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={ (e)=>handleSubmit(ev) }>
          <div className="brand">
            <img src="" alt="" />
            <h1>snappy</h1>
          </div>
          <input 
            type="text" 
            placeholder='Username' 
            name='username' 
            onChange={e=>handleChange(e)}
          />
          <input 
            type="email" 
            placeholder='Email' 
            name='email' 
            onChange={e=>handleChange(e)}
          />
          <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            onChange={e=>handleChange(e)}
          />
          <input 
            type="password" 
            placeholder='Confirm Password' 
            name='confirmPassword' 
            onChange={e=>handleChange(e)}
          />
          <button type='submit'>Create User</button>
          <span>
            Already have an account ? <Link to='/login'>Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.div``;

export default Register