import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

// eslint-disable-next-line react/prop-types
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  // eslint-disable-next-line react/prop-types

  if (!cities)
    return (
      <Message message="add your first city by clicking on a city on the Map" />
    );
  return (
    // eslint-disable-next-line react/prop-types
    <div className={styles.cityList}>
      {/* eslint-disable-next-line react/prop-types */}
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
