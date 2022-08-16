import { useEffect,useState} from 'react';
import Card from '../UI/Card'
import classes from './AvailableMeal.module.css'
import Mealitem from './Mealitem/Mealitem';

  const AvailableMeal=(props)=>{
    const[meals,setMeals]=useState([])
    const [loaded,isLoaded]=useState(false)
    const [error,isError]=useState(null)
    useEffect(()=>{
      isLoaded(true)
      const fetchFood=async()=>{
        const response=await fetch('https://food-api-d657f-default-rtdb.firebaseio.com/meals.json')
        if(!response.ok)
        {
          throw new Error("Something went wrong")
        }
          const data=await response.json()
          const loadedtask=[]
          for(const key in data)
          {
            loadedtask.push({
              id:key,
              name:data[key].name,
              description:data[key].description,
              price:data[key].price
            })
          }
          setMeals(loadedtask)
          isLoaded(false)
        }
        fetchFood().catch((err)=>{
            isLoaded(false)
            isError(err.message)
          })
        
      
    },[])
    console.log(error)
    if(loaded)
    {
      return<h1 className={classes.load}>Loading Your Meal....</h1>
    }
    if(error)
    {
      return <section className={classes.error}>
        <h1>{error}</h1>
      </section>
    }
    const meallist=meals.map(meal=>
      <Mealitem
      id={meal.id} 
       key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      />
    )
    return <section className={classes.meals}>
            <Card>
            <ul>
            {meallist}
            </ul>
            </Card>
            </section>
      }  
  
  
  export default AvailableMeal