import React from 'react';
import cars from '../Assets/cars.jpg';
import tick from '../Assets/usp-1.svg';
import tick2 from '../Assets/usp-2.svg';
import tick3 from '../Assets/usp-3.svg';
import man from '../Assets/img-personal-ullas.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <div className="block md:flex py-14 mx-auto">
        <img className="rounded-xl w-[400px] h-[250px]" src={cars} alt="" />
        <div className="p-5 ">
          <h1 className="font-bold text-2xl text-justify uppercase italic">
            Are you looking for a car on rent ??? <br />
            Then you are at the right place. <br /> Hi.. I'm Mehedi Hasan,I have
            varieties of cars. <br /> From here you can rent cars at best rates.
          </h1>
        </div>
      </div>

      <div className="divider"></div>
      {/* --------------------------------------------------------------------- */}

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-14">
          {services.map(service => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
        <div className='w-full text-center pb-14'>
          <Link to="/service"><button className="btn btn-outline btn-warning btn-wide">
            See more Cars
          </button></Link>
        </div>
      </div>

      <div className="divider"></div>
      {/* --------------------------------------------------------------------- */}
      <div className="my-14">
        <h3 className="pb-2">-----WHY TRAVEL WITH THESE CARS</h3>
        <h1 className="pl-8 mb-10 font-bold text-2xl">
          Best Price. Quality Service.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex p-5 bg-white rounded-xl">
            <img style={{ width: '40px' }} src={tick} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">Schedule Booking</h1>
              <p>Pick your travel date in advance, as per your schedule.</p>
            </div>
          </div>
          <div className="flex p-5 bg-white rounded-xl">
            <img style={{ width: '40px' }} src={tick2} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">24/7 Customer Support</h1>
              <p>For any queries, comments and support.</p>
            </div>
          </div>
          <div className="flex p-5 bg-white rounded-xl">
            <img style={{ width: '40px' }} src={tick3} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">Online Payment With EMI</h1>
              <p>Choose your preferred payment method. EMI if needed.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="my-14 mb-10">
        <h5 className="pt-10">----TESTIMONIALS</h5>
        <h1 className="text-3xl font-bold pb-8">
          Real Happy Customers, Real Stories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-9 text-2xl italic w-10/12">
            <h6 className="">
              Taxseco car rental service was really a good experience for me.
              The car was exactly what I required and the condition was really
              top-class. I'll certainly get car rental from Sheba.xyz in future.
            </h6>
            <p className="mt-5">
              <small> Md. Haider Ali</small>
            </p>
          </div>
          <img className="rounded-xl w-full" src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
