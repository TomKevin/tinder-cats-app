import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Layout, Menu } from 'antd';
import './css/Main.css';

const { Header, Content, Footer } = Layout;

class Main extends Component {

    render() {

        const { location } = this.props;

        return (

            <Layout>

                <Helmet>

                    <title>Tinder Cat App</title>

                </Helmet>

                <Header className="header">

                    <Row>

                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>

                            <div className="logo">

                                <h1>Tinder Cat App</h1>

                            </div>

                        </Col>

                        <Col xs={12} sm={12} md={16} lg={16} xl={16} className="menu-wrapper">

                            <Menu

                                mode="horizontal"

                                defaultSelectedKeys={[location.pathname]}

                                className="menu"

                            >

                                <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>

                            </Menu>

                        </Col>

                    </Row>

                </Header>

                <Content className="content-wrapper">

                    <Row>

                        <Col span={18} offset={3} className="content">
                            
                            {this.props.children}
                            
                        </Col>

                    </Row>

                </Content>

                <Footer className="footer">

                    Tinder Cat App ©{new Date().getFullYear()}. All Rights Reserved

                </Footer>
                
            </Layout>

        )

    }

};

export default withRouter(Main);
