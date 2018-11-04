import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const localLogin = localStorage.getItem('login');
const username = localStorage.getItem('username');
class Header extends Component {

    logOut = () => {
        localStorage.removeItem('login');
    }

    render() {
        const { login = {} } = this.props;
        const showLogout = localLogin || login.success
        return (
            <div className="header-page">
                Teralogic - Welcome {showLogout && (<span>
                    {username}
                    <Link to='/' className="logout" onClick={this.logOut}>Logout</Link>
                </span>)}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps)(Header);
