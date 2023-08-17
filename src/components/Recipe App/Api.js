import React, { useState } from "react";
import "./style.css";
import ShowRecipe from "./ShowRecipe";

const Api = ({ mealData }) => {
  const [selectedRecipeIndex, setselectedRecipeIndex] = useState(null);

  const closeRecipe = () => {
    setselectedRecipeIndex(null);
  };

  return (
    <>
      {
        <div className="main-card">
          {mealData.map((meal, index) => (
            <div key={index} className="meal-details">
              <div className="meal-pic">
                <img src={meal.pic} alt={meal.name} />
              </div>
              <h2 className="meal-name">{meal.name}</h2>
              <div className="meal-instructions">
                <button
                  className="RecipBtn"
                  onClick={() => setselectedRecipeIndex(index)}
                >
                  Get Recipe
                </button>
              </div>
              {selectedRecipeIndex === index && (
                <ShowRecipe
                  recipee={{
                    recipe: meal.recipee,
                    categ: meal.category,
                    pic: meal.pic,
                    name: meal.name,
                    video: meal.vid,
                  }}
                  onClose={closeRecipe}
                />
              )}
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default Api;
