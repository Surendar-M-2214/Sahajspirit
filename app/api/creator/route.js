export  async function POST(req) {

    const formData = await req.json()
    console.log(formData)
  
    const tkn = await fetch(`https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.CR_REFRESH_TKN}&client_id=${process.env.CR_CLIENT_ID}&client_secret=${process.env.CR_CLIENT_SECRET}&grant_type=refresh_token`, {
        method: "POST",
       
    })
    const tknres = await tkn.json()
 const acc_token =tknres.access_token;


    let payload = formData;
    
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
