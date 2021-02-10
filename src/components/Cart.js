import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, handleAddItem, handleRemoveItem }) => {
   let subTotal = 0;
   let delivery = 2.5;

   return (
      <aside className="cart">
         <button
            className={cart.length > 0 ? "active" : ""}
            onClick={() => {
               if (cart.length > 0) {
                  alert("Sorry, I can't accept your money ;)");
               }
            }}
         >
            Valider mon panier
         </button>
         {cart.length > 0 ? (
            <div>
               <div className="order-details">
                  {cart.map((item) => {
                     subTotal += item.quantity * item.price;
                     console.log("Cart", cart);
                     return (
                        item.quantity > 0 && (
                           <div key={item.id}>
                              <div>
                                 <FontAwesomeIcon
                                    icon="minus-circle"
                                    style={{
                                       color: "#2acdbd",
                                       cursor: "pointer",
                                    }}
                                    onClick={() => handleRemoveItem(item)}
                                 />
                                 <span
                                    style={{
                                       width: 25,
                                       textAlign: "center",
                                       color: "#868a8a",
                                    }}
                                 >
                                    {" "}
                                    {item.quantity}{" "}
                                 </span>
                                 <FontAwesomeIcon
                                    icon="plus-circle"
                                    style={{
                                       color: "#2acdbd",
                                       cursor: "pointer",
                                    }}
                                    onClick={() => handleAddItem(item)}
                                 />
                              </div>
                              <div>{item.title}</div>
                              <div>
                                 {Number(item.price * item.quantity)
                                    .toFixed(2)
                                    .replace(".", ",")}
                                 &nbsp;€
                              </div>
                           </div>
                        )
                     );
                  })}
               </div>
               <div className="pricing-details">
                  <div>
                     <div>Sous-total</div>
                     <div>{subTotal.toFixed(2).replace(".", ",")}&nbsp;€</div>
                  </div>
                  <div>
                     <div>Frais de livraison</div>
                     <div>{delivery.toFixed(2).replace(".", ",")}&nbsp;€</div>
                  </div>
               </div>
               <div className="total">
                  <div>Total</div>
                  <div>
                     {(subTotal + delivery).toFixed(2).replace(".", ",")}&nbsp;€
                  </div>
               </div>
            </div>
         ) : (
            <span>Votre panier est vide</span>
         )}
      </aside>
   );
};

export default Cart;
