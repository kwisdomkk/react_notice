import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { apiPostNoticeUpdate} from "./api";

export default function Update() {
  const {state:{title, writer, description, _id:id}}=useLocation(); 
  
  const navigate = useNavigate()

  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{title,writer,description}});    //수정할 때 원래 있던 값 불러옴

  const {mutate,isLoading}=useMutation(apiPostNoticeUpdate,{
    onSuccess:(data)=>{
      console.log(data);
      navigate(`/${id}`)
    },
  });

  const onSubmit=(formData)=>{
    mutate({formData,id});
  };
  return (
    <div className="w-full flex justify-center py-16">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl w-full flex flex-col space-y-4">
      <input
      {...register("title",{
        required:"제목은 필수 입력요소입니다!",
      })}
      className="py-1 px-2 border" 
      type="text" 
      placeholder="title"/>
      {errors?.title?.message &&(
        <div className="text-red-500 text-sm px-2">{errors?.title?.message}</div>
      )}
      
      <input
      {...register("writer",{
        required:"글쓴이는 필수 입력요소입니다."
      })} 
      className="py-1 px-2 border" 
      type="text" 
      placeholder="writer"/>
       {errors?.writer?.message &&(
        <div className="text-red-500 text-sm px-2">{errors?.writer?.message}</div>
      )}
      <textarea rows="10" className="py-1 px-2 border" type="text" placeholder="description" {...register("description",{
        required:"내용은 필수 입력요소입니다.",
        minLength:{
          value:5,message:"내용은 최소 5글자 이상이어야 합니다!",
        },
      })}></textarea>
       {errors?.description?.message &&(
        <div className="text-red-500 text-sm px-2">{errors?.description?.message}</div>
      )}
      <button disabled={isLoading} type="submit" className="py-1 bg-red-200">글쓰기</button>
    </form>
  </div>
  )
}
