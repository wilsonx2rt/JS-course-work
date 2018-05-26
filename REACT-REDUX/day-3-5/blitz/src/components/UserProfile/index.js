import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchCurrentUserProfile } from '../../store/actions/fetchUserAction'

class UserProfile extends Component {

  handleClick = () => {
    // console.log(this.props)
    this.props.fetchCurrentUserProfile()
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h1 onClick={ this.handleClick }>User Profile</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { fetchCurrentUserProfile })(UserProfile);