import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        onDarkModeClick={() => onDarkModeClick()}
        isDarkMode={isDarkMode}
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

// ShoppingList holds state for what's inCart,
// and Filter holds state for what's displayed
