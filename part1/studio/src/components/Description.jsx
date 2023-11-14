import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
       return(
            <div> 
            <div>
                <h1>Cashew Queso</h1>
                <p>Fake queso made from cashews!</p>
            </div>
            <RecipeAuthor />
            </div>
       );
    }
 }

function RecipeAuthor(){
    let authorLink = "https://www.noracooks.com/vegan-queso-dip-cashews/";
    let authorPhoto = "https://secure.gravatar.com/avatar/faee8ab17f0f1f9c45e527fb03b15d98?s=64&d=blank&r=g";
    let authorName = "Nora";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Nora" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Nora Cooks</a> 
           </div>
        </div>
     );
    }

     export default RecipeDescription;

