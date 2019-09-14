import React, {Component} from "react";

export default class Clients extends Component {
  render() {
    return (
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/envato.jpg'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/designmodo.jpg'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/themeforest.jpg'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/creative-market.jpg'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
