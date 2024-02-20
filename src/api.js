export async function apiPostNoticeWrite(formData){
  try{
    // console.log("API",formData);
    return await fetch("http://localhost:4000/notice/write",{
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