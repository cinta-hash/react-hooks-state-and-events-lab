import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  const [darkMode, setDarkMOde] = useState(false)

  function handleDarkModeClick(){
  setDarkMOde(darkMode => !darkMode)
  }
  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{darkMode ? "light mode" : "Dark mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
