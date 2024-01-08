import React, { useContext } from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext'


function CharacterCard({character}) {
  //get the global state
  //NOTE {} NOT []
  const {addCharacter, favorites, removeCharacter} = useContext(FavoritesContext)

  //start with a variable to test UI
  //const isFavorite = false;
  //change to state in order to toggle it
  const [isFavorite, setIsFavorite] = React.useState(false)

  //how do we know if this particular character is in favorites?
  React.useEffect(
    () => {
      //is character in favorites?
      setIsFavorite(favorites?.find(item => item.id===character.id))

    }, [favorites] //runs anytime favorites changes

  )

  return (
    <div className="character-card">
        <img src={character.image} />
        <p>{character.name}</p>
        <Link to={`/details/${character.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart onClick={() => removeCharacter(character.id)}
          className='heart-icon' />
          :
          <FaRegHeart onClick={() => addCharacter(character)}
          className='heart-icon' />
        }
    </div>
  )
}

export default CharacterCard