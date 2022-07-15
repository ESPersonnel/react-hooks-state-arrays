import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
  }

  // remove food from the list
  // const foodList1 = foods.map((food) => (
  //   <li 
  //     key={food.id}
  //     onClick={() => {
  //       const newFoods = foods.filter((f) => f.id !== food.id);
  //       setFoods(newFoods);
  //     }
  //     }
  //   >
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  // update using the click event on the list item to increase the heat level by 1
  const foodList = foods.map((food) => (
    <li
      key={food.id}
      onClick={() => {
        const newFoods = foods.map((f) => {
          if (f.id === food.id) {
            return { ...f, heatLevel: f.heatLevel + 1 };
          }
          return f;
        }
        );
        setFoods(newFoods);
      }
      }
    >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      {/* <ul>{foodList1}</ul> */}
    </div>
  );
}

export default SpicyFoodList;
