import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Contact-form.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  clearState() {
    this.setState({
      name: '',
      number: '',
    });
  }
  onSubmitHandler = e => {
    if (e.currentTarget.name.value.length === 0) {
      alert('Please, fill the Name');
    } else {
      e.preventDefault();
      const newContact = {
        name: e.currentTarget.name.value,
        number: e.currentTarget.number.value,
        id: uuidv4(),
      };
      this.setState({
        name: '',
        number: '',
      });
      this.props.onSubmit(newContact);
      this.clearState();
    }
  };
  onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.Form} onSubmit={this.onSubmitHandler}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            className={s.input}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.onChangeHandler}
          ></input>
        </label>
        <label className={s.label}>
          <span>Number:</span>
          <input
            className={s.input}
            type="tel"
            placeholder="Phone number"
            name="number"
            value={number}
            onChange={this.onChangeHandler}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
