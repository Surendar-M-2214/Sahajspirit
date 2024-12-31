"use client";

import React from "react";
import Image from 'next/image';
import logo from '../../public/images/logo.png'
import event from '../../public/images/event.png'
const EventDetails = () => {
  return (
    <div className="min-h-screen py-28  md:py-24  bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-primary flex items-center justify-center space-x-10 text-white py-6 px-8">
            <Image src={logo} width={100} height={50} alt="logo" className="rounded-full" />
       
          <h1 className="text-3xl font-bold text-white text-center">SAHAJ SUMMIT</h1>
        </header>
        <Image src={event} width={500} height={50} alt="logo" className="rounded-lg mx-auto" />
        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Event Details</h2>
            <p>
              <strong>Organizers:</strong> Sahaj Spirit
            </p>
            <p>
              <strong>Duration:</strong> 6 hrs (1:00 PM - 7:00 PM)
            </p>
            <p>
              <strong>Day:</strong> Sunday
            </p>
            <p>
              <strong>Date:</strong> 23rd February 2025
            </p>
            <p>
              <strong>Venue:</strong> Satya Sai Auditorium, Lodhi Rd, Pragati
              Vihar, New Delhi, Delhi 110003
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Program Schedule</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>1:00 PM:</strong> Reporting
              </li>
              <li>
                <strong>1:15 PM:</strong> Snacks
              </li>
              <li>
                <strong>1:45 PM:</strong> Opening Ceremony
              </li>
              <li>
                <strong>2:15 PM:</strong> Guest Speaker Session (Sarvagya Bharill)
              </li>
              <li>
                <strong>3:05 PM:</strong> Filler/Activity (Sahaj Bhai Poetry)
              </li>
              <li>
                <strong>3:20 PM:</strong> Public Interaction & Activity (Sandesh)
              </li>
              <li>
                <strong>4:00 PM:</strong> Filler/Activity (TBD)
              </li>
              <li>
                <strong>4:15 PM:</strong> Second Session (Samkit Ji)
              </li>
              <li>
                <strong>5:00 PM:</strong> Quiz, Interaction & Meditation (Shruti Didi, Aman Bhaiya)
              </li>
              <li>
                <strong>5:30 PM:</strong> Evening Meal
              </li>
              <li>
                <strong>6:15 PM:</strong> Stand-Up Comedy & Musical Mehfil
              </li>
              <li>
                <strong>7:30 PM:</strong> Closing Ceremony
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
