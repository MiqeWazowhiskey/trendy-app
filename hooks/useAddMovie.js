import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function useAddMovie(body) {
  const [result, setResult] = useState();
  const requestBody = {
    title: body.title,
    imageURL: body.img,
    description: body.desc,
    price: body.price,
    genre: body.genres,
    datePublished: Date.now(),
    actors: body.actors,
    cinemaId: body.cinema,
    producerId: body.producer,
  };
  useEffect(() => {
    const postData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        await fetch("https://10.0.2.2:7027/api/Movies", {
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
