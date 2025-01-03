import { useState } from 'react'
import './App.css';
import Card from './components/card';
import Cardlist from './components/cardlist';
import SearchForm from './components/SearchForm';




function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const handleSearch = async (query) =>{
    setLoading(true)
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    console.log(data)
    setProfiles(data.items || [])
    setLoading(false)

    
  }

  return (
    <>
    <SearchForm onSearch={handleSearch}/>
     
    <Cardlist profiles={profiles}/>  
    
    </>
  )
}

export default App
