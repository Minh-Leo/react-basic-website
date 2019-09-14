import React, {Component} from "react";
import Header from "../Common/Header";
import Services from "../Common/Services";
import Porfolio from "../Common/Porfolio";
import Team from "../Common/Team";
import Clients from "../Common/Clients";
import image from "../assets/img/header-bg.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='Welcome to our Studio'
          subtitle='Discover our services'
          buttonText='Tell me more'
          link='/services'
          showButton={true}
          image={image}
        />
        <Services />
        <Porfolio />
        <Team />
        <Clients />
      </div>
    );
  }
}
