import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState("thin");

  const prices = {
    sizes: { small: 8, medium: 10, large: 12 },
    toppings: 1,
    crusts: { thin: 0, thick: 2, glutenFree: 3 },
  };

  const availableToppings = ["Pepperoni", "Mushrooms", "Onions"];

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleToppingChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const handleCrustChange = (e) => {
    setCrust(e.target.value);
  };

  const calculatePrice = () => {
    const sizePrice = prices.sizes[size];
    const toppingsPrice = toppings.length * prices.toppings;
    const crustPrice = prices.crusts[crust];
    return sizePrice + toppingsPrice + crustPrice;
  };

  return (
    <div className="App">
      <h1>Pizza Order Calculator 🍕</h1>
      <form>
        <div>
          <h2>Select Size</h2>
          {Object.keys(prices.sizes).map((s) => (
            <label key={s}>
              <input
                type="radio"
                value={s}
                checked={size === s}
                onChange={handleSizeChange}
              />
              {s.charAt(0).toUpperCase() + s.slice(1)} ($
              {prices.sizes[s]})
            </label>
          ))}
        </div>

        <div>
          <h2>Select Toppings</h2>
          {availableToppings.map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                value={topping}
                checked={toppings.includes(topping)}
                onChange={handleToppingChange}
              />
              {topping} ($1 each)
            </label>
          ))}
        </div>

        <div>
          <h2>Select Crust</h2>
          <select value={crust} onChange={handleCrustChange}>
            {Object.keys(prices.crusts).map((c) => (
              <option key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)} ($
                {prices.crusts[c]})
              </option>
            ))}
          </select>
        </div>
      </form>

      <h2>
        Total Price: ${calculatePrice()}
      </h2>
    </div>
  );
};

export default App;
