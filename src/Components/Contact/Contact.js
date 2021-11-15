import { Component } from 'react';
import './contact.css';

class Contact extends Component {
 render() {
  return (
    <div className="contactFrameWrap">
        <div className="contactFrame">
          <div className="contactContent">
            <div className="contactTitle">
              <h2>Liên hệ với chúng tôi</h2>
            </div>
            {/* start item contact  */}
            <div className="contactItem">
              <div className="contactItemCard">
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                  <div className="control-group">
                    <div className="form-group  mb-0 pb-2">
                      <label>Name</label>
                      <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group  mb-0 pb-2">
                      <label>Email Address</label>
                      <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group  mb-0 pb-2">
                      <label>Phone Number</label>
                      <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group  mb-0 pb-2">
                      <label>Message</label>
                      <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                </form>
              </div>
            </div>
            {/* end item contact  */}
          </div>
        </div>
      </div>
  );
 }
}

export default Contact;
