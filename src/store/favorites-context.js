<<<<<<< HEAD
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
    

});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
        
        
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
        
    }
    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
=======
// import { createContext, useState } from 'react';

// const FavoritesContext = createContext({
//     favorites: [],
//     totalFavorites: 0
// });

// function FavoritesContextProvider(props){
//     const [userFavorites, setUserFavorites] = useState([]);

//     function addFavrite

//     const context = {
//         favorites: userFavorites,
//         totalFavorites: userFavorites.length,
//     };


//     return <FavoritesContext.Provider value={context}>
//         {props.children}
//     </FavoritesContext.Provider>
// }
>>>>>>> ad76d90b17962770eded0240bd41808bd636001a
