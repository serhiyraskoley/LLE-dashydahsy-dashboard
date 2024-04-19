import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import LeftSidebar from "./components/LeftSidebar";
import CustomCards from "./components/Cards";
import Favorites from "./components/Favorites";
import cardData from './card.json';
import './App.css';

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

  const handleRemoveFavorite = (card) => {
    const updatedFavorites = favorites.filter(favorite => favorite.name !== card.name);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  const handleAddFavorite = (card) => {
    const updatedFavorites = [...favorites, card];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  return (
      <Layout>
        <LeftSidebar cards={filteredCards} onSearchChange={handleSearchChange} />
        <Layout style={{ marginLeft: 245 }}>
          <Content>
            <Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
            <CustomCards cards={filteredCards} favorites={favorites} onAddFavorite={handleAddFavorite} onRemoveFavorite={handleRemoveFavorite} />
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;