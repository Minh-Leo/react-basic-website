import React, {Component} from "react";
import SingleService from "./SingleService";

const services = [
  {
    title: "E-Commerce",
    description:
      "Classical economists contended that goods were objects of value over which ownership rights could be established and exchanged. ",
    icon: "fa-shopping-cart"
  },
  {
    title: "Responsive Design",
    description:
      "There has been a long academic debate on what makes services different from goods. The historical perspective in the late-eighteen and early-nineteenth centuries focused on creation and possession of wealth.",
    icon: "fa-laptop"
  },
  {
    title: "Web Security",
    description:
      "Ownership implied tangible possession of an object that had been acquired through purchase, barter or gift from the producer ",
    icon: "fa-lock"
  }
];

export default class Services extends Component {
  render() {
    return (
      <section className='page-section' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Services</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row text-center'>
            {services.map((service, id) => {
              return <SingleService {...service} key={id} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
