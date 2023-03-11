import PropTypes from 'prop-types';
import css from './../Statistics/Statistics.module.css';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.div__stat}>
      <p>Good:</p>
      <p>{good}</p>
      <p>Neutral:</p>
      <p>{neutral}</p>
      <p>Bad:</p>
      <p>{bad}</p>
      <p>Total:</p>
      <p>{total}</p>
      <p>Positive percentage:</p>
      <p>{positivePercentage}</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
