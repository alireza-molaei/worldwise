import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message = {"add your first city"}/>
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
      return  <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
