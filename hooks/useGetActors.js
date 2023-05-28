import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function useGetActors() {
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        await fetch("http://10.0.2.2:5007/api/Actors/GetAll", {
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
