import React from 'react';
import { Typography, Divider, Card, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const { Link } = Typography;

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <React.Fragment>
      <Divider>Favorites</Divider>
      <List
        style={{ padding: 40 }}
        grid={{ gutter: 16, column: 6}}
        dataSource={favorites}
        renderItem={favorite => (
          <List.Item>
            <Card hoverable className='favorite-block'>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Link href={favorite.website} target='_blank' className='link-style' style={{ textAlign: 'center' }}><strong>{favorite.name}</strong></Link><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <FontAwesomeIcon icon={favorite.icon in fas ? fas[favorite.icon] : fas['faQuestion']} size='3x' color='#C13540' border onClick={() => onRemoveFavorite(favorite)} />
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
}

export default Favorites;