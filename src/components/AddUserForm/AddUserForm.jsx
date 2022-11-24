import { Component } from 'react';

class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };
    
handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
}

submitHandler = (event) => {
    event.preventDefault()
    this.props.addUser({...this.state})
}
    
    
  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name:
          <input type="text" value={name} name="name" required onChange={this.handleChange}/>
        </label>
        <label>
          Email:
          <input text="email" value={email} name="email" required onChange={this.handleChange}/>
            </label>
            <button>Save</button>
      </form>
    );
  }
}

export default AddUserForm;
