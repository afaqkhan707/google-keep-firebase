import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './signupForm.css';
import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db,
} from '../../firebase/firebaseConfig';

import Link from 'next/link';

function SignupForm() {
  const router = useRouter();
  const [passwordChecker, setPasswordChecker] = useState(false);
  const [passwordCheckerEnable, setPasswordCheckerEnable] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const InputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Submit = async (event) => {
    event.preventDefault();
    console.log(formData.email, formData.password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      router.push('/');
      const user = userCredential.user;
      console.log(user);
      await setDoc(doc(db, 'users', user.uid), formData);
    } catch (err) {
      console.log(err.code);
    }
  };

  useEffect(() => {
    if (formData.password && formData.confirmPassword)
      setPasswordCheckerEnable(true);
    if (formData.password === formData.confirmPassword)
      setPasswordChecker(true);
    else setPasswordChecker(false);
  }, [formData.password, formData.confirmPassword]);

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={Submit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={formData.username}
          name='username'
          onChange={InputChange}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={formData.email}
          name='email'
          onChange={InputChange}
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={formData.password}
          name='password'
          onChange={InputChange}
          required
        />

        <label htmlFor='password'>Confirm Password:</label>
        <input
          type='password'
          id='cpassword'
          value={formData.confirmPassword}
          name='confirmPassword'
          onChange={InputChange}
          required
        />
        {passwordCheckerEnable && (
          <p style={passwordChecker ? { color: 'green' } : { color: 'red' }}>
            {passwordChecker ? 'Match' : 'Not Match'}
          </p>
        )}
        <button type='submit'>Sign Up</button>

        <div className='account-link'>
          <p className='text'>Already have an account?</p>
          <Link href={'/signin'}>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
