import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        
    );
};

export default Services;