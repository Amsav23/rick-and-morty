import {useState, createContext, useEffect} from 'react'

//create context
export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create the global state
    const [favorites, setFavorites] = useState([])

    //this one is for retrieving from localStorage
    //this useEffect REMEMBERS if the user favorites a character
    useEffect(
        () => {
            //when page loads, check if there is value in localStorage
            const storedFavorites = localStorage.getItem('favoritesList')
            // console.log(storedFavorites)
            //if there was a value, use it
            if (storedFavorites){
                //parse converts from string to its datatype
                setFavorites(JSON.parse(storedFavorites))
            }
            //otherwise will use default state value

        }, []
    )

    //this one is for saving to localStorage
    useEffect(
        () => {
            //save current state to localStorage
            //stringify converts to JSON string format
            localStorage.setItem('favoritesList', JSON.stringify(favorites))

        }, [favorites] //runs anytime favoritesList changes
    )


    //this function will add a character to the list
    const addCharacter = (charToAdd) => {
        console.log('adding', charToAdd)
        //this verifies that I have the data of the character to add

        let newFavorites = [...favorites, charToAdd]
        console.log(newFavorites)
        //update state
        setFavorites(newFavorites)
    }

    const removeCharacter = (charId) => {
        console.log('remove', charId)
        //use filter to KEEP all that are not charId
        let newFavorites = favorites.filter(item => item.id != charId)
        console.log(newFavorites)
        //update state
        setFavorites(newFavorites)
    }
    
    return(
        <FavoritesContext.Provider value={{favorites, addCharacter, 
        removeCharacter}} >
            {props.children}
        </FavoritesContext.Provider>
    )


}