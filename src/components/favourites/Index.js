import React, { Component } from 'react';
import Layout from './../layout/Main';
import { Link } from 'react-router-dom';
import { StarOutlined, LikeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'antd';
import { getFavourites, deleteFavourite } from './../../store/actions/favouriteActions';
import './css/Index.css';

class Index extends Component {

    componentDidMount = async () => {

        await this.props.getFavourites();

    }

    removeFavourite = async (id) => {

        try {

            const result = await this.props.deleteFavourite(id);

            if(result) {

                await this.props.getFavourites();

            }
            
        } catch (error) {

            throw error;
            
        }

    }

    render() {

        const { favourites } = this.props;

        return (

            <Layout>

                <Row gutter={[16, 16]}>

                    {favourites.map((favourite, i) => 
                            
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>

                            <Card

                                hoverable

                                style={{ width: '100%' }}

                                cover={<Link to={`/cats/${favourite.image.id}`}><img alt={favourite.image.id} style={{ height: '100%', objectFit: 'cover', width: '100%' }} src={favourite.image.url} /></Link>}

                            >

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Button type="danger" icon={<StarOutlined/>} onClick={() => this.removeFavourite(favourite.id)}> Remove Favourite</Button>

                                    <Button type="primary" icon={<LikeOutlined />}>Like</Button>

                                </div>

                            </Card>

                        </Col>
                            
                    )}

                </Row>
                
            </Layout>

        )

    }

};

const mapStateToProps = (state, ownProps) => {

    return {

        favourites: state.favourites

    }

};

export default connect(mapStateToProps, { getFavourites, deleteFavourite })(Index);
