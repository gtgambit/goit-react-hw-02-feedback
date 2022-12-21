import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistic from 'components/Statistic/Statistic';
import Section from 'components/Section/Section';
import { Component } from 'react';
import { Notification } from './utils/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) return;
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Section title="Please leave your feedback:">
        <FeedbackOptions
          options={Object.keys(this.state)}
          OnLeaveFeedback={this.onFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
