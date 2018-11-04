import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Row } from 'react-bootstrap';
import { fetchData } from '../../actions/action'

class ShowData extends Component {

    fetchData = () => () => {
        this.props.fetchData();
    }

    render() {
        console.log('data ne', this.props.data);
        return (
            <div>
                <Row>
                    <Button className="btn btn-primary" onClick={this.fetchData()}>Fetch data</Button>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchData
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowData);
