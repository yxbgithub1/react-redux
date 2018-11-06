import {
    LOGOUT,
    LOGIN_START,
    LOGIN_SUCCEED,
    LOGIN_FAILED
} from '../action-typs';

const login = (state = { succeed:false }, action) => { 

    switch (action.type) { 

        //开始登录
        case LOGIN_START:
            return {
                ...state,
                form:action.form
            };    

        //登录成功
        case LOGIN_SUCCEED:
            return {
                ...state,
                succeed: true,
                user   : action.user
            };

        //登录失败
        case LOGIN_FAILED:
            return {
                ...state,
                failedMesg: action.failedMesg
            };
        
        //退出登录    
        case LOGOUT:
            return state;

        default:
            return state;
    }
}

export default login;