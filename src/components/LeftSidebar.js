import React from 'react';
import { Layout, Typography, Divider, Input, Statistic } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';
import '../assets/App.css'
import CountUp from 'react-countup';

const { Sider } = Layout;
const { Link } = Typography;

const formatter = (value) => <CountUp end={value} duration={1} />;

const LeftSidebar = ({ cards, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  }
  return (
      <Sider className="sider-container" theme="light" width="250" style={{ height: '100hv', position: 'fixed' }}>
        <div className="content-style" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
          <Divider />
          <div className="image-container">
            <div className='circle-stye'>
              <img src={logo} width={"70px"} className='rocket' alt="logo" />
            </div>
          </div>
          <Divider />
          <p><Input placeholder="Search by maintainer" allowClear onChange={handleSearchChange} /></p> {/*value={searchBy} onChange={handleSearchChange}*/}
          <Divider />
          <Statistic title="Projects" value={cards.length} className="center-text" formatter={formatter} /> {/*value={internalSoftware.length } formatter={formatter}*/}
          <Divider />
          <Link href="http://terdvp0001.sebn.com:5000/public/dashboards/zA0lU6QjX5zN2tgcExamQ91A4lLRqj32EqrLHFZq?org_slug=default" target="_blank" className="center-text">
            <p>You can see our progress on the</p> public dashboard
          </Link>
          <Divider />
          Made with
          <p>
            <FontAwesomeIcon icon="fa-heart" size="8x" color="#C13540" />
          </p>
          by
          <p><span className="me span-style">IT department</span></p>
          <Divider />
        </div>
      </Sider>
  );
};

export default LeftSidebar;