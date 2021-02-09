import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";

const MainContent = ({ data }) => {
   const [cart, setCart] = useState([]);
   // FUNCTION TO ADD ITEM TO THE CART ON CLICK
   const handleAddItem = (meal) => {
      const newCart = [...cart];
      let itemInCart = false;
      // Check if the item already exists in the cart
      for (let i = 0; i < cart.length; i++) {
         if (cart[i].id === meal.id) {
            itemInCart = true;
         }
      }
      // If the item doesn't exist, it is created
      if (!itemInCart) {
         console.log("New item created");
         newCart.push({
            id: meal.id,
            quantity: 1,
            title: meal.title,
            price: meal.price,
         });
         setCart(newCart);
      } else {
         // Else loop through the cart and update existing item
         for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].id === meal.id) {
               console.log("1 unit added to existing");
               newCart[i].quantity += 1;
               setCart(newCart);
            }
         }
      }
   };
   // FUNCTION TO REMOVE ITEM FROM THE CART ON CLICK
   const handleRemoveItem = (meal) => {
      const newCart = [...cart];
      let itemInCart = false;
      // Check if the item already exists in the cart
      for (let i = 0; i < newCart.length; i++) {
         if (newCart[i].id === meal.id) {
            itemInCart = true;
         }
      }
      // If the item exists, one unit is removed from the cart
      if (itemInCart) {
         for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].id === meal.id) {
               console.log("1 unit removed from existing");
               newCart[i].quantity -= 1;
               // If the quantity is now 0 the item is removed from the cart
               if (newCart[i].quantity === 0) {
                  newCart.splice(newCart[i], 1);
                  console.log("Item removed from cart");
               }
               setCart(newCart);
            }
         }
      }
   };

   return (
      <div className="container comp-menu-cart">
         <div className="content">
            <Menu data={data} handleAddItem={handleAddItem} />
            <Cart
               cart={cart}
               handleAddItem={handleAddItem}
               handleRemoveItem={handleRemoveItem}
            />
         </div>
      </div>
   );
};

export default MainContent;
