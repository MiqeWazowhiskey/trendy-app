import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function deleteFromCart(userId, movieId) {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.delete(
    `http://10.0.2.2:5007/api/Cart/${userId}/${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "text/plain",
      },
    }
  );
  return response.data;
}

export default function useDeleteItemFromCart(userId, movieId) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteFromCart(userId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return mutation;
}
