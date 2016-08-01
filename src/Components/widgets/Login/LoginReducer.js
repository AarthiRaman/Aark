export const initialState = {
    loggedIn : false
}

export default function loginReducer(state=initialState, action){
    switch(action.type)
    {
        case "FB_AUTHENTICATE":
            return state;
        case "LOG_IN":
            return state;
        case "LOG_OUT":
            return state;
    }
};
