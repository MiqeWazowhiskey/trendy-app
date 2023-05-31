import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";

async function fetchData(id) {
  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(`http://10.0.2.2:5007/api/User/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
export default function useGetUserById(id) {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchData(id),
  });
  return query;
}
