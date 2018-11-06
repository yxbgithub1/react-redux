import { connect } from "react-redux";
import React, { Component } from 'react';

class Panel extends Component { 
    render() { 
        return (
            <div>
                HOME
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { succeed } = state.login;
    return { succeed };
};

export default connect(mapStateToProps)(Panel);