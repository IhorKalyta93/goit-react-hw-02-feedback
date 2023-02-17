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

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <div className={styled.mainDiv}>
        <h1>Please leave feedback</h1>
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
        <div >
          
          <p className={styled.stat}>Statistics:</p>
          <div className={styled.spanDiv}>
            <span className={styled.span}>Good: {this.state.good}</span>
            <span className={styled.span}>Neutral: {this.state.neutral}</span>
            <span className={styled.span}>Bad: {this.state.bad}</span>
            <span className={styled.span}>
              Total: {this.countTotalFeedback()}{' '}
            </span>
            <span className={styled.span}>
              Percentage: {this.countPositiveFeedbackPercentage()}%{' '}
            </span>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Feedback;
