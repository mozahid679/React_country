import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Country from "./Components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1> Country loaded: {countries.length} </h1>
      <h4>Country Added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      {countries.map((country) => (
        <Country
          country={country}
          handleAddCountry={handleAddCountry}
          key={country.alpha3Code}
        ></Country>
      ))}

      <header className="App-header"></header>
    </div>
  );
}

export default App;
