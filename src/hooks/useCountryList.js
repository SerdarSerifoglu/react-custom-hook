import { useEffect, useState } from "react";

let localCache = [];

export default function useCountryList() {
  const [countryList, setCountryList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (localCache.length > 0) {
      setCountryList(localCache);
    } else {
      requestCountryList();
    }

    async function requestCountryList() {
      setCountryList([]);
      setStatus("loading");

      const res = await fetch("http://localhost:3001/countries");
      const json = await res.json();
      localCache = json;
      setCountryList(localCache);
      setStatus("loaded");
    }
  }, []);

  return [countryList, status];
}
