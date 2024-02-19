import { useState,useEffect } from "react";
import styles from './fooddetail.module.css'
import Ingredients from "./Ingredients";
export default function Fooddetails({foodid})
{
    const [food,setfood]=useState({})
    const [isloading,setloading]=useState(true)
    const url="https://api.spoonacular.com/recipes/"+foodid+"/information"+"?apiKey="+"29b11d7d10da4c1ab877fc69ff5cab34";
    useEffect(()=>
        {
            async function fetchfood()
            {
                const res=await fetch(url)
                const data=await res.json()
                console.log(data)
                setfood(data)
                setloading(false)
            }
            fetchfood()
             //eslint-disable-next-line
        },[foodid])
    return(
        <div>
        <div className={styles.recipecard} >
        <h1 className={styles.recipename}>{food.title}</h1> 
        <img className={styles.recipeimage} src={food.image} alt="" />
        <div className={styles.recipedetails}>
        <span>
         <strong>⏱️{food.readyInMinutes}Minutes</strong>
        </span>
        <span>
        👪<strong>Serves {food.servings}</strong>
        </span>
        <span>
        {food.vegetarian ?"🥕Vegetarian":"🍗Non-Vegetarian"}
        </span>
        </div>
        <div>
        <span>
        💲{food.pricePerServing/100 }Per Serving
        </span>
        </div>
        <h2>Ingredients</h2>
        <Ingredients food={food} isloading={isloading} />
        <h2>Instructions</h2>
       <div className={styles.recipeinstructions}> 
     <ol>
       {isloading?<p> Loading.. </p> :
        food.analyzedInstructions[0].steps.map((step)=>(
        <li key={step.number}>{step.step}</li>
       )
        
        )
       }
       </ol>
       </div>
      
       </div>
      
        </div>
    )
}