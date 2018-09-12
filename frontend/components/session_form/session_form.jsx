import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   update(field) {
     // debugger
     return e => this.setState({
       [field]: e.currentTarget.value //currentTarget is one word!
     });
   }

   handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);
     this.props.processForm(user);
   }

   renderErrors() {
     return(
       <ul>
         {this.props.errors.map((error, i) => (
           <li key={'err-${i}'}>
             {error}
           </li>
         ))}
       </ul>
     );
   }

   render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          Please {this.props.exortation} Half A Thousand Tiny Boxes
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>{this.props.identifierText}
              <input type="text"
                value={this.state.identifier}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {this.props.bumperText}{this.props.navLink}
      </div>
    );
  }
}










export default withRouter(SessionForm);
