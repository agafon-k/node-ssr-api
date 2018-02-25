import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';

class Main extends Component {
    render() {
        return (
                <MuiThemeProvider>
                    <App {...this.props} />
                </MuiThemeProvider>
        );
    }
}

export default Main;
