// app/api/create-payment-link/route.js
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id:process.env.RAZ_KEY,
  key_secret:process.env.RAZ_SECRET,
});

export async function POST(req) {
  const formData = await req.json();

  const amount=formData.amount;
const name=formData.Name;
const email=formData.Email;

const ref_id=formData.ref_id;
console.log(formData)
  // Create Razorpay payment link
  try {
    const paymentLink =  await razorpay.paymentLink.create({
      amount: amount * 100, // amount in paise (e.g., 100 INR = 10000 paise)
      currency: 'INR',
      description: ' Sahaj Summit Event',
     customer: {
    name: name,
    email: email
  },
  notes: {
    name:name,
    email:email,
   amount:amount,
    
  },
  reference_id:ref_id,

      notify: {
        sms: true,
        email: true,
        whatsapp:true
      },
      callback_url: `${process.env.BASE_URL}/api/payment-success`,
  callback_method: "get"
    });
console.log( paymentLink.id);
    return new Response(JSON.stringify({ link: paymentLink.short_url ,id:paymentLink.id}), { status: 200 });
  } catch (error) {
    console.error('Error creating payment link', error);
    return new Response(JSON.stringify({ error: 'Error creating payment link' }), { status: 500 });
  }
}
