import React, { useEffect } from 'react'
import './Episodes.css'
import axios from 'axios'

function Episodes() {
  //create state for the array of options
  const [options, setOptions] = React.useState([])

  //when I select an episode, the page shows info and characters
  //from that episode

  //find out how many episodes there are
  //https://rickandmortyapi.com/api/episode
  useEffect(
    () => {
      //make api call to get number of episodes
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res => {
        console.log(res.data.info.count)
        //create an array with the numbers from 1 to this value
        const newOptions = []
        for (let i = 1; i <= res.data.info.count; i++) {
          newOptions.push(i)
        }
        console.log(newOptions)
        setOptions(newOptions)
      })
      .catch(err => console.log(err))
    }, [] //runs once when the page loads
  )

  const handleSelectChange = () => {
    console.log('episode selected')
  }

  return (
    <div className='episodes-container'>
      <div>
        <label htmlFor='select-episode'>Select an episode: </label>
        <select id='select-episode' onChange={handleSelectChange}>
          {
            options.map(num => <option>{`Episode ${num}`}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default Episodes