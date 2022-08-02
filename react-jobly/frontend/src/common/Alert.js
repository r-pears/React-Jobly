import React from 'react';

/** Presentational component for showing bootstrap-style alerts.
 * 
 * { LoginForm, SignupForm, ProfileForm } -> Alert
 */
const Alert = ({ type = 'danger', messages = [] }) => {
  console.debug('Alert', 'type=', type, 'messages=', messages);

  return (
    <div className={`alert alert-${type}`} role='alert'>
      {messages.map(message => (
        <div className='mb-0 small' key={message}>
          {message}
        </div>
      ))}
    </div>
  );
}

export default Alert;
