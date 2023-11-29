import {useState, createContext, useEffect} from 'react'

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create the global state
    const [favorites, setFavorites] = useState([])

    /*
    //get inital state from localStorage when page loads
    useEffect(
        ()=>{
            //is there a value in localStorage
            const storedDarkMode = localStorage.getItem('darkMode')
            //check if something was there
            if (storedDarkMode){
                //console.log('datatype is ', typeof(storedDarkMode))
                //setDarkMode(storedDarkMode)
                //parse converts from string to its datatype
                setDarkMode(JSON.parse(storedDarkMode))
            }
            //otherwise will use default state value

        }, []
    )

    //save to localStorage whenever it changes
    useEffect(
        ()=>{
            //save current state to localStorage when it changes
            //stringify converts to JSON string format
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
            //localStorage.setItem('darkMode', darkMode)

        }, [darkMode]
    )
*/

    //this function will add a character to the list
    const addCharacter = (charToAdd) => {
        console.log('adding', charToAdd)
        //verify that I have the data of the character to add
    }
    
    return(
        <FavoritesContext.Provider value={{favorites, addCharacter}} >
            {props.children}
        </FavoritesContext.Provider>
    )


}