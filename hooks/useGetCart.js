import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
async function getCart(id) {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(`http://10.0.2.2:5007/api/Cart/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data.data;
}

export default function useGetCart(id) {
  const query = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(id),
  });
  return query;
}
