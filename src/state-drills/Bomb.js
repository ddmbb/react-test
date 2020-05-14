import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      console.log("setInterval");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let result = null;
    if (this.state.count % 2 == 0) result = <p>"tick"</p>;
    else if (this.state.count % 2 != 0 && this.state.count < 8)
      result = <p>"tock"</p>;
    else if (this.state.count >= 8) result = <p>"Boom!!!"</p>;

    return <div>{result}</div>;
  }
}

export default Bomb;
