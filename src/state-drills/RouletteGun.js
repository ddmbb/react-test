import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }

  static defaultProps = {
    randomChamber: Math.ceil(Math.random() * 8),
  };

  handleButtonClick = () => {
    setTimeout(() => {
      this.setState({
        spinningTheChamber: false,
      });
    }, 2000);
    this.setState({
      spinningTheChamber: true,
      chamber: Math.ceil(Math.random() * 8),
    });
    return () => clearTimeout();
  };

  render() {
    let result = null;
    if (this.state.chamber === null && this.state.spinningTheChamber === false)
      result = (
        <button onClick={() => this.handleButtonClick()}>
          Pull the trigger!
        </button>
      );
    else if (this.state.spinningTheChamber === true)
      result = <p>"spinning the chamber and pulling the trigger!"</p>;
    else if (
      this.state.chamber === this.props.randomChamber &&
      this.state.spinningTheChamber === false
    )
      result = (
        <div>
          <p>"BANG!!!"</p>
          <button onClick={() => this.handleButtonClick()}>Play Again</button>
        </div>
      );
    else if (
      this.state.chamber !== this.props.randomChamber &&
      this.state.spinningTheChamber === false
    )
      result = (
        <div>
          <p>you're safe!</p>
          <button onClick={() => this.handleButtonClick()}>Play Again</button>
        </div>
      );
    return <div>{result}</div>;
  }
}
export default RouletteGun;
