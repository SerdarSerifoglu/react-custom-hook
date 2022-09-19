import { useState } from "react";
import useCountryList from "../hooks/useCountryList";
import Select from "./Select";

const Component1 = () => {
  const [countries] = useCountryList();

  const [countryId, setCountryId] = useState();

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
        contentList={[]}
      ></Select>
    </>
  );
};

export default Component1;
