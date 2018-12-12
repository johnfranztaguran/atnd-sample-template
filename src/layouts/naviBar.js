import React from 'react';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const NaviBar = () => {
    return (
    <Header className="header">
      <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Teams</Menu.Item>
        <Menu.Item key="3">Todo</Menu.Item>
      </Menu>
    </Header>
    )
}
export default NaviBar;