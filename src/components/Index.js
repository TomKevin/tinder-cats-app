import React, { Component } from 'react';
import { Row, Col, Carousel, Card } from 'antd';
import { connect } from 'react-redux';
import { getImages } from './../store/actions/imageActions';
import Layout from './layout/Main';

class Index extends Component {

    componentDidMount = async () => {

        await this.props.getImages();

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

                                        onClick={() => {}}

                                        style={{ width: '100%' }}

                                        cover={<img alt={image.original_filename} style={{ height: '200px', objectFit: 'cover', width: '100%' }} src={image.url} />}

                                    ></Card>

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

export default connect(mapStateToProps, { getImages })(Index);
