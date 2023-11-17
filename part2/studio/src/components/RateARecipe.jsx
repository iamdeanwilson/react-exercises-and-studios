let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];


function RateARecipe(props) {
  let rating = props.rating
  if(rating > 5 || rating < 1){
    return null
  }
  return <h1>{stars[rating-1]}</h1>
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
