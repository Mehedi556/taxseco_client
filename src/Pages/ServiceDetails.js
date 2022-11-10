import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const detail = useLoaderData();
    const {name , picture , Price , about , _id} = detail;
    // console.log(detail);


    const handleReview =(event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = user?.email || 'unregistered';
        const image = user?.photoURL;
        const message = form.review.value;


        const review = {
            service: _id,
            serviceName: detail.name,
            customer: userName,
            carImage: picture,
            email,
            image,
            message
        }

        fetch('http://localhost:5000/reviews' , {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            alert('Review submitted successfully')
            form.reset();
          }
        })
        .catch(error => console.error(error));


    }


    return (
        <div className="mx-auto">
      <div className="w-3/4 glass mx-auto mt-12">
        <figure className='w-4/4'>
          <img className='w-full' src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black text-3xl">{name}</h2>
          <h2 className="card-title text-black text-2xl pb-6">Per day: {Price}$</h2>
          <p>{about}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>



<form className='my-14' onSubmit={handleReview}>
  
    <div className='text-center grid grid-cols-1 w-6/12 mx-auto gap-2'>
    <input type="text" placeholder="Your name" className="input input-bordered rounded-lg" name="name" defaultValue={user?.displayName} required/>

    <input type="text" placeholder="Your email" className="input input-bordered rounded-lg" name="email" defaultValue={user?.email} readOnly/>

    <textarea className="textarea textarea-bordered h-24 rounded-lg" placeholder="Write your review" name="review" required></textarea>
    <button className='btn btn-outline btn-md btn w-6/12 mx-auto my-5'>Submit</button>
    </div>
</form>







    </div>
    );
};

export default ServiceDetails;