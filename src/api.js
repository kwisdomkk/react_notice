export async function apiPostNoticeWrite(formData){
  try{
    // console.log("API",formData);
    return await fetch("https://port-0-express-server2-dc9c2nlsjoqu5a.sel5.cloudtype.app/notice/write",{
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