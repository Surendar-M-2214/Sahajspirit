export  async function POST(req) {

    const formData = await req.formData()
    console.log(formData)
  const name=formData.get("name");
  const address=formData.get("address");
  const email=formData.get("email");
  const amount=formData.get("amount");
  const fname=formData.get("fname");
  const number=formData.get("number");
  const gender=formData.get("gender");
  const ref_id=formData.get("ref_id");
  const pay_id=formData.get("pay_id");
    const tkn = await fetch(`https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.CR_REFRESH_TKN}&client_id=${process.env.CR_CLIENT_ID}&client_secret=${process.env.CR_CLIENT_SECRET}&grant_type=refresh_token`, {
        method: "POST",
       
    })
    const tknres = await tkn.json()
 const acc_token =tknres.access_token;


    let payload = {
        "data": [
            {
                "Reference_id":ref_id,
                "Name": name,
                "Email":email,
                "Phone_Number":"+91"+number,
                "Address":address,
                "Gender":gender,              
                "FName":fname,
                "Payment_Status":"Pending",
                "Paid_Amount":amount,
                "Payment_Link_ID":pay_id,
            }
        ],
        "skip_workflow": [
            "form_workflow",
            "schedules"
        ]
    }
    
    let api_headers = {
        "Authorization": "Zoho-oauthtoken "+acc_token,
        
    }
    
    
        const res = await fetch("https://www.zohoapis.in/creator/v2.1/data/sahajspiritteam17/sahajspirit/form/Registration", {
            method: "POST",
            headers: api_headers,
            body: JSON.stringify(payload)
        })
     const  resp=await res.json();

  console.log(resp);
//   const errors = resp.result[0]?.error;
//   console.log("Errors:", errors);
  
    return Response.json(resp)
     
 }
