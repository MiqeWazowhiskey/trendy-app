import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchData() {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get("http://10.0.2.2:5007/Genres/GetAll", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
export default function useGetGenres() {
  const query = useQuery({
    queryKey: ["genre"],
    queryFn: fetchData,
  });
  return query;
}
