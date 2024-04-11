
import React, { useState, useEffect } from "react";
import LeftSidebar from "./components/LeftSidebar";
import { cardData } from './card.json';
import { Layout, Typography, Card, Row, Col, Badge, Tag, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { truncate } from 'lodash';
const { Meta } = Card;
const { Content } = Layout;
library.add(fas);
const App = () => {
  
  
  return (
    <LeftSidebar />
  );
}


export default App;
