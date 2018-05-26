import React, { Component } from 'react'
import moment from 'moment';
// MUI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Post extends Component {
  
  render() {
    return (
      <div>
        <Card style={ cardStyle }>
          <CardHeader
            title={ this.props.user }
            subtitle={ moment(this.props.date).format('MM-DD-YYYY') }
            avatar="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fcreativemornings-com%2Fuploads%2Fuser%2Favatar%2F1660%2Fjsm-avatar.png&f=1"
          />
          <CardText>{ this.props.content }</CardText>
        
        </Card>
      </div>
    )
  }
}

const cardStyle = {
  width: '500px',
  margin: '1em auto',
}

export default Post;