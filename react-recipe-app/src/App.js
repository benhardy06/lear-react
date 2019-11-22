import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'





const App= ()=>{
  const APP_ID = '9e72c845';
  const APP_KEY = '1811cdf3d0e5e7ff25372be5a8a255c4'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('') 
  const [query, setQuery]=useState('Chicken')
  
  useEffect(()=>{
    console.log('rendered')
    getRecipes()
  },[query])


  
  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits)
    
  }
  
const updateSearch = (e)=>{
  setSearch(e.target.value)
}

const getSearch = (e)=>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return(
    <div className="App">
    <form onSubmit={getSearch}>
      <input name="search" value={search}  onChange={updateSearch} />
      <button  onClick={getSearch}>Search</button>
      {recipes.map((info, i) =>(
        <Recipe key={i} title={info.recipe.label} calories={parseInt(info.recipe.calories)} image={info.recipe.image} />
      ))}
    </form>
    </div>
  )
}

export default App