export const ADD_LOGIN = 'ADD_LOGIN'
export const TEST_PERSONAL = 'TEST_PERSONAL'
export const EXIT_USER = 'EXIT_USER'



export const initialState = {
    login: '',
    password: '',
    personalArea: false,
    statistics: false,
}

export default  function reduser(state = initialState, { type, payload}){
    switch (type) {
        case ADD_LOGIN:
            return {
                ...state,
                login: payload.payloadLogin,
                password: payload.payloadPassword
            }
        case TEST_PERSONAL:
            return {
                ...state,
                personalArea: payload.payloadPersonal,
                statistics: payload.payloadStatistics
            }
        case EXIT_USER:
            return {
                ...state,
                login: payload,
                password: payload
            }
        default: return {
            ...state
        }
    }
}




export const addAuthorizationData = (login, password) => ({
    type: 'ADD_LOGIN',
    payload: {
        payloadLogin: login,
        payloadPassword: password
    }
})


export const viewNewPersonal = (boolPersonal, boolStatistics) => ({
    type: 'TEST_PERSONAL',
    payload: {
        payloadPersonal: boolPersonal,
        payloadStatistics: boolStatistics
    }
})

export const exitUser = () => ({
    type: 'EXIT_USER',
    payload: ''
})