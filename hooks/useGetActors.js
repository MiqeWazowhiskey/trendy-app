import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
async function fetchData() {
  const response = await axios.get("http://10.0.2.2:5007/api/Actors/GetAll", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
export default function useGetActors() {
  const query = useQuery({
    queryKey: ["actor"],
    queryFn: fetchData,
  });
  return query;
}
