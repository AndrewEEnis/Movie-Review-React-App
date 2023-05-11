import React, { Component } from "react";
import ReactStars from "react-stars";

export default class ReviewList extends Component {
  render() {
    return (
      <div className="card bg-dark">
        <div className="card-body">
          <p>"{this.props.review}"</p>
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={this.props.state}
            size={25}
            color2={"#ff643d"}
            edit={false}
            half={true}
          />
        </div>
      </div>
    );
  }
}
