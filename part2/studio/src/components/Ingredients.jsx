import jsonData from './recipe.json';

function IngredientList() {
   const ListOfIngredients = (props) => {
    return props.map((ingredient) => <li key= {props.index}>{ingredient}</li>);
   };
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>{ListOfIngredients(jsonData[0]["ingredients"])}</ul>
    </div>
   )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 