import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function Post(props) {
    const postInfo = props.post;

    return (
        <Card>
            <CardHeader
                title={postInfo.title}
                subtitle={postInfo.title}
                avatar='images/jsa-128.jpg'
            />
            <CardMedia
                overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle'/>}
            >
                <img src='images/nature-600-337.jpg' alt=''/>
            </CardMedia>
            <CardTitle title='Card title' subtitle='Card subtitle'/>
            <CardText>
                {postInfo.text}
            </CardText>
            <CardActions>
                <FlatButton label='Action1'/>
                <FlatButton label='Action2'/>
            </CardActions>
        </Card>
    );
}

export default Post;
