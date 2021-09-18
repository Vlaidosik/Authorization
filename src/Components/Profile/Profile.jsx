import React from 'react'
import { useDispatch } from "react-redux";
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './profile.scss'
import { PersonalArea } from "../PersonalArea/PersonalArea";
import {exitUser, viewNewPersonal} from "../../ReduxStore/reduser";
import {Statistics} from "../Statistics/Statistics";

const { SubMenu } = Menu;
const { Header,  Sider } = Layout;


export const Profile = () => {

    const dispatch = useDispatch()
    const viewPersonal = () => {
        dispatch(viewNewPersonal(true, false))
    }
    const viewStatistics = () => {
        dispatch(viewNewPersonal(false, true))
    }
    const exitUserPage = () => {
        dispatch(exitUser(''))
    }
    return (
        <div className='main_div'>
            <Layout className='layout'>
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Личный профиль</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider  width={200} className="site-layout-background">
                        <Menu
                            className='menu'
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="admin">

                                <Menu.Item onClick={viewPersonal} key="1">Личные данные</Menu.Item>
                                <Menu.Item onClick={viewStatistics} key="2">Последние сессии</Menu.Item>
                            </SubMenu>
                            <Menu.Item onClick={exitUserPage} key="3">Выход</Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>

                       <PersonalArea/>
                        <Statistics/>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}