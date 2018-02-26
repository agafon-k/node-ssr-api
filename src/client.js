import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

if (typeof window !== 'undefined') {
    ReactDOM.render((
        <BrowserRouter>
            <MuiThemeProvider>
                <App {...this.props} />
            </MuiThemeProvider>
        </BrowserRouter>
    ), document.getElementById('root'));
}
