import React from 'react';
import {
    Breadcrumb
  } from 'antd';

const LayoutMenu = () => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Favorite</Breadcrumb.Item>
          <Breadcrumb.Item>Choose</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default LayoutMenu;