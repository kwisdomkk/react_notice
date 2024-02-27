import { useQuery } from "react-query";
import { apiGetNoticeList } from "./api";

export default function List() {
		const {data} = useQuery("getList",apiGetNoticeList);
		console.log(data)
  return (
		<div className="w-full flex justify-center py-16">
			<div className="max-w-5xl w-full flex flex-col gap-4">
				<h1 className="text-xl font-semibold">공지사항 리스트</h1>
				<div>
					{data?.data.map((item,index)=>(
						<div key={index} className="grid grid-cols-[2fr_1fr_3fr_1fr_1fr] py-2 odd:bg-red-100 px-2">
							<div>{item._id}</div>
							<div>{item.title}</div>
							<div>{item.description}</div>
							<div>{item.writer}</div>
							<div>{item.createdAt.substr(0,10)}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
