import { useState } from "react";
import useCityList from "../hooks/useCityList";
import useCountryList from "../hooks/useCountryList";
import Select from "./Select";

const Component1 = () => {
  const [countryId, setCountryId] = useState();
  const [countries] = useCountryList();

  const [cities] = useCityList(countryId);

  const countryChangeEvent = (e) => {
    setCountryId(e.target.value);
  };
  return (
    <>
      <h1>Component1</h1>
      <Select
        labelText="Ülke"
        nameText="country"
        idValue="country"
        contentList={countries}
        onChangeEvent={countryChangeEvent}
      ></Select>
      <br></br>
      <Select
        labelText="Şehir"
        nameText="city"
        idValue="city"
        contentList={cities}
      ></Select>
    </>
  );
};

export default Component1;
