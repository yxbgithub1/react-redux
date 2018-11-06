import './style.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { hashHistory } from "react-router";

import {
    //fetchLogin,
    fetchLogin
} from "../../redux/action";

class Login extends Component { 
    constructor() { 
        super();
        this.state = {
            telPhone        : '',
            merchantPassword: ''
        }
    }

    unameChange(e) { 
        this.setState({ telPhone: e.target.value });
    }

    passwdChange(e) { 
        this.setState({ merchantPassword: e.target.value });
    }
    
    render() { 

        const { dispatch, succeed } = this.props;
        
        //console.log(loginMethod);

        return (
            <div role="form">
                <div>
                    <label>用户：</label>
                    <input type="text"
                        value={this.state.telPhone}
                        onChange={this.unameChange.bind(this)}
                        placeholder="请输入用户名" />
                    <span>错误提示</span>
                </div>
                <div>
                    <label>密码：</label>
                    <input type="password"
                        value={this.state.merchantPassword}
                        onChange={this.passwdChange.bind(this)}
                        placeholder="请输入密码" />
                    <span>错误提示</span>
                </div>
                <div>

                    <button onClick={() => {
                        dispatch(fetchLogin(this.state));
                    }}>登录</button>

                    {/*<button onClick={() => {
                        loginMethod(this.state);
                    }}>登录</button>*/}
                </div>
                <div>
                     { succeed && hashHistory.push('panel') }
                </div>
            </div>
        );
    }
}

//
const mapStateToProps = (state) => {    
    const { succeed } = state.login;
    return { succeed };
}
//
// const mapDispatchToProps = (dispatch) => ({ 
//     loginMethod: form => dispatch(fetchLogin(form)) 
// })

export default connect(mapStateToProps)(Login);