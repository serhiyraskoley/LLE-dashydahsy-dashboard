import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import LeftSidebar from "./components/LeftSidebar";
import CustomCards from "./components/Cards";
import Favorites from "./components/Favorites";
import cardData from './card.json';

const { Content } = Layout;

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
    const favoritesFromStorage = [...favorites];
    const existingFavorite = favoritesFromStorage.find(favorite => favorite.name === card.name);

    if (existingFavorite) {
      setFavorites(favoritesFromStorage.filter(favorite => favorite.name !== card.name));
    } else {
      setFavorites([...favoritesFromStorage, { name: card.name, maintainer: card.maintainer, icon: card.icon }]);
    }
  };

  const handleRemoveFavorite = (card) => {
    setFavorites(favorites.filter(favorite => favorite.name !== card.name));
  }

  return (
      <Layout>
        <LeftSidebar cards={filteredCards} onSearchChange={handleSearchChange} />
        <Layout style={{ marginLeft: 245 }}>
          <Content>
            <Favorites cards={favorites} onFavorite={handleFavorite} onRemoveFavorite={handleRemoveFavorite} />
            <CustomCards cards={filteredCards} onFavorite={handleFavorite} favorites={favorites} />
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;