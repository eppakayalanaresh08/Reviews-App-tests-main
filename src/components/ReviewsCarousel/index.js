import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIdReview: 0,
  }

  onArrowLeftClick = () => {
    const {activeIdReview} = this.state
    // eslint-disable-next-line yoda
    if (activeIdReview > 0) {
      this.setState(prevState => ({
        activeIdReview: prevState.activeIdReview - 1,
      }))
    }
  }

  filterRenderItems = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="container-profile-review">
        <img src={imgUrl} alt={username} />
        <p className="review-username">{username}</p>
        <p className="companyName-review">{companyName}</p>
        <p className="description-review">{description}</p>
      </div>
    )
  }

  onArrowRightClick = () => {
    const {activeIdReview} = this.state
    const {reviewsList} = this.props
    if (activeIdReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIdReview: prevState.activeIdReview + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIdReview} = this.state
    const itemsListReview = reviewsList[activeIdReview]
    return (
      <div className="bg-container">
        <h1 className="heading-reviews">Reviews</h1>
        <div className="arrow-container">
          <button
            type="button"
            className="on-arrow"
            onClick={this.onArrowLeftClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.filterRenderItems(itemsListReview)}
          <button
            type="button"
            onClick={this.onArrowRightClick}
            className="on-arrow"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
