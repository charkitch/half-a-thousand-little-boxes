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

    this.submitDemo = this.submitDemo.bind(this);
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


  submitDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'futureboss@yourcompany.com', password: 'hire_me!' }
    this.props.processForm(demoUser)
  }

  demoButton() {
     let demoForm = '';

     if (this.props.formType == 'Log in') {
       demoForm = ( <button className='session-submit demo' onClick={this.submitDemo}>Demo Login</button> )
     }

     return demoForm
   }




   render() {
     let usernameEntry = '';
     if (this.props.formType === 'Sign up') {
       usernameEntry = (<label className='access-label'>Username(optional)
       <input type='text' value={this.state.username} onChange={this.update('username')} />
      </label>) }



    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.props.exortation} Half A Thousand Tiny Boxes
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label className='access-label'>{this.props.identifierText}</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
            <br/>
            {usernameEntry}
            <br/>
            <label className='access-label'>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"              />
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          {this.demoButton()}
          <div className='redirect-message'>
          {this.props.bumperText}  {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}










export default withRouter(SessionForm);
