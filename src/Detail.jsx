import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { apiGetNoticeDetail } from "./api";

export default function Detail() {
    const {id}=useParams();
    const {data}=useQuery(["getDetial",id],apiGetNoticeDetail);
    
  return (
    <div className="w-full flex justify-center py-16">
        <div className="max-w-5xl w-full">
            <div>자세히보기</div>
            <div>{data?.data.title}</div>
            <div>{data?.data.writer}</div>
            <div>{data?.data.createdAt}</div>
            <div>{data?.data.description}</div>
            <button>수정</button>
            <button>삭제</button>
        </div>
    </div>
  );
}
