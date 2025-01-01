// app/api/payment-success/route.js
export async function GET(req) {
    // console.log(req);
      const payment_id=req.nextUrl.searchParams.get("razorpay_payment_id") ;
      const razorpay_payment_link_id=req.nextUrl.searchParams.get("razorpay_payment_link_id");
      const razorpay_payment_link_status=req.nextUrl.searchParams.get("razorpay_payment_link_status");
      const ref_id=req.nextUrl.searchParams.get("razorpay_payment_link_reference_id");
    console.log(payment_id);
    console.log(razorpay_payment_link_id);
    console.log(ref_id);
    console.log(razorpay_payment_link_status);
      // Verify payment with Razorpay (optional, but recommendeccsd)
      try {
        // You can verify the payment status with Razorpay API here
        // Save the user registration to your database or Excel after payment verification
    if(razorpay_payment_link_status==='paid'){
console.log("in if")

        const tkn = await fetch(`https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.CR_REFRESH_TKN}&client_id=${process.env.CR_CLIENT_ID}&client_secret=${process.env.CR_CLIENT_SECRET}&grant_type=refresh_token`, {
            method: "POST",
           
        })
        const tknres = await tkn.json()
     const acc_token =tknres.access_token;


        let payload = {
            "criteria": "Reference_id == "+ref_id ,
            "data":
            {
                "Payment_Status":"Paid",
                "Payment_ID":payment_id,
               
            },
            "result": {
                "fields": [
                    "ID",
                    "Payment_Status"
                ],
                "message": true,
                "tasks": true
            }
        }
        
        let api_headers = {
            "Authorization": "Zoho-oauthtoken "+acc_token
        }
        
        try {
            fetch("https://www.zohoapis.in/creator/v2.1/data/sahajspiritteam17/sahajspirit/report/All_Registrations", {
                method: "PATCH",
                headers: api_headers,
                body: JSON.stringify(payload)
            })
          .then(async (res)=>{
            const det=await res.json();
           console.log(JSON.stringify(det)
           )
          })
           
        }
        catch (exception) {
            console.error(exception)
        }
    }
        
    
        // Example: Save the user details and payment information to an Excel file or DB
        const successHTML = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Payment Success</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
              <h1 class="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
              <p class="text-lg text-gray-700 mb-2">Confirmation email has been sent to you.</p>
              <p class="text-lg text-gray-700 mb-4">You will be notified on WhatsApp shortly.</p>
              <p class="text-lg text-gray-700 font-medium">आपको पुष्टिकरण ईमेल भेज दिया गया है।</p>
              <p class="text-lg text-gray-700 mb-6 font-medium">आपको जल्द ही व्हाट्सएप पर सूचित कर दिया जाएगा।</p>
              <div class="text-sm text-gray-500">Thank you for choosing Sahaj Spirit Trust.</div>
            </div>
          </body>
        </html>
      `;
  
      return new Response(successHTML, {
        headers: { 'Content-Type': 'text/html' },
      });
  
      } catch (error) {
        console.error('Error processing payment:', error);
        return new Response(JSON.stringify({ success: false, message: 'Payment verification failed' }), { status: 500 });
      }
    }
    