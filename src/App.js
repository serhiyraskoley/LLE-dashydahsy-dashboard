import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import LeftSidebar from "./components/LeftSidebar";
import CustomCards from "./components/Cards";
import Favorites from "./components/Favorites";
import cardData from './card.json';

const App = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ favorites, setFavorites ] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }

  const filteredCards = cardData.filter(card => card.maintainer.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (card) => {
    const existingCard = favorites.find(favorite => favorite.name === card.name);
    if (existingCard) {
      setFavorites(favorites.filter(favorite => favorite.name !== card.name));
    } else {
      setFavorites([...favorites, card]);
    }
  };

  const handleRemoveFavorite = (card) => {
    setFavorites(favorites.filter(favorite => favorite.name !== card.name));
  }

  return (
      <Layout>
        <LeftSidebar cards={filteredCards} onSearchChange={handleSearchChange} />
        <Favorites cards={favorites} onRemoveFavorite={handleRemoveFavorite} />
        <CustomCards cards={filteredCards} onFavorite={handleFavorite} favorites={favorites} />
      </Layout>
  );
}

export default App;