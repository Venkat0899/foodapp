import Ingredientitem from "./Ingredientitem";

export default function Ingredients({food,isloading})
{
   return(
    <div>
    {isloading?(<p>Loading..</p>):(food.extendedIngredients.map((item)=>(
<Ingredientitem key={item.id} item={item}/>
     
  )))
   
   
   }
    
    
    </div>
   ) 
}