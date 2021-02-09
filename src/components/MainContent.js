import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";

const MainContent = ({ data }) => {
   const [cart, setCart] = useState([]);

   return (
      <div className="container comp-menu-cart">
         <div className="content">
            <Menu data={data} cart={cart} setCart={setCart} />
            <Cart data={data} cart={cart} setCart={setCart} />
         </div>
      </div>
   );
};

export default MainContent;
