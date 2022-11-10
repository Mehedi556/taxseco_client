import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-14'>
    {
        services.map(service => <SingleService key={service._id} service={service}></SingleService>)
    }
</div>
    );
};

export default Services;