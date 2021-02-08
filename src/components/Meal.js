const Meal = ({ meals }) => {
   return meals.map((meal, id) => {
      let shortDescription = "";
      const wordsInDescription = meal.description.split(" ");
      if (wordsInDescription.length > 6 && meal.picture) {
         shortDescription = wordsInDescription.splice(0, 6).join(" ") + "...";
      } else if (wordsInDescription.length >= 16 && !meal.picture) {
         shortDescription = wordsInDescription.splice(0, 16).join(" ") + "...";
      } else {
         shortDescription = meal.description;
      }

      return (
         <div className="meal-card" key={meal.id}>
            <div>
               <h3>{meal.title}</h3>
               <p>{shortDescription}</p>
               <div>
                  <span className="price">{meal.price}</span>
                  {meal.popular && <span className="popular">Populaire</span>}
               </div>
            </div>
            {meal.picture && <img src={meal.picture} alt={meal.title} />}
         </div>
      );
   });
};

export default Meal;
