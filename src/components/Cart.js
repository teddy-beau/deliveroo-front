const Cart = ({ data, cart, setCart }) => {
   let subTotal = 0;
   let delivery = 2.5;

   return (
      <aside className="cart">
         <button className={cart.length > 0 ? "active" : ""}>
            Valider mon panier
         </button>
         {cart.length > 0 ? (
            <>
               <div>
                  {cart.map((item) => {
                     subTotal += item.quantity * item.price;
                     return (
                        <div key={item.id}>
                           <span>{item.quantity} • </span>
                           <span>{item.title} • </span>
                           <span>
                              {Number(item.price).toFixed(2).replace(".", ",")}
                           </span>
                        </div>
                     );
                  })}
               </div>
               <div>
                  <div>
                     Sous-total = {subTotal.toFixed(2).replace(".", ",")}
                  </div>
                  <div>
                     Frais de livraison ={" "}
                     {delivery.toFixed(2).replace(".", ",")}
                  </div>
               </div>
               <div>
                  Total = {(subTotal + delivery).toFixed(2).replace(".", ",")}
               </div>
            </>
         ) : (
            <span>Votre panier est vide</span>
         )}
      </aside>
   );
};

export default Cart;
