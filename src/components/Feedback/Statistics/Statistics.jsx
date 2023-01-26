import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      {/* <ul>
        {feedbackOptions.map(option => (
          <li key={option} className={css.item}>
            {option}: {this.state[option]}
          </li>
        ))}
      </ul> */}
      <p className={css.item}>total : {total}</p>
      <p className={css.item}>positive feedback : {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
