import { Component } from 'react';

class UpdateUserForm extends Component {
  state = {
    name: this.props.userToUpdate.name,
    email: this.props.userToUpdate.email,
  };
    
handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
}

submitHandler = (event) => {
    event.preventDefault()
    this.props.updateUser({...this.props.userToUpdate, ...this.state})
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

export default UpdateUserForm;
