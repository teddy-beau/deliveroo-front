const Meal = ({ meal, cart, setCart }) => {
   // Deal with descriptions when too long
   let shortDescription = "";
   const wordsInDescription = meal.description.split(" ");
   if (wordsInDescription.length > 6 && meal.picture) {
      shortDescription = wordsInDescription.splice(0, 6).join(" ") + "...";
   } else if (wordsInDescription.length >= 16 && !meal.picture) {
      shortDescription = wordsInDescription.splice(0, 16).join(" ") + "...";
   } else {
      shortDescription = meal.description;
   }

   const handleAddToCart = () => {
      if (cart.length === 0) {
         const newCart = [...cart];
         newCart.push({
            id: meal.id,
            quantity: 1,
            name: meal.name,
            price: meal.price,
         });
         setCart(newCart);
      } else {
         const newCart = [...cart];
         newCart.map((newCartItem) => {
            if (newCartItem.id === meal.id) {
               newCartItem.quantity += 1;
               setCart(newCart);
            } else {
               newCart.push({
                  id: meal.id,
                  quantity: 1,
                  name: meal.name,
                  price: meal.price,
               });
               setCart(newCart);
            }
         });
      }
   };
   return (
      // Return a card with the meal details
      <div className="meal-card" onClick={handleAddToCart}>
         <div>
            <h3>{meal.title}</h3>
            <p>{shortDescription}</p>
            <div>
               <span className="price">{meal.price.replace(".", ",")}</span>
               {meal.popular && <span className="popular">Populaire</span>}
            </div>
         </div>
         {meal.picture && <img src={meal.picture} alt={meal.title} />}
      </div>
   );
};

export default Meal;
