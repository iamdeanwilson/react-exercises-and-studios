import jsonData from './recipe.json';
import "./styling.css";

function AuthorInfo() {
  const recipeAuthorImage = <img src={jsonData[0]["authorImage"]} alt = "Nora" className="authorImage" />
  const recipeAuthor = <div>{jsonData[0]["author"]}</div>
  const recipeWebsite = <a href={jsonData[0]["website"]}>Recipe Link</a> 

   return(
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 