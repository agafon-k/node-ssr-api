import React from 'react';
import Post from '../Post';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AllPosts extends React.Component {

    render() {
        const posts = this.props.posts;

        return (
            <MuiThemeProvider>
                <ul>
                    {posts.map((post) =>
                        <Post key={post._id} post={post}/>
                    )}
                </ul>
            </MuiThemeProvider>
        );
    }
}
export default AllPosts;
