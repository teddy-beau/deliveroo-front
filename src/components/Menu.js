// import { useState } from "react";
import Meal from "./Meal";

const Menu = ({ data, cart, setCart }) => {
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
                                 data={data}
                                 meal={meal}
                                 cart={cart}
                                 setCart={setCart}
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
