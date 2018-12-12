import React, { Component } from 'react';
import {
    Layout, Menu, Icon,
  } from 'antd';

const uuidv4 = require('uuid/v4')

const { SubMenu } = Menu;
const { Sider } = Layout;

const urlTeam = 'https://api.opendota.com/api/teams';

class SideData extends Component {
    constructor() {
        super()
        this.state = { 
            fetchData: [],
            id: uuidv4
         }
    }

    componentDidMount() {
        console.log('======= did mount =====')
        fetch(urlTeam)
        .then(res => res.json())
        .then(fetchData => this.setState({fetchData}))
    }
    
    render() {
        const listData = this.state.fetchData.map(datahere => {
            return (
                <Menu.Item  key={this.state.id} >{datahere.name}</Menu.Item>
            )
        }) 

        if(!this.state.fetchData.length){
            return <div>Loading...</div>;
        }

        return ( 
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <SubMenu key="sub1" title={<span><Icon type="team" />Fetch Here</span>}>
                    {listData}
                </SubMenu>
                </Menu>
            </Sider>
         );
    }
}
 
export default SideData;
