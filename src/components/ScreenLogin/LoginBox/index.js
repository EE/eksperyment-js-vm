import React, { Component } from 'react';

import FormInputField from '../FormInputField';
import FormButtonSubmit from '../FormButtonSubmit';

import styles from './styles.sass';

export default class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let login = this.state.login;
    let password = this.state.password;

    if (login.length > 0 && password.length > 0) {
      if (login === 'admin' && password === 'admin') {
        this.props.handleSubmitLogin(true);
      } else {
        alert('Błędny login lub hasło');
      }
    } else {
      alert('Wpisz login i hasło');
    }
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div className={styles.loginBox}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInputField
            type="text"
            id="login"
            label="Login"
            placeholder="Podaj login"
            value={this.state.login}
            onChange={(e) => this.handleChange(e)}
          />
          <FormInputField
            type="password"
            id="password"
            label="Hasło"
            placeholder="Podaj hasło"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          <FormButtonSubmit value="Zaloguj"
          />
        </form>

        <div className={styles.loginHint}>
          <p>login: admin</p>
          <p>password: admin</p>
        </div>
      </div>
    );
  }
}
