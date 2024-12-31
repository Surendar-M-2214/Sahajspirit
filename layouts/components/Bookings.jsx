'use client'

import { Textarea } from 'flowbite-react';
import { React, useState } from 'react';
import { generateHash } from 'random-hash';
import Image from 'next/image';
import logo from '../../public/images/logo.png'
function Bookings() {
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [seatType, setSeatType] = useState("Normal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fname: "",
    address: "",
    number: "",
  });

  const [errors, setErrors] = useState({});
  let gender = "Male";

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));

    if (e.target.name === "gender") {
      gender = e.target.__reactProps$sb2tr2lwrue.value || "Male";
    }
  };
  const handleSeatChange = (e) => {
    setSeatType(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Phone number must be 10 digits";
    }
    if (!formData.fname.trim()) {
      newErrors.fname = "Father's name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const ref_id = generateHash();
    const formURL = `/api/razor`;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if(seatType==="Normal"){
    data.append("amount", 499);
    }else if(seatType==="Premium"){
      data.append("amount", 5100); 
    }
    data.append("ref_id", ref_id);
    data.append("gender", gender);

    fetch(formURL, {
      mode: 'cors',
      method: "POST",
      body: data,
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(async (res) => {
        const det = await res.json();
 
      const  pay_id=det.id;
      data.append("pay_id",pay_id);
        
        
          fetch(`api/creator`, {
          mode: 'cors',
          method: "POST",
          body: data,
          headers: {
            'accept': 'application/json',
            'Access-Control-Allow-Origin':'*'
          }
        }
        ).then(async(rec)=>{

          const creator_resp= await rec.json()
          console.log(JSON.stringify(creator_resp,null,2))
          return creator_resp.creator_resp.result[0].data.ID
        })
        
        if (det?.link) {
          window.location.href = det.link;
        
        } else {
          alert('Error generating payment link');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to create payment link');
      })
      .finally(() => {
        setLoading(true);
      });
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/80 py-9 text-center shadow-xl shadow-gray-300">
            <h1 className="px-8 py-5 text-3xl font-bold text-white md:text-5xl">Book Event</h1>
            <div className="grid grid-cols- justify-center start-0">
              <Image
              src={logo}
              width={100}
              height={100}
              alt='logo'
              
              className='mx-auto rounded-full'
              />
              <div className='bg-slate-50/90 p-5 rounded-xl m-3 hover:hover:scale-110  transition-transform ease-in-out '>

            <p className="mt-2 text-sm lg:text-xl font-bold text-emerald-500">
              Event Name :
              <span className='text-orange-400 font-black text-sm lg:text-2xl'>
                &nbsp; SAHAJ SUMMIT
              </span>
            </p>
            <p className="mt-2 text-sm lg:text-xl font-bold text-emerald-500">
              Event organizers :
              <span className='text-orange-400 text-sm font-black lg:text-2xl'>
                &nbsp; SAHAJ SPIRIT
              </span>
            </p>

              <p className="mt-2 text-sm lg:text-xl font-bold text-emerald-500">Event duration :<span className='text-orange-400  text-sm font-black lg:text-2xl'>&nbsp; 6hrs (1-7PM)</span></p>
              <p className="mt-2 text-sm lg:text-xl font-bold text-emerald-500">Day :<span className='text-orange-400 font-black   text-sm lg:text-2xl'>&nbsp; Sunday</span></p>
              <p className="mt-2 text-sm lg:text-xl font-bold text-emerald-500">Date :<span className='text-orange-400 font-black text-sm lg:text-2xl'>&nbsp; 23 Feb 2025</span></p>
              <p className="mt-2 text-sm lg:text-xl font-bold  text-emerald-500">Venue :<span className='text-orange-400 font-black  text-sm lg:text-2xl'>&nbsp;Satya Sai auditorium, Lodhi Rd, Pragati Vihar, New Delhi, Delhi 110003</span></p>
              </div>
              </div>
            {/* Add other event details */}
            <img className="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <form onSubmit={submitForm}>
            <div className="mx-auto grid lg:grid-cols-2 gap-4 max-w-screen-lg px-6 pb-20">
              {['name', 'email', 'number', 'fname', 'address'].map((field, index) => (
                <div key={index} className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    {field === 'fname' ? "Father's Name" : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'number' ? 'number' : 'text'}
                    name={field}
                    onChange={handleInput}
                    value={formData[field]}
                    className={`bg-gray-50 border ${
                      errors[field] ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5`}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                  {errors[field] && <p className="mt-1 text-sm text-red-500">{errors[field]}</p>}
                </div>
              ))}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer Not to say</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Seat Type
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Normal"
                      name="seatType"
                      checked={seatType === "Normal"}
                      onChange={handleSeatChange}
                      className="text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">Normal Seats (₹ 499)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Premium"
                      name="seatType"
                      checked={seatType === "Premium"}
                      onChange={handleSeatChange}
                      className="text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">
                      Premium Seats (₹ 5100 for 2 people)
                    </span>
                  </label>
                </div>
                </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1"
              >
                {loading ? 'Generating Payment Link...' : `Book Now`}
              </button>
            </div>
          </form>
          {paymentLink && <p>Payment link: <a href={paymentLink} target="_blank" rel="noopener noreferrer">Click here</a></p>}
        </div>
      </section>
    </>
  );
}

export default Bookings;
