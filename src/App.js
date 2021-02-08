import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchData = async () => {
      try {
         const response = await axios.get("http://localhost:3000/");
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
      <div>{data.restaurant.name}</div>
   );
}

export default App;
