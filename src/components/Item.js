import React, {useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false)

  function handleAddItemToCart(){
    setAddItem(addItem => !addItem)
  }
  const itemClass = addItem ? "in-cart": "";
  const buttonClass = addItem ? "remove" : "add"
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddItemToCart}>{addItem ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
