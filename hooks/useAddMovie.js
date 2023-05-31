import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const postRequest = async (values) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(
    "http://10.0.2.2:5007/api/Movies",
    {
      title: values.title,
      description: values.description,
      price: values.price,
      genre: 1,
      imageURL: values.imageURL,
      cinemaId: 4,
      producerId: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
const queryClient = useQueryClient();
export default function useAddMovie(body) {
  const mutation = useMutation({
    mutationFn: () => postRequest(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
  return mutation;
}
