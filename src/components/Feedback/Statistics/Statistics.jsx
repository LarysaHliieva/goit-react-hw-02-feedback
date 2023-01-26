import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const feedbackOptions = ['good', 'neutral', 'bad'];

const Statistics = props => {
  const { total, positivePercentage } = props;
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <ul>
        {feedbackOptions.map(option => (
          <li key={option} className={css.item}>
            {option}: {props[option]}
          </li>
        ))}
        <li className={css.item}>total : {total}</li>
        <li className={css.item}>positive feedback : {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
