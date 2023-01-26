import { Component } from 'react';

import Statistics from 'components/Feedback/Statistics/Statistics';

import css from './Feedback.module.css';

const feedbackOptions = ['good', 'neutral', 'bad'];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddOption = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.feedback}>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.btnWrap}>
          {feedbackOptions.map(option => (
            <button
              key={option}
              className={css.btn}
              type="button"
              onClick={() => this.onAddOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
        />
      </div>
    );
  }
}

export default Feedback;
