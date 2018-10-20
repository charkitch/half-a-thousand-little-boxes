import React from 'react';
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.pathStatus = this.props.pathStatus;
    this.path = this.props.path;
    this.state = {
      username: '',
      password: '',
      email: '',
    };
    this.submitDemo = this.submitDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   update(field) {
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
    const demoUser = {
      email: 'ted@veridiantechnologies.com',
      password: 'hire_me!'
    };
    e.preventDefault();
    this.setState(demoUser);
    this.props.processForm(demoUser);
  }

  demoButton() {
     let demoForm = '';

     if (this.props.formType === 'Log in') {
       demoForm = (
         <button
           className='session-submit form-submit demo'
           onClick={this.submitDemo}>Demo Login
         </button> );
     }

     return demoForm;
   }

   compontWillReceiveProps(nextProps) {
     debugger
     if (nextProps.location !== this.props.location) {
       this.props.clearErrors();
     }
   }

   componentWillUnmount() {
     debugger
     this.props.clearErrors();
   }

   render() {
     let usernameEntry = '';
     if (this.props.formType === 'Sign up') {
       usernameEntry = (<label className='access-label'>Username(optional)
       <input
         type='text'
         value={this.state.username}
         onChange={this.update('username')}
        />
      </label>); }



    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.props.exortation} Half A Thousand Little Boxes
          <div className="error-info">{this.renderErrors()}</div>
          <div className="login-form">
            <br/>
            <label className='access-label'>{this.props.identifierText}</label>
            <input
              type={this.props.inputType}
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
            <br/>
            {usernameEntry}
            <br/>
            <label className='access-label'>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"              />
            <br/>
            <input
              className="session-submit form-submit"
              type="submit"
              value={this.props.formType}
            />
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










export default SessionForm;
