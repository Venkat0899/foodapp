import { useEffect, useState } from "react"
import styles from './search.module.css'

export default function Search({setfooddata})
{
    
    const [Query,setquery]=useState("pizza")

    const URL="https://api.spoonacular.com/recipes/complexSearch"+"?query="+Query+"&apiKey="+"29b11d7d10da4c1ab877fc69ff5cab34";
    
    useEffect(()=>{
       async function fetching()
        {
            const data=await fetch(URL)
           const res=await data.json()
           
            setfooddata(res.results);
        }
        fetching();
        //eslint-disable-next-line
    } ,[Query])
    return(
        <div className={styles.searchcontainer}>
        <input className={styles.searchinput} value={Query} onChange={(e)=>setquery(e.target.value)} type="text" />
       
        </div>
    )
}