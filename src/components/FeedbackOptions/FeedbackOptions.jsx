import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
const FeedbackOptions = ({ options, OnLeaveFeedback }) => {
  return (
    <ul className={css.ul}>
      {options.map(name => (
        <li key={name}>
          <button
            type="button"
            className={css.btn}
            onClick={OnLeaveFeedback}
            name={name}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  OnLeaveFeedback: PropTypes.func,
};
