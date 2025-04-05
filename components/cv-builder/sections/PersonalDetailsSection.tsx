'use client';

import React, { useState } from 'react';
import { useCVBuilder } from '../CVBuilderContext';
import Section from './Section';

const PersonalDetailsSection: React.FC = () => {
  const { cvData, updatePersonalDetails } = useCVBuilder();
  const { personalDetails } = cvData;
  
  return (
    <Section 
      title="Personal Details" 
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            value={personalDetails.firstName}
            onChange={(e) => updatePersonalDetails({ firstName: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            value={personalDetails.lastName}
            onChange={(e) => updatePersonalDetails({ lastName: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={personalDetails.email}
            onChange={(e) => updatePersonalDetails({ email: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={personalDetails.phone}
            onChange={(e) => updatePersonalDetails({ phone: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Your phone number"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            value={personalDetails.address}
            onChange={(e) => updatePersonalDetails({ address: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Your street address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            value={personalDetails.city}
            onChange={(e) => updatePersonalDetails({ city: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Your city"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
          <input
            type="text"
            value={personalDetails.postalCode}
            onChange={(e) => updatePersonalDetails({ postalCode: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Your postal code"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            value={personalDetails.country}
            onChange={(e) => updatePersonalDetails({ country: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            placeholder="Your country"
          />
        </div>
      </div>
    </Section>
  );
};

export default PersonalDetailsSection;
