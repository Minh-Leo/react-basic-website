import React, {Component} from "react";
import Field from "../Common/Field";

const fieldsLeft = [
  {name: "name", elementName: "input", type: "text", placeholder: "Your name"},
  {
    name: "email",
    elementName: "input",
    type: "email",
    placeholder: "Your email"
  },
  {
    name: "phone",
    elementName: "input",
    type: "number",
    placeholder: "Your phone"
  }
];
const fieldsRight = [
  {
    name: "message",
    elementName: "textarea",
    type: "text",
    placeholder: "Your message"
  }
];

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  render() {
    return (
      <section className='page-section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Contact Us</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form id='contactForm' name='sentMessage' novalidate='novalidate'>
                <div className='row'>
                  {/*  */}
                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <button
                      id='sendMessageButton'
                      className='btn btn-primary btn-xl text-uppercase'
                      type='submit'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
