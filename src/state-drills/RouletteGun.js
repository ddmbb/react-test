import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ 
        spinningTheChamber: true,
     });
     setTimeout (() => {
         let randomChamber = (Math.random() * 8);
        console.log(randomChamber);
         }, 2000);
    this.setState({
        spinningTheChamber: false,
    });
     }
  }

render() {
    let result = null;
    if (this.state.chamber === null && this.state.spinningTheChamber === false) result = <button onClick={() => this.handleButtonClick("Chamber")}>Pull the trigger!</button>;
    else if (this.state.spinningTheChamber === true) result = <p>"spinning the chamber and pulling the trigger!"</p>;
    else if (this.state.chamber === randomChamber && this.state.spinningTheChamber === false) result = <p>"BANG!!!"</p>;
    else if (this.state.chamber !== randomChamber && this.state.spinningTheChamber === false) result = <p>you're safe!</p>;
    return <div>{result}</div>;
  };

export default RouletteGun;
