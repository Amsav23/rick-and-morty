import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //create state for textbox data
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e) => {
        //stop the form from refreshing the page
        e.preventDefault()
        console.log('search for', query)

        //need to get characters that match this query
        //https://rickandmortyapi.com/api/character/?name=beth

        //make API call to get data
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res => {
            console.log(res.data.results)
            //I have the data, what do I do with it?

            //change what is in characters
            setCharacters(res.data.results)
        })
        .catch(err => {
            //console.log(err.response.status)
            if (err.response.status === 404) {
                alert(`There is no character named ${query}`)
            }
            else {
                console.log(err)
            }
        })

        //clear textbox
        setQuery('')

    }


  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" value={query} placeholder="Search all characters"
               onChange={(e)=>setQuery(e.target.value)}
        />
    </form>
  )
}

export default Search