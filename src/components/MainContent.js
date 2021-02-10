import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";

const MainContent = ({ data }) => {
   const [cart, setCart] = useState([]);
   // FUNCTION TO ADD ITEM TO THE CART ON CLICK
   const handleAddItem = (meal) => {
      const newCart = [...cart];
      let isInCart = false;
      // Check if the item already exists in the cart
      // On peut aussi utiliser .find() >> trouve la première occurence dans un tableau de la condition en callback ou retourne undefined >> const exist = cart.find((cartElement) => cartElement.id === meal.id); avec meal correspondant au repas clické
      for (let i = 0; i < cart.length; i++) {
         if (cart[i].id === meal.id) {
            isInCart = true;
         }
      }
      // If the item doesn't exist, it is created
      if (!isInCart) {
         console.log("New item created");
         newCart.push({
            id: meal.id,
            quantity: 1,
            title: meal.title,
            price: meal.price,
         });
         // newCart.push({ ...item, quantity: 1 }); // Alternative : copie de item auquel on ajoute ensuite une clé quantité avec la valeur 1
         setCart(newCart);
      } else {
         // Else loop through the cart and update existing item
         for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].id === meal.id) {
               console.log("1 unit added to existing");
               // Alternative : 1) on va créer une variable contenant l'index de l'item dans le cart >> const index = newCart.indexOf(exist); 2) on va modifier la quantité de l'item dans le panier grâce à l'index créé >> newCart[index].quantity++; 3) on met à jour le panier >> setCart(newCart);
               newCart[i].quantity += 1;
               setCart(newCart);
            }
         }
      }
   };
   // FUNCTION TO REMOVE ITEM FROM THE CART ON CLICK
   const handleRemoveItem = (meal) => {
      const newCart = [...cart];
      // Alternative : passer par l'index  comme pour l'ajout
      let isInCart = false;
      // Check if the item already exists in the cart
      for (let i = 0; i < newCart.length; i++) {
         if (newCart[i].id === meal.id) {
            isInCart = true;
         }
      }
      // If the item exists, one unit is removed from the cart
      if (isInCart) {
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
