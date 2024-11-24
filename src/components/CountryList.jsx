import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

// eslint-disable-next-line react/prop-types
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  // eslint-disable-next-line react/prop-types
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the Map" />
    );

  // eslint-disable-next-line react/prop-types
  const countries = cities.reduce((arr, city) => {
    {
      if (!arr.map((el) => el.country).includes(city.country))
        return [...arr, { country: city.country, emoji: city.emoji }];
      else return arr;
    }
  }, []);
  return (
    // eslint-disable-next-line react/prop-types
    <ul className={styles.countryList}>
      {/* eslint-disable-next-line react/prop-types */}
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
