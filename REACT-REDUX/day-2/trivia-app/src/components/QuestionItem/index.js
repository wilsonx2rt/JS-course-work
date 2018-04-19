import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
const cardStyles = {
  width: '35vw',
  height: '25vh',
  margin: '5vh auto',
  display: 'flex',
}
const headerStyle = {
  
}

class QuestionItem extends Component {

  handleClick = () => {
    // if () {
      
    // }
    // if you are on the ;ast qwuestion you rote to the result
    //else next question "question/number"
    const questionIndex = this.props.index;
    this.props.changeRoute(questionIndex);
  }

  render() {
    return (
      <div>
       <Card
            style={ cardStyles }
          >
          <CardHeader
            title="Question #"
            subtitle={ this.props.question.question }
            style={ headerStyle }
          />
          <CardText>
              <RaisedButton onClick={this.handleClick} label='Next' />
          </CardText>
        </Card>
      </div>
    )
  }

}

export default QuestionItem