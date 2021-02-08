const Restaurant = ({ data }) => {
   return (
      <div className="container restaurant">
         <main>
            <div>
               <h1>{data.name}</h1>
               <p>{data.description}</p>
            </div>
            <img src={data.picture} alt="Restaurant" />
         </main>
      </div>
   );
};

export default Restaurant;
