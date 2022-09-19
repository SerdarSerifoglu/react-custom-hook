import { useEffect, useState } from "react";

const localCache = {};

export default function useCityList(countryId) {
  const [cityList, setCityList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!countryId) {
      setCityList([]);
    } else if (localCache[countryId]) {
      setCityList(localCache[countryId]);
    } else {
      requestCityList();
    }

    async function requestCityList() {
      setCityList([]);
      setStatus("loading");

      const res = await fetch(
        `http://localhost:3001/cities?country_id=${countryId}`
      );
      const json = await res.json();
      localCache[countryId] = json || [];
      setCityList(localCache[countryId]);
      setStatus("loaded");
    }
  }, [countryId]);

  return [cityList, status];
}
