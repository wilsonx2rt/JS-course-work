import React from 'react';
// REACT-ROUTER
import { Link } from 'react-router-dom';
// MATERIAL-UI
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
  return (
    <div>
      <Card
        style={ cardStyles }
      >
      <CardHeader
        title="Trivia Game"
        subtitle="click the button below to start"
        style={ headerStyle }
      />
      <CardText>
        <Link to='/question/0'>
        <RaisedButton label='Start' />
        </Link>
      </CardText>
      </Card>
    </div>
  )
}


const cardStyles = {
  width: '35vw',
  height: '25vh',
  margin: '5vh auto',
  display: 'flex',
}

const headerStyle = {

}