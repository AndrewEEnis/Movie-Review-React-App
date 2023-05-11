import React, { Component } from "react";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      reviewArray: [],
      starRating: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ review: e.target.value });
  };

  handleStarsChange = (newStars) => {
    this.setState({ starRating: newStars });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newReview = {
      review: this.state.review,
      starRating: this.state.starRating,
    };

    this.setState({
      reviewArray: [...this.state.reviewArray, newReview],
      review: "",
    });
  };

  render() {
    return (
      <div>
        {this.state.reviewArray.length === 0 ? (
          <div></div>
        ) : (
          <div>
            <h4>Critics are saying:</h4>

            {this.state.reviewArray.map((review, index) => (
              <ReviewList
                review={review.review}
                stars={review.starRating}
                key={index}
              />
            ))}
          </div>
        )}

        <div>
          <div className="container">
            <div className="card-body">
              <div className="row">
                <h4>Review Movie:</h4>
                <div className="col-4"></div>
                <div className="col-4">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <textarea
                        type="textarea"
                        id="review"
                        className="form-control"
                        rows={4}
                        placeholder="Add your review here..."
                        value={this.state.review}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <Stars
                        starRating={this.state.stars}
                        onChange={this.handleStarsChange}
                      />
                    </div>
                    <button
                      id="submit-review"
                      type="submit"
                      className="btn btn-info text-light"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
