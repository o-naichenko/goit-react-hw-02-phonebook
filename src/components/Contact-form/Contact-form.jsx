import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Contact-form.css";


class ContactForm extends Component { 
  state = {
  name: "",
  number: "",
  }
  clearState() { 
    this.setState({
      name: "",
      number: "",
    });
  }
  onSubmitHandler = (e) => {
      e.preventDefault();
      const newContact = {
      name: e.currentTarget.name.value,
      number: e.currentTarget.number.value,
      id: uuidv4(),
      };
      this.setState({
      name: "",
      number: "",
      });
    this.props.onSubmit(newContact);
    this.clearState();
  };
    onChangeHandler = (e) => {
  const { name, value } = e.currentTarget;
  this.setState({
    [name]: value,
  });
  };
    render() { 
        const { name, number } = this.state;
        return ( <form className="Form" onSubmit={this.onSubmitHandler}>
          <label className="Form__label">
            Name
            <input
              className="Form__input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.onChangeHandler}
            ></input>
          </label>
          <label className="Form__label">
            Number
            <input
              className="Form__input"
              type="tel"
              placeholder="Phone number"
              name="number"
              value={number}
              onChange={this.onChangeHandler}
            ></input>
          </label>
          <button className="Form__button" type="submit">
            Add contact
          </button>
        </form>)
    } 
}

export default ContactForm