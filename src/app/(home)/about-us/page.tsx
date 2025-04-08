import React from 'react';

export default function AboutUs (){
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">About AgroConnect</h1>
      <p className="text-lg text-darkText mb-6">
        AgroConnect is an innovative platform designed to bridge the gap between farmers and customers, enabling a direct marketplace where fresh, quality farm products can be purchased without the need for middlemen.
      </p>
      <h2 className="text-3xl font-semibold text-primary mb-4">Our Mission</h2>
      <p className="text-lg text-darkText mb-6">
        At AgroConnect, our mission is to empower farmers by providing them with a platform where they can sell their produce directly to consumers, ensuring fair prices, better quality, and faster access to farm products.
      </p>
      <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose AgroConnect?</h2>
      <ul className="list-disc pl-6 text-lg text-darkText mb-6">
        <li>Direct farmer-to-consumer connection</li>
        <li>Competitive prices on farm products</li>
        <li>Convenient online shopping experience</li>
        <li>Access to reliable weather forecasts and farming tools</li>
      </ul>
      <p className="text-lg text-darkText">
        Join us in revolutionizing the agricultural marketplace and creating a fairer system for both farmers and consumers.
      </p>
    </div>
  );
};
