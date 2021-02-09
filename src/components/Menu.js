// import { useState } from "react";
import Meal from "./Meal";

const Menu = ({ data, handleAddItem }) => {
   return (
      <div className="menu-items">
         {/* Map function to loop through each category */}
         {data.map((category, index) => {
            return (
               // Make sure to not display empty categories
               category.meals.length !== 0 && (
                  // Create a section for each category
                  <section key={index}>
                     <h2>{category.name}</h2>
                     <div className="meal-list">
                        {/* Loop through each meal to create its card */}
                        {category.meals.map((meal) => {
                           return (
                              <Meal
                                 key={meal.id}
                                 meal={meal}
                                 handleAddItem={handleAddItem}
                              />
                           );
                        })}
                     </div>
                  </section>
               )
            );
         })}
      </div>
   );
};

export default Menu;
