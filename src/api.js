const BASE_URL=process.env.REACT_APP_BASE_URL;

export async function apiPostNoticeWrite(formData){
  try{
    // console.log("API",formData);
    return await fetch(`${BASE_URL}/notice/write`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then(res=>res.json())
  }catch(error){
    console.log(error);
  }
}