import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux';
import { fetchFeed } from '../../store/actions/fetchUserAction';

// COMNPONENETS
import Post from '../Post';


class Feed extends Component {
  handleClick = () => {
    this.props.fetchFeed();

  }

  render() {

    const keys = Object.keys(this.props.feed)
    console.log(this.props.feed)

    return (
      <div>
        <button onClick={ this.handleClick }>Get feed</button>
        <div>{keys.map((key, index) => {
          return(
            <Post
              key={ index }
              content={ this.props.feed[key].content }
              user={ this.props.feed[key].user }
              date={ this.props.feed[key].created }
            />
          )
        })}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
feed: state.fetchFeedReducer.feed
});

export default connect(mapStateToProps ,{ fetchFeed })(Feed);