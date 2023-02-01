import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : ""
  const btnContent = isInCart ? "Remove From Cart" : "Add to Cart"

  function handleAddItem() {
    setIsInCart(!isInCart)
  }
  


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>{btnContent}</button>
    </li>
  );
}

export default Item;
