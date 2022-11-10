import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://taxseco-server.vercel.app/reviews?email=${user.email}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [user?.email]);

  const reviewDelete = _id => {
    const proceed = window.confirm(
      'Are you sure you want to delete this review??'
    );
    if (proceed) {
      fetch(`https://taxseco-server.vercel.app/reviews/${_id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted');
            const remaining = reviews.filter(review => review._id !== _id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1>{reviews.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>User name</th>
              <th>Car name</th>
              <th>email</th>
              <th>Reviews</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <ReviewRow
                key={review._id}
                review={review}
                reviewDelete={reviewDelete}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
