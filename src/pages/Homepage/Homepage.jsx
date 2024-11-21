import React, {useContext, useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'

function Homepage() {
    // use global state for darkMode
    // Use {} NOT []
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    //create state for the characters
    const [characters, setCharacters] = useState([])

    //this page shows characters when it loads
    //https://rickandmortyapi.com/api/character

    useEffect(
        ()=>{
            console.log('homepage loaded')
            //make api call to get character data
            axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                console.log(res.data.results)
                //I have data, where do I store it?
                //store in state
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))

        }, [] //run once when the page loads

    )

  return (
    <div className={darkMode?"home-container home-dark" :"home-container"}>
        <Search setCharacters={setCharacters} />
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                characters.map(item => <CharacterCard
                    key={item.id} character={item}/>)
                
                //characters.map(item => <p key={item.id}>{item.name}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage