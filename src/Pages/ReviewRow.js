import React from 'react';

const ReviewRow = ({review , reviewDelete}) => {
    const {_id , serviceName , customer , carImage , email , message} = review;

    





    return (
        <tr>
        <th>
          <label>
            <button onClick={() => reviewDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded mask-squircle w-24 h-24">
                <img className='' style={{height: "60px"}} src={carImage} />
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              
            </div>
          </div>
        </td>
        <td>
          {serviceName}
        </td>
        <td>{email}</td>
        <th>
          <p className="">{message}</p>
        </th>
      </tr>
    );
};

export default ReviewRow;