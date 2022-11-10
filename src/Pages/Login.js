import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {
  const [error , setError] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name  = form.name.value;
    const email  = form.email.value;
    const password  = form.password.value;
    console.log(name , email , password);
  
    signIn(email , password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from, {replace: true});
  }).catch(error => {
    console.error(error)
    setError(error.message);
  })
  }


    return (
        
    );
};

export default Login;