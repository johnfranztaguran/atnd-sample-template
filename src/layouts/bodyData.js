import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const BodyData = () => {
    return (
        <Content style={{
            background: '#fff', padding: 24, margin: 0, minHeight: 280,
          }}
        >
            Data HEre
        </Content>
    )
}

export default BodyData;