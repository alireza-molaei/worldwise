import React from "react";
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CountriesList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message={"add your first city"} />;
  const countries = cities.reduce((acc, curr) => {
    const alreadyExist = acc.map((el) => el.country).includes(curr.country);
    if (!alreadyExist) {
      return [...acc, { country: curr.country, emoji: curr.emoji }];
    }
    return acc;
  }, []);
  return (
    <ul className={styles.CountriesList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}

export default CountriesList;
