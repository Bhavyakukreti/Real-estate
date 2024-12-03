import React, { useState, useEffect, createContext } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData); // Default house data
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // Fetch and set unique countries and properties dynamically
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);

    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  // Handle click and filter houses based on selected values
  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => str.includes('(any)');
    const minPrice = parseInt(price.split(' ')[0]) || 0;
    const maxPrice = parseInt(price.split(' ')[2]) || Infinity;

    // Filter houses
    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return house.country === country && housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
      }
    });

    setTimeout(() => {
      setHouses(filteredHouses.length < 1 ? [] : filteredHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
