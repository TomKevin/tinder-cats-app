import React, { Component } from 'react';
import { Row, Col, Carousel, Card, Button } from 'antd';
import { StarOutlined, LikeOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getImages } from './../store/actions/imageActions';
import  { saveAsFavourite } from './../store/actions/favouriteActions';
import Layout from './layout/Main';

class Index extends Component {

    componentDidMount = async () => {

        await this.props.getImages();

    }

    saveFavourite = async (id) => {

        try {

            const obj = {};

            obj.image_id = id;

            const result = await this.props.saveAsFavourite(obj);

            if(result) {

                return this.props.history.push('/favourites');

            }
            
        } catch (error) {

            console.log(error);
            
        }

    }

    render() {

        const { images: { images } } = this.props;

        return (

            <Layout>

                <Row>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ margin: '2em 0' }}>

                        <Carousel autoplay={true} dotPosition="bottom" effect="fade">

                            {images.map((image, i) => 
                            
                                <div key={i} className="carousel-item"><img src={image.url} alt={image.original_filename} className="carousel-img" /></div>
                            
                            )}

                        </Carousel>

                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                        <Row gutter={[16, 16]}>
        
                            {images.map((image, i) => 
                            
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>

                                    <Card

                                        hoverable

                                        style={{ width: '100%' }}

                                        cover={<Link to={`/cats/${image.id}`}><img alt={image.original_filename} style={{ height: '100%', objectFit: 'cover', width: '100%' }} src={image.url} /></Link>}

                                    >

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                            <Button type="primary" icon={<StarOutlined/>} onClick={() => this.saveFavourite(image.id)}> Favourite</Button>

                                            <Button type="primary" icon={<LikeOutlined />}>Like</Button>

                                        </div>

                                    </Card>

                                </Col>
                            
                            )}

                        </Row>

                    </Col>

                </Row>
                
            </Layout>

        )

    }

};

const mapStateToProps = (state, ownProps) => {

    return {

        images: state.images

    }

};

export default connect(mapStateToProps, { getImages, saveAsFavourite })(withRouter(Index));
