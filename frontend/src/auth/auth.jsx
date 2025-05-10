import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import If from '../common/operator/if'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {
    state = { loginMode: true };
  
changeMode = () =>  {
    this.setState(prevState => ({ loginMode: !this.state.loginMode }));
};
onSubmit = (values) =>  {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
};
render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;

    return (
        <div className="login-box">
            <div className="login-logo"><b>My</b>Money</div>
            <div className="login-box-body">
                <p className="login-box-msg">Bem Vindo!</p>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field component={Input} type='input' name='name'
                    placeholder='Nome' icon='user' hide={loginMode} />
                    <Field component={Input} type='email' name='email'
                    placeholder='Email' icon='envelope' />
                    <Field component={Input} type='password' name='password'
                    placeholder='Senha' icon='lock' />
                    <Field component={Input} type='password' name='confirm_password'
                    placeholder='Confirma Senha' icon='lock' hide={loginMode} />
                    <Row>
                        <Grid cols='4'>
                            <button type='submit' className='btn btn-primary btn-block btn-flat'>
                                {loginMode ? 'Entrar' : 'Registrar'}
                            </button>
                        </Grid>
                    </Row>
                </form>
                <br />
                <a onClick={this.changeMode}>
                    {loginMode ? 'Novo usuário? Registrar aqui!' : 'Já é Cadastrado? Entrar aqui!'}
                </a>
            </div>
            <Messages />
        </div>

    )
    }
}

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'authForm'})(Auth));