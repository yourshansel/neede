import React, { Component } from 'react';
import './css/MainComponent.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"


const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });



  return (
    <div className="email-wrapper">
    <input
      className="email-form"
      ref={node => (email = node)}
      type="email"
      placeholder="Your email"
    />
    <button className="email-button" onClick={submit}>
      Subscribe
    </button>
      {status === "error" && (
        <div
          className="email-error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="email-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

    </div>
  );
};

class EmailForm extends Component {
  render() {
    const url =
      "https://neede.us19.list-manage.com/subscribe/post?u=c0614318d0fbdf1f2f69c0405&amp;id=f3b363a5e0";
    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default EmailForm;
