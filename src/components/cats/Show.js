import React, { Component } from 'react';
import Layout from './../layout/Main';
import { Row, Col, Button, Card } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getImage } from './../../store/actions/imageActions';
import './css/Show.css';

class Show extends Component {

    constructor(props) {

        super(props);
    
        this.state = {

            likes: 0,

            dislikes: 0
             
        }

    }

    componentDidMount = async () => {

        const { match: { params } } = this.props;

        await this.props.getImage(params.id);

        this.setLikeAndDislikes();

        this.getLikesCount();

        this.getDislikesCount();

    }

    setLikeAndDislikes = () => {

        if(localStorage.getItem("likes") === null) {

            localStorage.setItem("likes", 0);

        }

        if(localStorage.getItem("dislikes") === null) {

            localStorage.setItem("dislikes", 0);

        }

        return;

    }

    getLikesCount = () => {

        const likes = localStorage.getItem("likes");

        this.setState({ likes: parseInt(likes) });

        return parseInt(likes);

    }

    getDislikesCount = () => {

        const dislikes = localStorage.getItem("dislikes");

        this.setState({ dislikes: parseInt(dislikes) });

        return parseInt(dislikes);

    }

    addLike = () => {

        const { likes } = this.state;

        localStorage.setItem("likes", likes + 1);

        return this.getLikesCount();

    }

    addDislike = () => {

        const { dislikes } = this.state;

        localStorage.setItem("dislikes", dislikes + 1);

        return this.getDislikesCount();

    }

    render() {

        const { images: { image } } = this.props;

        const { likes, dislikes } = this.state;

        return (

            <Layout>

                <Row gutter={[16, 16]}>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>

                        <Card

                            hoverable

                            style={{ width: '100%' }}

                            cover={<img alt={image.original_filename} style={{ height: '200px', objectFit: 'cover', width: '100%' }} src={image.url} />}

                        >

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <Button type="primary" icon={<LikeOutlined/>} onClick={() => this.addLike()}> Like {likes}</Button>

                                <Button type="danger" icon={<DislikeOutlined/>} onClick={() => this.addDislike()}> UnLike {dislikes}</Button>

                            </div>

                        </Card>

                    </Col>

                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>


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

export default connect(mapStateToProps, { getImage })(Show);
