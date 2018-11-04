import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/action'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginErr: false
        }
    }

    componentWillReceiveProps(props) {
        const { login = {} } = props;
        if (login.success) {
            localStorage.setItem('login', true);
            localStorage.setItem('username', login.username);
            this.props.history.push('/dashboard');
        }
        else {
            this.setState({ loginErr: true });
        }
    }

    login = () => {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const data = {
            username,
            password
        }
        this.props.checkLogin(data);
    }

    render() {
        return (
            <div>
                <div className="login-page col-md-5">
                    <div>
                        <Row className="row-marin">
                            <Col componentClass={'form'} sm={2}>
                                Username
                            </Col>
                            <Col md={12}>
                                <FormControl type="username" placeholder="Username" id="loginUsername" />
                            </Col>
                        </Row>

                        <Row className="row-margin">
                            <Col componentClass={'form'} sm={2}>
                                Password
                            </Col>
                            <Col md={12}>
                                <FormControl type="password" placeholder="Password" id="loginPassword" />
                            </Col>
                        </Row>

                        {this.state.loginErr && (<div className="text-danger err-login">
                            <span>Invalid username or password!</span>
                        </div>
                        )}

                        <Col md={12} className="login-button">
                            <Button className="btn btn-primary" onClick={this.login}>Sign in</Button>
                        </Col>
                    </div>
                </div >
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
