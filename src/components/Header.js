import logo from "../assets/images/deliveroo-logo.svg";

const Header = () => {
   return (
      <div className="container header">
         <header>
            <img src={logo} alt="Deliveroo logo" />
         </header>
      </div>
   );
};

export default Header;
