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

  render() {
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
              <li className={css.item}>
                {option}: {this.state[option]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
