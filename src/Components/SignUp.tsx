import React from 'react'
import { useState } from 'react'
import { auth,provider } from './Config'
import {signInWithPopup} from "firebase/auth"
import { type } from 'os'

type SignUpProps={
    onSignIn: (success: boolean) => void;}

const SignUp:React.FC<SignUpProps> = ({onSignIn}) => {
    const [value,setValue]=useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider)
          .then((data) => {
            const user = data.user;
            if (user && user.email) {
              setValue(user.email);
              localStorage.setItem('email', user.email);
              onSignIn(true);
            }
          })
          .catch((error) => {
            console.error('Failed to sign in:', error);
            onSignIn(false);
          });
      };
  return (
    <div>
      <h1>Please Sign in to start Quiz</h1>
      <button onClick={handleClick}>Sign-In</button>
    </div>
  )
}

export default SignUp
