import React, { Component } from "react";

interface DigitalClockProps {}

interface DigitalClockState {
  date: Date;
}

class DigitalClock extends Component<DigitalClockProps, DigitalClockState> {
  private timer: number | undefined;

  constructor(props: DigitalClockProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default DigitalClock;
