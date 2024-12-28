'use client'

import { Textarea } from 'flowbite-react';
import {React, useState} from 'react'
import { generateHash  } from 'random-hash';

 function Bookings() {

    const [loading, setLoading] = useState(false);
    const [paymentLink, setPaymentLink] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        fname: "",
        address: "",
       
        number:"",

      });
let gender="Male";
      const handleInput = (e) => {
        console.log(e)
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
       gender=  e.target.__reactProps$sb2tr2lwrue.value==undefined?"Male":e.target.__reactProps$sb2tr2lwrue.value ;

      }




      const submitForm = async (e) => {
            
const ref_id=generateHash();
        // We don't want the page to refresh
        e.preventDefault()
    
        const formURL = `/api/razor`
        const data = new FormData()
    
        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        })
        data.append("amount",2500);
        data.append("ref_id",ref_id);
        data.append("gender",gender);
      
        // data.append("size",size);
        // data.append("id",id);
        // data.append("qty",qty);
        
    console.log(data.get("ref_id"))
        // POST the data to the URL of the form
        fetch(formURL, {
          mode: 'cors',
          method: "POST",
          body: data,
          headers: {
            'accept': 'application/json',
            'Access-Control-Allow-Origin':'*'
            
          },
          
        }).then(async (res) => {
            const data = await res.json();
            console.log(data);
            if (data?.link) {
              // Redirect user to the Razorpay payment link
             
              window.location.href = data.link;
            } else {
              alert('Error generating payment link');
            }})
        .catch( (error) =>{
            console.error('Error:', error);
            alert('Failed to create payment link');
          }) 
          .finally (()=>{
            setLoading(false);
          }
          )
        
          await  fetch(`api/creator`, {
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
            console.dir(creator_resp.result[0].data.ID,{depth:null})
            return creator_resp.creator_resp.result[0].data.ID
          })
          
          
        
      }
    


  return (
 <>  <section className="section">
      <div className="container">
          <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/80 py-9 text-center shadow-xl shadow-gray-300">
              <h1 className=" px-8 py-5 text-3xl font-bold text-white md:text-5xl">Book Event</h1>
              <p className="mt-2 text-lg font-bold text-white">Event Name :<span className='text-orange-500 font-black text-2xl'>&nbsp; SAHAJ SUMMIT</span></p>
              <p className="mt-2 text-lg font-bold text-white">Event organizers :<span className='text-orange-500 font-black text-2xl'>&nbsp; SAHAJ SPIRIT </span></p>
              <p className="mt-2 text-lg font-bold text-white">Event duration :<span className='text-orange-500 font-black text-2xl'>&nbsp; 6hrs 1-7PM</span></p>
              <p className="mt-2 text-lg font-bold text-white">Day :<span className='text-orange-500 font-black text-2xl'>&nbsp; Sunday</span></p>
              <p className="mt-2 text-lg font-bold text-white">Date :<span className='text-orange-500 font-black text-2xl'>&nbsp; 27 Feb 2025</span></p>
              <p className="mt-2 text-lg font-bold text-white">Venue :<span className='text-orange-500 font-black text-2xl'>&nbsp;Satya Sai auditorium, Lodhi Rd, Pragati Vihar, New Delhi, Delhi 110003</span></p>

              <img className="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
<form>
          <div className="mx-auto grid grid-cols-2 gap-4  max-w-screen-lg px-6 pb-20">
     
    
          <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" name="name" onChange={handleInput} value={formData.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" name="email" onChange={handleInput} value={formData.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
    <input type="number" name="number" onChange={handleInput} value={formData.number} id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0987654321" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Name</label>
    <input type="text" name="fname" onChange={handleInput} value={formData.fname} id="fathername" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
    <Textarea type="text" rows={4} name="address" onChange={handleInput} value={formData.address} id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
    <select
                  id="gender"
                  name="gender"
                 onChange={handleInput} value={formData.gender}
                  autoComplete="country-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                >
                  <option >Male</option>
                  <option>Female</option>
                  <option>Prefer Not to say</option>
                </select>  </div>

              <button type='submit' onClick={submitForm} disabled={loading}  className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1"> {loading ? 'Generating Payment Link...' :   `Book Now`}</button>
          </div>
          </form>
          {paymentLink && <p>Payment link: <a href={paymentLink} target="_blank" rel="noopener noreferrer">Click here</a></p>}
      </div>
      </section></>

  )
}

export default Bookings