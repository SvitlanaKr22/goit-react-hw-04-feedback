//import { Component } from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeetbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedback = evt => {
    const feedback = evt.currentTarget.textContent;
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  let total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return total && ((good * 100) / total).toFixed(1);
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Section title={'Pleace leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClickFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {!total ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage() + '%'}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
