import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewPost from 'components/NewPost';
import MainPage from 'components/MainPage';
import AllPosts from 'components/AllPosts';

const App = () => {
    console.log('------');
    return (
            <div>
                <MuiThemeProvider>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/v1/new-post' component={NewPost}/>
                        <Route path='/v1/posts' component={AllPosts}/>
                    </Switch>
                </MuiThemeProvider>
            </div>
        );
    }
;
export default App;
