// app/api/create-payment-link/route.js
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id:'rzp_test_ooDbo4fE9guQSO',
  key_secret: 'VR27qWWcUDS52g41I35gUjpu',
});

export async function POST(req) {
  const formData = await req.formData()
  console.log(formData)
const name=formData.get("name");
const email=formData.get("email");
const amount=formData.get("amount");
const address=formData.get("address");
const fname=formData.get("fname");
const number=formData.get("number");
const gender=formData.get("gender");
const ref_id=formData.get("ref_id");
console.log(fname+" "+" "+gender+" "+amount)
  // Create Razorpay payment link
  try {
    const paymentLink =  await razorpay.paymentLink.create({
      amount: amount * 100, // amount in paise (e.g., 100 INR = 10000 paise)
      currency: 'INR',
      description: 'Order',
     customer: {
    name: name,
    
    email: email
  },
  notes: {
    name:name,
    email:email,
    address:address,
   amount:amount,
    number:number,
    fname:fname,
    gender:gender
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
console.log( paymentLink);
    return new Response(JSON.stringify({ link: paymentLink.short_url }), { status: 200 });
  } catch (error) {
    console.error('Error creating payment link', error);
    return new Response(JSON.stringify({ error: 'Error creating payment link' }), { status: 500 });
  }
}
