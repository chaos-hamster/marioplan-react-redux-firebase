const initialState = {

}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "boolox":
            return { ...state, ...payload }

        default:
            return state
    }
}

export default AuthReducer;