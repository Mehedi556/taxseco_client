import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const detail = useLoaderData();
    console.log(detail);
    return (
        <div className="mx-auto">
      <div className="w-3/4 glass mx-auto mt-12">
        <figure className='w-4/4'>
          <img className='w-full' src={detail.picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black text-3xl">{detail.name}</h2>
          <h2 className="card-title text-black text-2xl pb-6">Per day: {detail.Price}$</h2>
          <p>{detail.about}</p>
          <div className="card-actions justify-end">
            <Link to=""><button className="btn btn-primary">Get premium access!</button></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceDetails;