import './helpers';
import moment from "moment";
import '../styles.css';

console.log('Hello cruel world');

console.log(moment().format('LTS'));


export var yell = (name) => {
  console.log(name.toUpperCase());
}

yell('bal');