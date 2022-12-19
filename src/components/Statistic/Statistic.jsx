import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statsDiv}>
      <h2 className={css.subtitle}>Statistics:</h2>
      <div>
        <p className={css.p}>Good:{good}</p>
        <p className={css.p}>Neutral:{neutral}</p>
        <p className={css.p}>Bad:{bad}</p>
      </div>
      <p className={css.p}>Total:{total}</p>
      <p className={css.p}>Positive feedback:{positivePercentage}%</p>
    </div>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
