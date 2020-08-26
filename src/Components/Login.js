import React, { useState, useEffect }  from 'react';
import { Redirect } from 'react-router';
import equals from 'validator/lib/equals';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: ''
  })
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      successMsg: '',
      errorMsg: ''
    });
    console.log('user: ');
  }

  const {email, password, password2, successMsg } = user;


  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setUser({
        ...user,
        errorMsg: 'All fields are required'
      })
    } else if (!isEmail(email)) {
      setUser({
        ...user,
        errorMsg: 'Invalid email'
      })
    } else if (!equals(password, password2)) {
      setUser({
        ...user,
        errorMsg: 'Passwords do not match'
      })
    } else {
      // SUCCESS
      setUser({
        ...user,
        loading: true,
        successMsg: 'Validation success'
      });
      
    }
  }
    
    if (successMsg === 'Validation success') {
      return <Redirect  
      to={{ 
        pathname: '/checkout', 
        state: { user } 
      }}/>
    }

  

  return (
    <div className='w-50 p-3 mx-auto'>

      <form className='form-signin' onSubmit={handleSubmit} >
        <img className='mb-4' src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' alt='' width='72' height='72' />
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
        <label htmlFor='inputEmail' className='sr-only'>Email address</label>
        <input type='email' onChange={handleChange} name='email' id='inputEmail' className='form-control' placeholder='Email address' required='' autoFocus='' />
        <label htmlFor='inputPassword' className='sr-only'>Password</label>
        <input type='password' onChange={handleChange} name='password' id='inputPassword' className='form-control' placeholder='Password' required='' />
        <input type='password' onChange={handleChange} name='password2' id='inputPassword2' className='form-control' placeholder='Verify Password' required='' autoFocus='' />
        <label htmlFor='inputPassword2' className='sr-only'>Verify Password</label>
        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
        </label>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2017-2018</p>
      </form>


    </div>
  );
}

export default Login;
