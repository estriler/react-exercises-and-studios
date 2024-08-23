import recipedata from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipedata.map((props) => (
    <div>
      <img className="recipeImage" src={props.recipeImage} alt={props.name}/>
    </div>
  ));
   return recipeImage;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 