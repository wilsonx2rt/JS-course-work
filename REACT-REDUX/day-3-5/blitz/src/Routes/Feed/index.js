import React, { Component } from "react";
// REDUX
import { connect } from "react-redux";
import { fetchFeed } from "../../store/actions/fetchUserAction";
import store from "../../store";

// COMNPONENETS
import Post from "../../components/Post";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";

class Feed extends Component {
  componentWillMount() {
    this.props.fetchFeed();
  }

  render() {
    const keys = Object.keys(this.props.feed);
    return (
      <div>
        <Header />
        <div style={feedLayout}>
          <UserProfile />
          <div>
            {keys.map((key, index) => {
              return (
                <Post
                  key={index}
                  content={this.props.feed[key].content}
                  user={this.props.feed[key].user}
                  date={this.props.feed[key].created}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

// STYLES
const feedLayout = {
  display: "flex",
  justifyContent: "space-around"
};

const mapStateToProps = state => ({
  feed: state.fetchFeedReducer.feed
});

export default connect(mapStateToProps, { fetchFeed })(Feed);
