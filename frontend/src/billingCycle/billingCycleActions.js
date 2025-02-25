import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'https://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/billingCycle`, values)
    .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
    })
    .catch(e => {
        e.response.data.errors.foreach(error => toastr.error('Erro', error))
    })
    return{
        type: 'TEMP'
    }
}