import React, { Component } from "react"
import {reduxForm, Field } from 'redux-form'
import labelAndInput from "../common/form/labelAndInput"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { init } from "./billingCycleActions"

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} label='Nome'
                    cols='12 4' placeholder="Informe o nome" />
                    <Field name='month' component={labelAndInput} type="number"
                    label='Mês' cols='12 4' placeholder="Informe o Mês" />
                    <Field name='year' component={labelAndInput} type="number"
                    label='Ano' cols='12 4' placeholder="Informe o Ano" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)