import {
    LOGOUT,
    LOGIN_START,
    LOGIN_SUCCEED,
    LOGIN_FAILED,
} from "../action-typs";

//import fetch from "isomorphic-fetch";

import fetch from '../../fetch';


//开始登录状态
const loginStart = (form = {}) => ({
    type: LOGIN_START,
    form
});
//登录成功状态
const loginSucceed = (user = {}) => ({
    type: LOGIN_SUCCEED,
    user
})
//登录失败状态
const loginFailed = (failedMesg = '') => ({
    type: LOGIN_FAILED,
    failedMesg
});
//退出登录状态
const logout = () => ({
    type: LOGOUT
});


//登录
export const fetchLogin = (data) => { 
    return dispatch => { 
        dispatch(loginStart(data));
        fetch({
            data,
            url: 'login'
        }).then(resp => {
            const result = resp.data;
            if (!result.success) {
                dispatch(loginFailed(result.data.errMsg));
                return;
            }
            dispatch(loginSucceed(result.data));
        });
    }
}

// const fetchLogin1 = data => dispatch => {
//     dispatch(loginStart(data))
//     fetch({})
//     .then()
// }

export const fetchLogout = () => { 

    return dispatch => { 

    }

}

//发起登录
// export const fetchLogin = (form) => {
//     return dispatch => { 
//         //开始登录
//         dispatch(loginStart(form));
//         return fetch("http://10.86.86.120/api/managment/login", {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body:JSON.stringify(form)})
//             .then(resp => resp.json())
//             .then(json => {        
//                 //成功
//                 if (json.success) {
//                     dispatch(loginSucceed(json.data));
//                     //console.log(dispatch(loginSucceed(json.data)));
//                 }
//                 //失败
//                 else {
//                     dispatch(loginFailed(json.data.errMsg));
//                     //console.log(dispatch(loginFailed(json.data.errMsg)));
//                 }
//             });
//     }
//}








