import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function postData(body) {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(
    "http://10.0.2.2:5007/api/Cinemas",
    {
      cinemaLogo: body.cinemaLogo,
      name: body.name,
      serviceRate: body.serviceRate,
      movies: body.movies,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

const queryClient = useQueryClient();
export default function useAddCinema(body) {
  const mutation = useMutation({
    mutationFn: () => postData(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cinema"] });
    },
  });
  return mutation;
}
