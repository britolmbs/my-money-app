import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './app'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {
    componentDidMount() {
        const { user } = this.props.auth;
        if (user) {
            this.props.validateToken(user.token);
        }
    }
    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['Authorization'] = user.token;
            return <App>{this.props.children}</App>;
        }if (!user && !validToken) {
            return <Auth />
        } 
        return null;
    }
}
const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
