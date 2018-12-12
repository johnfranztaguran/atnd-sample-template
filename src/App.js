import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import NaviBar from './layouts/naviBar';
import SideData from './layouts/sideData';
import LayoutMenu from './layouts/layoutMenu';
import BodyData from './layouts/bodyData';

class App extends Component {
  state = {
    collapsed: false,
    apiData: []
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
    <Layout>
      <NaviBar />
    <Layout>
      <SideData />
      <Layout style={{ padding: '0 24px 24px' }}>
        <LayoutMenu />
        <BodyData />
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default App;
