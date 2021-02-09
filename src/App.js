import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusCircle, faMinusCircle);

function App() {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   // Fetching data from API
   const fetchData = async () => {
      try {
         const response = await axios.get(
            "https://deliveroo-clone-back.herokuapp.com/"
         );
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
         <MainContent data={data.categories} />
         <Footer />
      </>
   );
}

export default App;
