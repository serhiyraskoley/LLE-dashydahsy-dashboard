import React, { useState, useEffect } from 'react';
import { Layout, Typography, Card, Row, Col, Badge, Tag, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
const { Content } = Layout;
const { Meta } = Card;
const { Link } = Typography;

const CustomCards = ({ cards, onFavorite, favorites }) => {
  const [projectCards, setProjectCards] = useState(cards.map(card => ({ ...card, showFullDescription: false, isFavorite: favorites.includes(card.name) })));

  useEffect(() => {
    setProjectCards(cards.map(card => ({ ...card, showFullDescription: false, isFavorite: favorites.includes(card.name) })));
  }, [cards, favorites]);

  const toggleDescription = (index) => {
    setProjectCards(projectCards.map((card, i) => i === index ? { ...card, showFullDescription: !card.showFullDescription } : card));
  };

  const toggleFavorite = (index) => {
    setProjectCards(projectCards.map((card, i) => {
      if (i === index) {
        const updatedCard = { ...card, isFavorite: !card.isFavorite };
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favoritesFromStorage.includes(updatedCard.name)) {
          localStorage.setItem('favorites', JSON.stringify(favoritesFromStorage.filter(favorite => favorite !== updatedCard.name)));
        } else {
          localStorage.setItem('favorites', JSON.stringify([...favoritesFromStorage, updatedCard.name]));
        }
        return updatedCard;
      }
      return card;
    }));
  };

  return (
    <Content style={{ padding: 24, margin: 0, minHeight: 480}}>
      <Row gutter={16} style={{ marginLeft: '300px' }}>
        {projectCards.map((card, index) => (
          <React.Fragment key={index}>
            <Col span={8} style={{ padding: 8}}>
              <div className='block'>
                <Card hoverable title={<Link href={card.website} target='_blank' className='link-style'>{card.name}</Link>} bordered={true} >
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                    <Meta
                      avatar={<FontAwesomeIcon icon={card.icon in fas ? fas[card.icon] : fas['faQuestion']} size='3x' color={card.isFavorite ? '#C13540' : '#363092'} border className='icon-style' onClick={() => toggleFavorite(index)} />}
                      title={card.title}
                      description={card.showFullDescription ? card.description : `${card.description.substring(0, 100)}...`}
                    />
                    <Button type="link" onClick={() => toggleDescription(index)}>{card.showFullDescription ? 'Show less' : 'Show more'}</Button>
                    <Tag color='#363092' style={{ marginTop: 16 }}>Maintainer: <strong>{card.maintainer}</strong></Tag>
                  </div>
                </Card>
              </div>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Content>
  );
}

export default CustomCards;