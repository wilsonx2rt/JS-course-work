import React from 'react';
import './index.css';

class TodoInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        todo: '',
        value: '',
        strike: 'no-strike',
      },
    }
  }

  handleInputChange = (e) => {
    let input = this.state.input;
    input = {
      todo: e.target.value,
      status: 'pending',
      strike: 'no-strike',
    }
    this.setState({
      input,
    });
  }

  resetForm = () => {
    let input = this.state.input;
    input = {
      todo: '',
      status: 'pending',
      strike: 'no-strike',
    }
    this.setState({
      input,
    })
  }

  render() {
    return (
      <div className="todo-form-wrapper">
        <form onSubmit={
          (e) => {
            this.props.addTodoItems(e, this.state.input);
            this.resetForm();
          }
        }
        >
          <label>
            New Todo:
            <input 
              className="todo-input" 
              type="text" name="name" 
              value={this.state.input.todo}
              onChange={
                (e) => {this.handleInputChange(e)}
              }
            />
          </label>
          <input 
            className="todo-submit" 
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    )
  }
}

export default TodoInputForm;