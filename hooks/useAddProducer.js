import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function useAddProducer(body) {
  const [result, setResult] = useState();
  const requestBody = {
    name: body.name,
    profilePictureURL: body.profilePictureURL,
    bio: body.bio,
    movies: body.movies,
  };
  useEffect(() => {
    const postData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        await fetch("http://10.0.2.2:5007/api/Producers", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        })
          .then((res) => res.json())
          .then((json) => setResult(json));
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  }, []);

  return result;
}
