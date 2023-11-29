import React, { useContext } from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext'

function CharacterCard({character}) {
  //get the global state
  //NOTE {} NOT []
  const {addCharacter} = useContext(FavoritesContext)

  //start with a variable to test UI
  const isFavorite = false;

  return (
    <div className="character-card">
        <img src={character.image} />
        <p>{character.name}</p>
        <Link to={`/details/${character.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart className='heart-icon' />
          :
          <FaRegHeart onClick={() => addCharacter(character)}
          className='heart-icon' />
        }
    </div>
  )
}

export default CharacterCard