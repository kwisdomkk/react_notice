import { useQuery } from "react-query";
import { apiGetUser } from "../api";

export default function useUser() {
  const { data } = useQuery("getUser", apiGetUser);
  return data;
}
