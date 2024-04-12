import React, { useState } from 'react';
import { Layout } from 'antd';
import LeftSidebar from "./components/LeftSidebar";
import CustomCards from "./components/Cards";
import cardData from './card.json';

const App = () => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }

  const filteredCards = cardData.filter(card => card.maintainer.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
      <Layout>
        <LeftSidebar cards={filteredCards} onSearchChange={handleSearchChange} />
          <CustomCards cards={filteredCards} />
      </Layout>
  );
}

export default App;
