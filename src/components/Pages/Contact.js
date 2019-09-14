import React, {Component} from "react";
import Field from "../Common/Field";

const fields = [
  [
    {
      name: "name",
      elementName: "input",
      type: "text",
      placeholder: "Your name"
    },
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
  ],
  [
    {
      name: "message",
      elementName: "textarea",
      type: "text",
      placeholder: "Your message"
    }
  ]
];

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  submitForm = e => {
    e.preventDefault();
    alert("submit");
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
              <form
                name='sentMessage'
                novalidate='novalidate'
                onSubmit={e => this.submitForm(e)}
              >
                <div className='row'>
                  {/*  */}
                  {fields.map((field, index) => {
                    return (
                      <div className='col-md-6' key={index}>
                        {field.map((item, id) => {
                          return (
                            <Field
                              {...item}
                              key={id}
                              value={this.state[item.name]}
                              onChange={e =>
                                this.setState({
                                  [item.name]: e.target.value
                                })
                              }
                            />
                          );
                        })}
                      </div>
                    );
                  })}

                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <button
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
