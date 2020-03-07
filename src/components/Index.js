import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import { connect } from 'react-redux';
import { getImages } from './../store/actions/imageActions';
import Layout from './layout/Main';

class Index extends Component {

    componentDidMount = async () => {

        await this.props.getImages();

    }

    onChange = (a, b, c) => {

        console.log(a, b, c);

    }

    render() {

        return (

            <Layout>

                <Row>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                        <Carousel afterChange={this.onChange}>

                            <div>
                                <h3>1</h3>
                            </div>

                            <div>
                                <h3>2</h3>
                            </div>

                            <div>
                                <h3>3</h3>
                            </div>

                            <div>
                                <h3>4</h3>
                            </div>

                        </Carousel>

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
