import React from 'react';
import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Header from '../Header';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    width: '50%'
};

const MainPage = () => {
    return (
        <div>
            <Header />
            <Paper style={style}>
                <Menu>
                    <Link to='/v1/posts'><MenuItem primaryText='All Posts'/></Link>
                    <Link to='/v1/new-post'><MenuItem primaryText='Create post'/></Link>
                </Menu>
            </Paper>
        </div>
    );
};

export default MainPage;
