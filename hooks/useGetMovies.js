import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
async function getMovies() {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get("http://10.0.2.2:5007/api/Movies/GetAll", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data.data;
}

export default function useGetMovies() {
  const query = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return query;
}
