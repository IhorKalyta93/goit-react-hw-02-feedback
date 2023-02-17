import React from 'react';
import styled from './Feedback.module.css';
export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div className={styled.mainDiv}>
        <h1>Please leave feedback</h1>
        <div className={styled.divResults}>
          <span className={styled.span}>Good: {this.state.good}</span>
          <span className={styled.span}>Neutral: {this.state.neutral}</span>
          <span className={styled.span}>Bad: {this.state.bad}</span>
        </div>
        <div className={styled.divButtons}>
          <button
            className={styled.button}
            type="button"
            onClick={this.handleIncrementGood}
          >
            Good
          </button>
          <button
            className={styled.button}
            type="button"
            onClick={this.handleIncrementNeutral}
          >
            Neutral
          </button>
          <button
            className={styled.button}
            type="button"
            onClick={this.handleIncrementBad}
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}
export default Feedback;
