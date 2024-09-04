import React from "react";
import { services } from "@/lib/services";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  console.log(services);
  
  return (
    <div className="text-slate-800 min-h-screen">
      <div className="text-center container mx-auto">
        <h2 className="text-2xl font-bold text-orange-600">Our Services</h2>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
       {
        services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))
       }
      </div>
    </div>
  );
};

export default Services;
