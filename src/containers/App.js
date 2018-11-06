import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component { 
    render() { 
        return <div>{this.props.children}</div>
    }
}

const mapStateToProps = state => {
    const { user } = state.login;
    return { user };
};

export default connect(mapStateToProps)(App);