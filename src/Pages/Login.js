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
      <form onSubmit={handleSubmit} className='mx-auto '>
      <div className="hero my-24 p-5 rounded-xl w-full">
<div className="hero-content flex-col lg:flex-row">
<div className="text-center lg:text-left">
<h1 className="text-5xl font-bold pb-5 text-center">Welcome To RENTALCO</h1>
<h1 className="text-3xl font-bold text-center">Login Now!</h1>
<p className="py-6 text-center">why are you waiting for ??</p>

</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<div className="card-body">


  



  <div className="form-control">
    <label className="label">
      <span className="label-text">Your email</span>
    </label>
    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
  </div>



  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
    <label className="label">
      <Link to="/register"><p style={{color:"blue"}} href="#" className="label-text-alt link link-hover mt-3">Not Registered? Create Account</p></Link>
    </label>
    <label className="label">
      <a href="#" className="label-text-alt link link-hover">{error}</a>
    </label>
  </div>



  <div className="form-control mt-6">
    <button className="btn btn-primary text-black">Login</button>
  </div>
</div>
</div>
</div>
</div>
  </form>
    );
};

export default Login;