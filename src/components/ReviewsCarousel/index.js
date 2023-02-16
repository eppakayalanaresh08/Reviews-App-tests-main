/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIdReview: 0,
  }

  onArrowLeftClick = () => {
    const {activeIdReview} = this.state
    let activeLeftDecrement = activeIdReview
    // eslint-disable-next-line yoda
    if (0 < activeIdReview) {
      activeLeftDecrement -= 1
    }
    this.setState({activeIdReview: activeLeftDecrement})
  }

  onArrowRightClick = () => {
    const {activeIdReview} = this.state
    let activeIncrement = activeIdReview
    if (activeIdReview < 3) {
      activeIncrement += 1
    }
    this.setState({activeIdReview: activeIncrement})
  }

  render() {
    const {reviewsList} = this.props
    const {activeIdReview} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIdReview
    ]
    return (
      <div className="bg-container">
        <div className="review-Container">
          <h1 className="heading-reviews">Reviews</h1>
          <img src={imgUrl} alt={username} className="image-profile" />
          <div className="arrow-container">
            <button
              type="button"
              value="leftArrow"
              className="on-arrow"
              onClick={this.onArrowLeftClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="review-username">{username}</p>
            <button
              type="button"
              onClick={this.onArrowRightClick}
              className="on-arrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companyName-review">{companyName}</p>
          <p className="description-review">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
