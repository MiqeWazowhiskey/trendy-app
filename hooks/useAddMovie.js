import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function useGetMovies({ body }) {
  const [result, setResult] = useState();

  useEffect(() => {
    const postData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        await fetch("http://10.0.2.2:5007/api/Movies", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: {
            title: body.title,
            imageURL: body.img,
            description: body.desc,
            price: body.price,
            genre: body.genres,
            release_date: body.release_date,
            actors: body.actors,
            cinemaId: body.cinema,
            producerId: body.producer,
          },
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
