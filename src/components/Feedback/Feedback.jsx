import { Component } from 'react';

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

        <div>
          <h2 className={css.title}>Statistics</h2>
          <ul>
            {feedbackOptions.map(option => (
              <li key={option} className={css.item}>
                {option}: {this.state[option]}
              </li>
            ))}
          </ul>
          <p className={css.item}>total : {total}</p>
          <p className={css.item}>positive feedback : {positiveFeedback}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
