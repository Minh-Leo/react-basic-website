import React, {Component} from "react";
import PorfolioItem from "./PorfolioItem";
import {Link} from "react-router-dom";
import img1 from "../assets/img/portfolio/01-thumbnail.jpg";
import img2 from "../assets/img/portfolio/02-thumbnail.jpg";
import img3 from "../assets/img/portfolio/03-thumbnail.jpg";
import img4 from "../assets/img/portfolio/04-thumbnail.jpg";
import img5 from "../assets/img/portfolio/05-thumbnail.jpg";
import img6 from "../assets/img/portfolio/06-thumbnail.jpg";

const porfolios = [
  {title: "Threads", subtitle: "Illustration", image: img1},
  {title: "Explore", subtitle: "Graphic Design", image: img2},
  {title: "Finish", subtitle: "Identity", image: img3},
  {title: "Lines", subtitle: "Branding", image: img4},
  {title: "Southwest", subtitle: "Website Design", image: img5},
  {title: "Window", subtitle: "Photography", image: img6}
];

export default class Porfolio extends Component {
  render() {
    return (
      <section className='bg-light page-section' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            {porfolios.map((porfolio, id) => {
              return <PorfolioItem {...porfolio} key={id} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
