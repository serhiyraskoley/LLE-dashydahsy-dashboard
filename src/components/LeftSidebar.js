import React from 'react';
import { Layout, Typography, Divider, Input, Statistic } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/rocket-logo.gif';
import CountUp from 'react-countup';

const { Sider } = Layout;
const { Link } = Typography;

const formatter = (value) => <CountUp end={value} duration={1} />;

const LeftSidebar = ({ cards, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  }
  return (
      <Sider className="sider-container" theme="light" width="250" >
        <div className="content-style">
          <Divider />
          <div className="image-container">
            <div className='circle-style'>
              <img src={logo} width={"70px"} className='rocket' alt="logo" />
            </div>
          </div>
          <Divider />
          <p><Input placeholder="Search by maintainer" allowClear onChange={handleSearchChange} /></p>
          <Divider />
          <Statistic title="Projects" value={cards.length} className="center-text" formatter={formatter}/>
          <Divider />
          <Link href="#" target="_blank" className="center-text">
            <p>You can see our progress on the</p> public dashboard
          </Link>
          <Divider />
          Made with
          <p>
            <FontAwesomeIcon icon="fa-heart" size="4x" color="#C13540" />
          </p>
          by
          <p><span className="me span-style">IT department</span></p>
          <Divider />
        </div>
      </Sider>
  );
};

export default LeftSidebar;