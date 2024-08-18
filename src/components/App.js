import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setdarkMode]= useState('');

  const handleMode= () => {
    setdarkMode(prevMode=> !prevMode);
  }

  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{darkMode ? 'Switch to light mode':'Switch to dark mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
