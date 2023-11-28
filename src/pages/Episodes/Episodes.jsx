import React, { useEffect } from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Episodes() {
  //create state for the array of options
  const [options, setOptions] = React.useState([])

  //state for option selected
  const [selectedOption, setSelectedOption] = React.useState(1)

  //state for episode info
  const [selectedEpisode, setSelectedEpisode] = React.useState('')

  //state for characters
  const [characterList, setCharacterList] = React.useState([])

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

  //this useEffect runs anytime selectedOption changes
  useEffect (
    () => {
      console.log('selected episode', selectedOption)
      //make API calls
      fetchEpisodeData()

    }, [selectedOption]
  )

  //https://rickandmortyapi.com/api/episode/2
  const fetchEpisodeData = async () => {
    console.log('make API call')
    try {
      //make API call to get data episode data
        const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
        console.log(res.data)
        //store in state
        setSelectedEpisode(res.data)

        console.log(res.data.characters)
        //we need to make all these API calls to get character data
        const episodeCharacters = await Promise.all (
          res.data.characters.map(url => {
            return axios.get(url).then(res => res.data)
          })
        )
        console.log(episodeCharacters)
        //store in state
        setCharacterList(episodeCharacters)

    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSelectChange = (e) => {
    //what number was selected?
    console.log('episode selected', e.target.value)
    //store in state
    setSelectedOption(e.target.value)
  }

  return (
    <div className='episodes-container'>
      <div>
        <label htmlFor='select-episode'>Select an episode: </label>
        <select id='select-episode' onChange={handleSelectChange}>
          {
            options.map(num => <option key={num} value={num}>{`Episode ${num}`}</option>)
          }
        </select>
      </div>

      <div>
        <div className='episode-data'>
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className='character-container'>
          {
            characterList.map(item => <CharacterCard
              key={item.id} character={item}/>)
          }
        </div>

      </div>

    </div>
  )
}

export default Episodes