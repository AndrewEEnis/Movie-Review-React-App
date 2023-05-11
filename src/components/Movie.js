import React, { Component } from "react";
import ReviewForm from "./ReviewForm.js";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <div className="card bg-dark text-light">
          <div className="row">
            <div className="col-6-sm">
              <h1>{this.props.title}</h1>

              <img
                src={this.props.image}
                alt="movie cover"
                className="img-thumbnail mb-3 mt-3 bg-info"
              ></img>

              <p>Release Date: {this.props.date}</p>
              <p>Rating: {this.props.rating}</p>
              <p>Movie Length: {this.props.length}</p>
              <p className="ms-5 me-5">{this.props.synopsis}</p>
            </div>
            <ReviewForm />
          </div>
        </div>
      </div>
    );
  }
}
