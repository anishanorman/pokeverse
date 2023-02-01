import React, { createContext, useState } from 'react';

const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(fav) {
    // copy the current favorites array and add the new favorite to it
    setFavourites([...favourites, fav]);
  }

  function removeFavourite(name) {
    // copy the current favorites array filtering out the pokemon with the given name
    setFavourites(favourites.filter((fav) => name !== fav));
  }

  return (
    <FavouritesContext.Provider value={{favourites, addFavourite, removeFavourite}}>
      {children}
    </FavouritesContext.Provider>
  );
}

export { FavouritesProvider, FavouritesContext }