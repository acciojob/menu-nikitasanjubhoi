import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  // Menu data
  const menuData = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Omelette", category: "Breakfast", price: "$6", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Burger", category: "Lunch", price: "$8", img: "https://via.placeholder.com/100" },
    { id: 4, name: "Pizza", category: "Lunch", price: "$10", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Chocolate Shake", category: "Shakes", price: "$4", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Strawberry Shake", category: "Shakes", price: "$4", img: "https://via.placeholder.com/100" },
  ];

  const [items, setItems] = useState(menuData);

  // filter function
  const filterItems = (category) => {
    if (category === "All") {
      setItems(menuData);
    } else {
      const filtered = menuData.filter((item) => item.category === category);
      setItems(filtered);
    }
  };

  return (
    <div id="main">
      <h1>Menu Application</h1>

      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>Shakes</button>
        <button onClick={() => filterItems("All")}>All</button>
      </div>

      <div className="menu-container">
        {items.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


