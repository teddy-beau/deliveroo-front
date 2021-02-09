import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, handleAddItem, handleRemoveItem }) => {
   let subTotal = 0;
   let delivery = 2.5;

   return (
      <aside className="cart">
         <button className={cart.length > 0 ? "active" : ""}>
            Valider mon panier
         </button>
         {cart.length > 0 ? (
            <div>
               <div className="order-details">
                  {cart.map((item) => {
                     subTotal += item.quantity * item.price;
                     console.log("Cart length", cart.length);
                     return (
                        item.quantity > 0 && (
                           <div key={item.id}>
                              <div>
                                 <FontAwesomeIcon
                                    icon="minus-circle"
                                    style={{ color: "#2acdbd" }}
                                    onClick={() => handleRemoveItem(item)}
                                 />
                                 <span> {item.quantity} </span>
                                 <FontAwesomeIcon
                                    icon="plus-circle"
                                    style={{ color: "#2acdbd" }}
                                    onClick={() => handleAddItem(item)}
                                 />
                              </div>
                              <div>{item.title}</div>
                              <div>
                                 {Number(item.price)
                                    .toFixed(2)
                                    .replace(".", ",")}
                              </div>
                           </div>
                        )
                     );
                  })}
               </div>
               <div className="pricing-details">
                  <div>
                     Sous-total = {subTotal.toFixed(2).replace(".", ",")}
                  </div>
                  <div>
                     Frais de livraison ={" "}
                     {delivery.toFixed(2).replace(".", ",")}
                  </div>
               </div>
               <div className="total">
                  Total = {(subTotal + delivery).toFixed(2).replace(".", ",")}
               </div>
            </div>
         ) : (
            <span>Votre panier est vide</span>
         )}
      </aside>
   );
};

export default Cart;
