import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.pinterest.com/bakerbynature/";
   let authorPhoto = "https://bakerbynature.com/wp-content/uploads/2021/06/ashley.jpeg";
   let authorName = "Ashley Manila";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["chocolate", "cream cheese", "sugar", "cocoa powder", "heavy cream"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Ultimate Chocolate Cheesecake</h1>
            <p>This Ultimate Chocolate Cheesecake features a chocolate cookie crust, creamy chocolate cheesecake filling, chocolate ganache, and shaved chocolate! Made with basic ingredients you probably have in your kitchen right now. Simply put, this is the best chocolate cheesecake recipe you’ll ever try!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://bakerbynature.com/wp-content/uploads/2019/04/Ultimate-Chocolate-Cheesecake.jpg" alt="Ultimate Chocolate Cheesecake" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
