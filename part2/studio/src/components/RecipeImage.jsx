import jsonData from './recipe.json';


function RecipeImage() {
   return <img src={jsonData[0]["recipeImage"]} alt="Cashew Queso" className="recipeImage"/>
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 