import Meal from "./Meal";
import Cart from "./Cart";

const Menu = ({ data }) => {
   return (
      <div className="container comp-menu">
         <div className="content">
            <div className="menu-items">
               {data.map((category, index) => {
                  return (
                     category.meals.length !== 0 && (
                        <section key={index}>
                           <h2>{category.name}</h2>
                           <div className="meal-list">
                              <Meal meals={category.meals} />
                           </div>
                        </section>
                     )
                  );
               })}
            </div>
            <Cart />
         </div>
      </div>
   );
};

export default Menu;
