import React, { Component } from 'react'
// REDUX
import { connect } from 'react-redux';
// REACT-ROUTER

// MATERIAL-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import QuestionItem from '../QuestionItem'


class Questions extends Component {

  changeRoute = (index) => {
    this.props.history.push('/question/' + index)
  }
 
  render() {

    let location = this.props.history.push;
    console.log(location);
    console.log(this.props)

    return (
      <MuiThemeProvider>
        <div>
          {
            this.props.questions.map((question, index) =>{
              if (location == index) {
                return(
                  <QuestionItem
                    question={ question }
                    index={ index }
                    changeRoute={ this.changeRoute }
                  />
                )
              }
            })
          }
        </div>
      </MuiThemeProvider>
    )
  }
}
// STYLES


const mapStateToProps = (state) => ({
  questions: state.fetchQuestionsReducer.questionsArray,
})

export default connect(mapStateToProps)(Questions);