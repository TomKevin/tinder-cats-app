import React, { Component } from 'react';
import Layout from './../layout/Main';
import { connect } from 'react-redux';
import { getImage } from './../../store/actions/imageActions';
import './css/Show.css';

class Show extends Component {

    componentDidMount = async () => {

        const { match: { params } } = this.props;

        await this.props.getImage(params.id);

    }

    render() {

        const { images: { image } } = this.props;

        return (

            <Layout>

                <h2>{image.url}</h2>
                
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
