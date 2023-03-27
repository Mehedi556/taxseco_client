import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id , name , Price , picture} = service;
  return (
    <div className='border border-solid border-amber-500 rounded-xl p-3'>
           
    <PhotoProvider>
      <PhotoView src={picture}>
        <img className='h-[280px] , w-full' src={picture} alt="" />
      </PhotoView>
    </PhotoProvider>

                <div className='text-left py-3 pb-6'>
                <h1><span className='font-bold'>Name: </span>{name}</h1>
                <h1><span className='font-bold'>Per Day: </span>{Price}$</h1>
                </div>
                <Link to ={`/service/${_id}`}><button className="btn bg-amber-500 hover:bg-amber-600 border-none w-[100%] justify-center">View Details</button></Link>

        </div>
  );
};

export default SingleService;
