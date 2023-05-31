import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const postData = async (body) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(
    "http://10.0.2.2:5007/api/Producers",
    {
      name: body.name,
      profilePictureURL: body.profilePictureURL,
      bio: body.bio,
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
};
const queryClient = useQueryClient();
export default function useAddProducer(body) {
  const mutation = useMutation({
    mutationFn: () => postData(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["producer"] });
    },
  });
  return mutation;
}
