const Restaurant = ({ data }) => {
   return (
      <div className="container comp-restaurant">
         <div className="restaurant-info">
            <div>
               <h1>{data.name}</h1>
               <p>{data.description}</p>
            </div>
            <img src={data.picture} alt={data.name} />
         </div>
      </div>
   );
};

export default Restaurant;
