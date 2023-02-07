import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('allItems')
  function updatedSelection(e){
    setSelectedCategory(e.target.value)}

    const updatedItems = items.filter(item => {
      if (selectedCategory === "allItems") {
        return true;
      } else {
        return item.category === selectedCategory;
      }

    });
  
    const selectionList = updatedItems.map((item) => (<Item key={item.id} name={item.name} category={item.category}/>));
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onchange={updatedSelection} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectionList}
      </ul>
    </div>
  );
}


export default ShoppingList;
