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
    person1: { name: "", email: "", fname: "", address: "", number: "", age: "", gender: "Male" },
    person2: { name: "", email: "", fname: "", address: "", number: "", age: "", gender: "Male" },
  });

  const [errors, setErrors] = useState({});
  let gender = "Male";

  const handleInput = (e,person) => {
    console.log(e)
    console.log(person)
    const fieldName = e.target.name.replace(`${person}_`, '');
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [person]: {
        ...prevState[person],
        [fieldName]: fieldValue,
      },
    }));

    // if (e.target.name === "gender") {
    //   gender = e.target.__reactProps$sb2tr2lwrue.value || "Male";
    // }
  };
  const handleSeatChange = (e) => {
    setSeatType(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    const persons = ['person1', ...(seatType === 'Premium' ? ['person2'] : [])];

    persons.forEach((person) => {
      if (!formData[person].name.trim()) newErrors[`${person}_name`] = 'Name is required';
      if (!formData[person].email.trim()) {
        newErrors[`${person}_email`] = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData[person].email)) {
        newErrors[`${person}_email`] = 'Enter a valid email';
      }
      if (!formData[person].number.trim()) {
        newErrors[`${person}_number`] = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData[person].number)) {
        newErrors[`${person}_number`] = 'Phone number must be 10 digits';
      }
      if (!formData[person].fname.trim()) newErrors[`${person}_fname`] = 'Father’s name is required';
      if (!formData[person].address.trim()) newErrors[`${person}_address`] = 'Address is required';
      if (!formData[person].age.trim()) {
        newErrors[`${person}_age`] = 'Age is required';
      } else if (isNaN(formData[person].age) || +formData[person].age < 1) {
        newErrors[`${person}_age`] = 'Enter a valid age';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const ref_id = generateHash();
    const amount = seatType === 'Normal' ? 499 : 5100;

    const formURL = `/api/razor`;
    const raz_data={
      Name:formData['person1'].name,
      Email:formData['person1'].email,
      amount:amount,
      ref_id:ref_id,
    
    }
   
    // if(seatType==="Normal"){
    // data.append("amount", 499);
    // }else if(seatType==="Premium"){
    //   data.append("amount", 5100); 
    // }
    // data.append("ref_id", ref_id);
    // data.append("gender", gender);
 
    // data.forEach((e)=>{
    //   console.dir(JSON.stringify(e))
    // })

    fetch(formURL, {
      mode: 'cors',
      method: "POST",
      body:JSON.stringify( raz_data),
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(async (res) => {
        const det = await res.json();

 
      const  pay_id=det.id;
     
         const data = {
      data: ['person1', ...(seatType === 'Premium' ? ['person2'] : [])].map((person) => ({
        Reference_id: ref_id,
        Name: formData[person].name,
        Email: formData[person].email,
        Phone_Number: `+91 ${formData[person].number}`,
        Address: formData[person].address,
        Age:formData[person].age,
        Seat:seatType,
        Gender: formData[person].gender,
        FName: formData[person].fname,
        Payment_Status: "Pending",
        Paid_Amount: amount,
        Payment_Link_ID: pay_id,
         // Placeholder for payment link ID
      })),
    };
        
          fetch(`api/creator`, {
          mode: 'cors',
          method: "POST",
          body:JSON.stringify( data),
          headers: {
            'accept': 'application/json',
            'Access-Control-Allow-Origin':'*'
          }
        }
        ).then(async(rec)=>{
          setLoading(true);
          const creator_resp= await rec.json()
          console.log(JSON.stringify(creator_resp,null,2))
          return creator_resp.result[0].data.ID
        })
        
        if (det?.link) {
          window.location.href = det.link;
        
        } else {
          setLoading(false);
          alert('Error generating payment link');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error:', error);
        alert('Failed to create payment link');
      })
      .finally(() => {
       
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
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Seat Type</label>
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
          {["person1", ...(seatType === "Premium" ? ["person2"] : [])].map((person, index) => (
            <>
               <h3 className="text-lg font-bold">{`Details for Person ${index + 1}`}</h3>
            <div key={person} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
           
              {["name", "email", "number", "fname", "address", "age", "gender"].map((field) => (
                <div key={field} className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    {field === "fname" ? "Father's Name" :field === "number"?"Whatsapp Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "gender" ? (
                    <div className="flex gap-4">
                    {['Male', 'Female'].map((genderOption) => (
                      <label key={genderOption} className="flex items-center">
                        <input
                          type="radio"
                          name={`${person}_gender`}
                          value={genderOption}
                          checked={formData[person].gender === genderOption}
                          onChange={(e) => handleInput(e, person)}
                          className="text-emerald-500 focus:ring-emerald-500"
                        />
                        <span className="ml-2">{genderOption}</span>
                      </label>
                    ))}
                  </div>
                  ) : (
                    <input
                      type={field === "number" || field === "age" ? "number" : "text"}
                      name={field}
                      value={formData[person][field]}
                      onChange={(e) => handleInput(e, person)}
                      className={`bg-gray-50 border ${
                        errors[`${person}_${field}`] ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5`}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    />
                  )}
                  {errors[`${person}_${field}`] && (
                    <p className="mt-1 text-sm text-red-500">{errors[`${person}_${field}`]}</p>
                  )}
                </div>
                
              ))}
              
            </div>
            </>
          ))}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1"
          >
            {loading ? "Generating Payment Link..." : "Book Now"}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Bookings;
