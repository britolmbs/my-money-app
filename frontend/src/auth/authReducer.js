const userKey = '_mymoney_user';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
           return action.payload ? { ...state, validToken: true} : { ...state, validToken: false, user: null, ...removeUserFromLocalStorage() };

            case 'USER_FETCHED':
                return {
                    ...state,
                    user: action.payload,
                    validToken: true,
                    ...saveUserToLocalStorage(action.payload)
                };
                default:
                    return state
    }
}
const removeUserFromLocalStorage = () => {
    localStorage.removeItem(userKey);
    return{};
};

const saveUserToLocalStorage =(user) =>{
    localStorage.setItem(userKey, JSON.stringify(user));
    return {};
}