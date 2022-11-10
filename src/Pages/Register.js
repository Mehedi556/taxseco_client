import { FacebookAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {

  const {createUser , signUpFacebook} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error , setError] = useState('');
  const provider = new FacebookAuthProvider();

  const handleFacebook = () => {
    signUpFacebook(provider)
    .then(result => {
      const user = result.user;
      console.log(user);
  }).catch(error => {
    console.error(error)
    setError(error.message)
  })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name  = form.name.value;
    const email  = form.email.value;
    const password  = form.password.value;
    console.log(name , email , password);

    createUser(email , password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      navigate('/')
      setError('');
  }).catch(error => {
    console.error(error)
    setError(error.message)
  })
  
  }

    return (
        
    );
};

export default Register;