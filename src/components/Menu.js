import Meal from "./Meal";

const Menu = ({ data }) => {
   return (
      <div className="container comp-menu">
         <div className="content">
            <div className="menu-items">
               {data.map((category, index) => {
                  return (
                     <section key={index}>
                        <h2>{category.name}</h2>
                        <div className="meal-list">
                           <Meal meals={category.meals} />
                        </div>
                     </section>
                  );
               })}
            </div>
            <aside className="cart">Votre panier est vide</aside>
         </div>
      </div>
   );
};

export default Menu;
