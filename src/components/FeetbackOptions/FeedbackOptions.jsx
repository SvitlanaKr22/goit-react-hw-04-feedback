import PropTypes from 'prop-types';
import css from './../FeetbackOptions/FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={nanoid()}
          onClick={onLeaveFeedback}
          className={css.button_feedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
