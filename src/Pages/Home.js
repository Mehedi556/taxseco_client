import React from 'react';
import cars from '../Assets/nature.jpg';
import tick from '../Assets/usp-1.svg';
import tick2 from '../Assets/usp-2.svg';
import tick3 from '../Assets/usp-3.svg';
import man from '../Assets/img-personal-ullas.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';
import img1 from '../Assets/11.jpg';
import img2 from '../Assets/22.jpg';
import img3 from '../Assets/33.jpg';
import like from '../Assets/like.jpg';
import write from '../Assets/write.jpg';
import house from '../Assets/home.jpg';
import find from '../Assets/find.png';
import map from '../Assets/map.png';
import car from '../Assets/car.png';
import partner1 from '../Assets/partner1.png';
import partner2 from '../Assets/partner2.png';
import partner3 from '../Assets/partner3.png';
import partner4 from '../Assets/partner4.png';


const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <div
        className="hero h-[100%] mt-16 mb-16"
        style={{ backgroundImage: `url(${cars})` }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hey Buddy</h1>
            <p className="mb-5 text-white font-bold">
              ARE YOU LOOKING FOR A CAR ON RENT ??? THEN YOU ARE AT THE RIGHT
              PLACE. HI.. I'M MEHEDI HASAN,I HAVE VARIETIES OF CARS. FROM HERE
              YOU CAN RENT CARS AT BEST RATES.
            </p>
          </div>
        </div>
      </div>

      
      {/* --------------------------------------------------------------------- */}

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-14">
          {services.map(service => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
        <div className="w-full text-center pb-14">
          <Link to="/service">
            <button className="bg-amber-500 hover:bg-amber-600 text-white btn border-none btn-wide">
              See more Cars
            </button>
          </Link>
        </div>
      </div>

      
      {/* --------------------------------------------------------------------- */}
      <div className="py-40">
        <h3 className="pb-2">-----WHY TRAVEL WITH THESE CARS</h3>
        <h1 className="pl-8 mb-10 font-bold text-2xl">
          Best Price. Quality Service.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex p-5 rounded-xl border border-amber-500">
            <img style={{ width: '40px' }} src={tick} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">Schedule Booking</h1>
              <p>Pick your travel date in advance, as per your schedule.</p>
            </div>
          </div>
          <div className="flex p-5 border border-amber-500 rounded-xl">
            <img style={{ width: '40px' }} src={tick2} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">24/7 Customer Support</h1>
              <p>For any queries, comments and support.</p>
            </div>
          </div>
          <div className="flex p-5 rounded-xl border border-amber-500">
            <img style={{ width: '40px' }} src={tick3} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">Online Payment With EMI</h1>
              <p>Choose your preferred payment method. EMI if needed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}

      <div className='mx-auto my-40'>
        <h1 className='text-center font-bold text-5xl text-amber-500'>OUR BENEFITS</h1>
        <p className='text-center text-xl text-black italic pt-2 mb-12'>Luxury AutoStar Rental Services</p>
        <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='w-9/12 mx-auto'>
            <img className='mx-auto' src={like} alt="" />
            <h2 className='font-bold text-xl mb-3'>Our Customers Always
100% Satisfied</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
          </div>
          {/* ----------- */}
          <div className='w-9/12 mx-auto'>
            <img className='mx-auto' src={house} alt="" />
            <h2 className='font-bold text-xl mb-3'>Your Choice of
Any Pickup Location</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
          </div>
          {/* ----------- */}
          <div className='w-9/12 mx-auto'>
            <img className='mx-auto' src={write} alt="" />
            <h2 className='font-bold text-xl mb-3'>We Provide Easier
& Faster Bookings</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
          </div>
        </div>
      </div>

      {/* Customer Services */}

      <div className='my-52'>
        <h1 className='text-center font-bold text-5xl text-amber-500 pb-10'>Customer Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
          <div className='bg-slate-100 p-9 mx-auto'>
          <h1 className='font-bold text-2xl pb-2'>Special rates on car booking</h1>
          <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        {/* ---------- */}
        <div className='bg-slate-100 p-9 mx-auto'>
          <h1 className='font-bold text-2xl pb-2'>Mobile Phone Reservation</h1>
          <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        {/* ---------- */}
        <div className='bg-slate-100 p-9 mx-auto'>
          <h1 className='font-bold text-2xl pb-2'>Unlimited Miles Car Rental</h1>
          <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        {/* ---------- */}
        <div className='bg-slate-100 p-9 mx-auto'>
          <h1 className='font-bold text-2xl pb-2'>One Way Car Rentals
</h1>
          <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        {/* ---------- */}
        </div>
        
      </div>

      

      <div className="my-14">
        <h5 className="pt-10">----TESTIMONIALS</h5>
        <h1 className="text-3xl font-bold pb-8">
          Real Happy Customers, Real Stories
        </h1>

        <div className="grid flex grid-cols-1 md:grid-cols-2">
          <div className="mt-9 text-2xl italic w-10/12 items-center pl-16">
            <h6 className="">
              Taxseco car rental service was really a good experience for me.
              The car was exactly what I required and the condition was really
              top-class. I'll certainly get car rental from Rentalco in future.
            </h6>
            <p className="mt-5">
              <small> Md. Haider Ali</small>
            </p>
          </div>
          <div className="w-full">
            <img className="rounded-xl w-9/12 mx-auto" src={man} alt="" />
          </div>
        </div>
      </div>
      {/* Blog Section */}

      <div className='my-40'>
        <h1 className='text-center font-bold text-5xl text-amber-500 py-10 my-7'>Blogs</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className="card bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="font-bold text-sm">
               JANUARY 12, 2022
              </p>
              <h1 className='font-bold text-xl mb-3'>What To Do if Your Rental Car Has Met With An Accident</h1>
              <p className='mb-5 text-lg'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
              <div className="card-actions justify-end">
                <div className="font-thin underline">Read more..</div>
              </div>
            </div>
          </div>
        {/* --------------- */}
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                src={img2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="font-bold text-sm">
               JANUARY 12, 2022
              </p>
              <h1 className='font-bold text-xl mb-3'>On The Trail of 6 Best Foods in North America</h1>
              <p className='mb-5 text-lg'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
              <div className="card-actions justify-end">
                <div className="font-thin underline">Read more..</div>
              </div>
            </div>
          </div>
          {/* ------------ */}
          <div className="card bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                src={img3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="font-bold text-sm">
               JANUARY 12, 2022
              </p>
              <h1 className='font-bold text-xl mb-3'>Car Rental Mistakes That Can Cost You Big</h1>
              <p className='mb-5 text-lg'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
              <div className="card-actions justify-end">
                <div className="font-thin underline">Read more..</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Partners */}

      <div className='my-40'>
        <h1 className='text-center font-bold text-5xl text-amber-500 pb-10'>Meet Our Partners</h1>
        <p className='text-xl mb-16 text-center w-10/12 mx-auto'>To contribute to positive change and achieve our sustainability goals, we partner with many extraordinary organizations around the world. Their expertise enables us to do far more than we could alone, and their passion and talent inspire us. It is our pleasure to introduce you to a handful of the organizations whose accomplishments and commitments are representative of all the organizations we are fortunate to call our partners.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <img className='mx-auto' src={partner1} alt="" />
            <img className='mx-auto' src={partner2} alt="" />
            <img className='mx-auto' src={partner3} alt="" />
            <img className='mx-auto' src={partner4} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Home;
