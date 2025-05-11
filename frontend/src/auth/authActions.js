import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'


export const login = (values) => submit(values, `${consts.OAPI_URL}/login`);

export const signup = (values) => submit(values, `${consts.OAPI_URL}/signup`);

const submit = async (values, url) => {
    return async (dispatch) => {
        try{
            const resp = await axios.post(url, values);
            dispatch({ type: 'USER_FETCHED', payload: resp.data });
        }catch(error) {
            handleErrors(error);
        }
    };
};

const handleErrors = (error) => {
    if (error.response && error.response.data.errors) {
        error.response.data.errors.forEach(err => toastr.error('Erro', err));     
    } else{
        toastr.error('Erro', 'Ocorreu um erro inesperado.');
    }
};


export const logout = () => ({
    type: 'TOKEN_VALIDATED',
    payload: false
});

export const validateToken = (token) => {
    return async (dispatch) => {
        if (token) {
            try {
                const resp = await axios.post(`${consts.OAPI_URL}/validateToken`, {token});
                dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid });
            }catch (error) {
                dispatch({ type: 'TOKEN_VALIDATED', payload: false});
            }
        }else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false});
        }
    };
};