import { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  // code here
  render(props) {
    let data = this.data();
    return (
      <div className="App">
        <h1>Kalvium Gallery</h1>

        {/* <img src={elephant} alt=""/> */}
        <div className="image">
          <img src={props.data[0].img} alt="" />
          <img src={props.data[1].img} alt="" />
        </div>

        <div className="image">
          <img src={props.data[2].img} alt="" />
          <img src={props.data[3].img} alt="" />
        </div>
      </div>
    );
  }
}
