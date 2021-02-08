import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";

function App() {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchData = async () => {
      try {
         const response = await axios.get("http://localhost:3100");
         //  console.log(response.data);
         setData(response.data);
         setIsLoading(false);
      } catch (error) {
         alert("An error occured!");
      }
   };

   useEffect(() => fetchData(), []);

   return isLoading ? (
      <span>En cours de chargement...</span>
   ) : (
      <>
         <Header />
         <Restaurant data={data.restaurant} />
         <Menu data={data} />
      </>
   );
}

export default App;
