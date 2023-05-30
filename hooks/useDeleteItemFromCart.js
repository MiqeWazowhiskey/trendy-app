import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useDeleteItemFromCart({ userId, movieId }) {
  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const url = `http://10.0.2.2:5007/api/Cart/${userId}/${movieId}`;
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "text/plain",
      };

      await fetch(url, {
        method: "DELETE",
        headers: headers,
        body: body,
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}
