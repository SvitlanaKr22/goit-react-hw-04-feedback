import { Component } from 'react';
import FeedbackOptions from './FeetbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  total = 0;

  onClickFeedback = evt => {
    const feedback = evt.currentTarget.textContent;
    this.total = 1;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback() {
    this.total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return this.total;
  }

  countPositiveFeedbackPercentage() {
    return this.total && ((this.state.good * 100) / this.total).toFixed(1);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <Section title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          {!this.total ? (
            <Notification message={'There is no feedback'}></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() + '%'}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
