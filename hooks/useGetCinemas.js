import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function useGetCinemas() {
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        await fetch("http://10.0.2.2:5007/api/Cinemas/GetAll", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((json) => setResult(json));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return result;
}
