import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';

import Chart from './Chart';
import Staff from './Staff'

import * as actions from '../actions/action'

class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUpdate: false
        }
    }

    componentWillMount() {
        const checkLogin = localStorage.getItem('login');
        if (!checkLogin) {
            this.props.history.push('/');
            return;
        }
    }

    componentDidMount() {
        this.props.getStaff();
    }

    showUpdate = (show) => () => {
        this.setState({ isUpdate: show });
    }

    render() {
        const { isUpdate } = this.state;
        const { staff = [] } = this.props;
        return (
            <div className="dashboard">
                <Grid>
                    <Row className="chart-container">
                        <Col xs={12} md={6}>
                            <Chart data={staff} />
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="staff">
                                {isUpdate && (<Staff staff={staff} onSave={this.props.updateStaff} onCancel={this.showUpdate(false)} />)}

                                {!isUpdate && (
                                    <div>
                                        {staff.map((item) => {
                                            return (
                                                <h5 key={item.text}>{item.text}: <span>{item.value}</span></h5>
                                            );
                                        })}
                                        <Button className="btn btn-primary" onClick={this.showUpdate(true)}>Update</Button>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    staff: state.staff
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
