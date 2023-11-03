/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './signupForm.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  auth,
  signInWithEmailAndPassword,
} from '../../firebase/firebaseConfig';

function SigninForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log('Authenticated');
      router.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='signin-container'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          required
          placeholder='email'
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          placeholder='minimum 6 characters'
        />

        <button type='submit'>Sign In</button>
      </form>
      <div className='account-link'>
        <p className='text'> Don't have an account?</p>
        <Link href={'/signup'}>Signup</Link>
      </div>
    </div>
  );
}

export default SigninForm;
