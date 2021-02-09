const Cart = ({ data, cart, setCart }) => {
   // let subTotal = 0;
   // let delivery = 2.5;
   // let total = subTotal + delivery;
   // const cartContent = [1];

   return (
      <aside className="cart">
         <button
         // className={subTotal > 0 && "active"}
         >
            Valider mon panier
         </button>
         <div>
            {cart.map((item) => {
               return (
                  <div key={item.id}>
                     <span>{item.quantity} • </span>
                     <span>{item.title} • </span>
                     <span>{item.price}</span>
                  </div>
               );
            })}
         </div>
         {/* {categories.map((category, index) => {
                  return ({cartContent.length === 0 ? (
            <span>Votre panier est vide</span>
         ) : (
            <div>
               <span>{category.meals}/</span>
               <span>Menu/</span>
               <span>Price</span>
            </div>
         )})})} */}
      </aside>
   );
};

export default Cart;
