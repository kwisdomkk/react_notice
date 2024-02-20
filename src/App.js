import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostNoticeWrite } from "./api";

function App() {
  const {register,handleSubmit}=useForm();
  const {mutate}=useMutation(apiPostNoticeWrite);
  const onSubmit=(formData)=>{
    mutate(formData);
  };

  return <div className="w-full flex justify-center py-16">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl w-full flex flex-col space-y-4">
      <input
      {...register("title")}
      className="py-1 px-2 border" 
      type="text" 
      placeholder="title"/>
      <input
      {...register("writer")} 
      className="py-1 px-2 border" 
      type="text" 
      placeholder="writer"/>
      <textarea rows="10" className="py-1 px-2 border" type="text" placeholder="description" {...register("description")}></textarea>
      <button type="submit" className="py-1 bg-red-200">글쓰기</button>
    </form>
  </div>
}

export default App;
