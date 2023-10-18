import React from 'react'
import './Search.css'

function Search() {
    //create state for textbox data
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e) => {
        //stop the form from refreshing the page
        e.preventDefault()
        console.log('search for', query)
    }



  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search all characters"
               onChange={(e)=>setQuery(e.target.value)}
        />
    </form>
  )
}

export default Search