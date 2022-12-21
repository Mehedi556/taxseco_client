import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = event => {
    event.preventDefault();
    const form = event.target;
    const picture = form.picture.value;
    const name = form.name.value;
    const Price = form.price.value;
    const about = form.about.value;

    const service = {
      picture,
      Price,
      name,
      about,
    };

    fetch('https://taxseco-server.vercel.app/service', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('Service submitted successfully');
          form.reset();
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <form className="my-14 h-screen" onSubmit={handleAddService}>
      <div className="text-center grid grid-cols-1 w-6/12 mx-auto gap-2">
        <input
          type="text"
          placeholder="Enter Car photoURL"
          className="input input-bordered rounded-lg"
          name="picture"
          required
        />

        <input
          type="text"
          placeholder="Car name"
          className="input input-bordered rounded-lg"
          name="name"
          required
        />

        <input
          type="text"
          placeholder="Car price per day"
          className="input input-bordered rounded-lg"
          name="price"
        />

        <textarea
          className="textarea textarea-bordered h-24 rounded-lg"
          placeholder="About this car"
          name="about"
          required
        ></textarea>
        <button className="btn btn-outline btn-md btn w-6/12 mx-auto my-5">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddService;
