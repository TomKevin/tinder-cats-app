import React, { Component } from 'react';
import { Row, Col, Carousel, Card, Button, Skeleton, Modal, Input } from 'antd';
import { StarOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getImages, uploadImage } from './../store/actions/imageActions';
import  { saveAsFavourite } from './../store/actions/favouriteActions';
import Layout from './layout/Main';

class Index extends Component {

    constructor(props) {

        super(props);
    
        this.state = {

            loading: false,

            visible: false,

            file: {}
             
        }

    }

    componentDidMount = async () => {

        this.setState({ loading: true });

        const result = await this.props.getImages();

        if(result) {

            this.setState({ loading: false });

        }

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

    showModal = () => {

        this.setState({ visible: true });

    };

    handleOk = async e => {

        try {

            this.setState({ loading: true });

            const { file } = this.state;

            const obj = {};

            obj.file = file;

            const result = await this.props.uploadImage(obj);

            if(result) {

                await this.props.getImages();

                this.setState({ visible: false, loading: false });

            }
            
        } catch (error) {

            this.setState({ visible: false });

            throw error;
            
        }

    };

    handleCancel = e => {
        
        this.setState({ visible: false });

    };

    onChange = (e) => {

        this.setState({ file: e.target.files[0] });

    }

    render() {

        const { images: { images } } = this.props;

        const { loading, visible } = this.state;

        return (

            <Layout>

                <Row>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ margin: '2em 0' }}>

                        <Skeleton loading={loading} active>
                        
                            <Carousel autoplay={true} dotPosition="bottom" effect="fade">

                                {images.map((image, i) => 
                                
                                    <div key={i} className="carousel-item"><img src={image.url} alt={image.original_filename} className="carousel-img" /></div>
                                
                                )}

                            </Carousel>

                        </Skeleton>

                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                        <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '3em 0' }}>

                            <h1>Cats</h1>

                            <Button type="primary" icon={<PlusOutlined/>} onClick={this.showModal}> Add Cat</Button>

                            <Modal title="Add Cat" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>

                                <Input type="file" accept="image/*" onChange={this.onChange} />

                            </Modal>

                        </div>

                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                        <Row gutter={[16, 16]}>
        
                            {images.map((image, i) => 
                            
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>

                                    <Skeleton loading={loading} active>

                                        <Card

                                            hoverable

                                            style={{ width: '100%' }}

                                            cover={<Link to={`/cats/${image.id}`}><img alt={image.original_filename} style={{ height: '200px', objectFit: 'cover', width: '100%' }} src={image.url} /></Link>}

                                        >

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                                <Button type="primary" icon={<StarOutlined/>} onClick={() => this.saveFavourite(image.id)}> Favourite</Button>

                                            </div>

                                        </Card>

                                    </Skeleton>

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

export default connect(mapStateToProps, { getImages, saveAsFavourite, uploadImage })(withRouter(Index));
