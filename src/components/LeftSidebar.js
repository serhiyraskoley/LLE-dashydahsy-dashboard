import React from 'react';
import { Layout, Typography, Divider, Input, Statistic } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';
import '../assets/App.css'

const { Sider } = Layout;
const { Link } = Typography;

const LeftSidebar = () => {
  return (
      <Sider className="sider-container" theme="light" width="250" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'fixed'}}>
        <div className="content-style">
          <Divider />
          <div className="image-container">
            <div className='circle-stye'>
              <img src={logo} width={"70px"} className='rocket' alt="logo" />
            </div>
          </div>
          <Divider />
          <p><Input placeholder="Search by maintainer" allowClear  /></p> {/*value={searchBy} onChange={handleSearchChange}*/}
          <Divider />
          <Statistic title="Projects" className="center-text"/> {/*value={internalSoftware.length } formatter={formatter}*/}
          <Divider />
          <Link href="http://terdvp0001.sebn.com:5000/public/dashboards/zA0lU6QjX5zN2tgcExamQ91A4lLRqj32EqrLHFZq?org_slug=default" target="_blank" className="center-text">
            <p>You can see our progress on the</p> public dashboard
          </Link>
          <Divider />
          Made with
          <p>
            <FontAwesomeIcon icon="fa-heart" size="8x" color="#98002e" />
          </p>
          by
          <p><span className="me span-style">IT department</span></p>
          <Divider />
        </div>
      </Sider>
  );
};

export default LeftSidebar;