import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(
    "http://10.0.2.2:5007/api/Producers/GetAll",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
export default function useGetProducers() {
  const query = useQuery({
    queryKey: ["producer"],
    queryFn: fetchData,
  });
  return query;
}
