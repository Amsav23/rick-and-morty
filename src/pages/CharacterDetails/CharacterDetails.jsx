import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CharacterDetails.css'
import axios from 'axios'

function CharacterDetails() {
    //this page shows details about a specific character
    //the character id is in the url

    //extract characterId from url
    const {characterId} = useParams()
    //I need to get details for this character when the page loads
    //https://rickandmortyapi.com/api/character/5

    //create state for data for this character
    const [character, setCharacter] = React.useState()

    useEffect (
        () => {
            console.log('get data for character', characterId)
            //call API to get data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

        }, [] //run once when the page loads
    )


  return (
    <div>CharacterDetails {characterId}</div>
  )
}

export default CharacterDetails