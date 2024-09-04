import Image from 'next/image';
import React from 'react';

const ServiceCard = ({service}) => {
  console.log(service);
  
  const {img, title, price} = service || {};
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <Image width={430} height={120} src={img} alt='service image'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="card-actions justify-between items-center">
      <h3 className='text-primary font-semibold'>Price: ${price}</h3>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;