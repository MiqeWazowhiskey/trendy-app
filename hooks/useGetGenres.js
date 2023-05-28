import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function useGetGenres() {
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await fetch("http://10.0.2.2:5007/Genres/GetAll", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setResult(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return result;
}
