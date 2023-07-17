import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'

function Homepage() {
    //create state for the characters

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
            })
            .catch(err => console.log(err))

        }, [] //run once when the page loads

    )

  return (
    <div className="home-container">
        <h1>Main Characters</h1>
        <div className="characters-container">
            Characters go here
        </div>
    </div>
  )
}

export default Homepage