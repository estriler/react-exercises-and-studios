import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((props) => (
    <div>
      <h1>{props.name}</h1>
    </div>
  ));
  return recipeName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header