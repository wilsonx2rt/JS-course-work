import React, { Component } from "react";
// REDUX
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchTokensAction } from "../../store/actions/fetchUserAction";
// MATERIAL UI
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.dispatch(fetchTokensAction(this.state))
    this.props.fetchTokensAction(this.state)
      .then(() => {
        this.props.history.push('/feed');
      })
  };

  render() {
    return (
      <div>
        <Card style={CardStyle}>
          <CardTitle title="Welcome" />
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                hintText="Username"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <TextField
                hintText="Password"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <RaisedButton label="Login" onClick={this.handleSubmit} style={ btnStyle } />
              <RaisedButton label="Register" onClick={this.handleSubmit} style={ btnStyle } />
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

// STYLES
const CardStyle = {
  width: "40vw",
  // height: "25vh",
  display: "flex",
  flexDirection: "column",
  margin: "15vh auto",
  justifyContent: "center",
  alignItems: "center"
};

const btnStyle = {
  margin: '0 .2em 1em .2em',
}

const mapStateToProps = state => ({
  state
});

export default withRouter(connect(mapStateToProps, { fetchTokensAction })(Login));
