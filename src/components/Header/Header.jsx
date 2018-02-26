import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label='Login' />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText='Refresh' />
        <MenuItem primaryText='Help' />
        <MenuItem primaryText='Sign out' />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {
    state = {
        logged: true
    };

    handleChange = (event, logged) => {
        this.setState({ logged });
    };

    render() {
        return (
            <div>
                <AppBar
                    title='Title'
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
            </div>
        );
    }
}

export default Header;
