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
         let randomChamber = null;
         randomNumber(1, 8){
             randomChamber = Math.random() * 8;
        console.log(randomChamber);
         } }, 2000);
     });
  };

//   componentDidMount() {
//     console.log("componentDidMount");
//     this.interval = setInterval(() => {
//       console.log("setInterval");
//       this.setState({ count: this.state.chamber  });
//     }, 2000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

  render() {
    let result = null;
    if (this.state.chamber === null && this.state.spinningTheChamber === false) result = <p>"nothing"</p>;
    else if (this.state.spinningTheChamber === true) result = <p>"spinning the chamber and pulling the trigger!"</p>;
    else if (this.state.chamber === randomChamber && this.state.spinningTheChamber === false) result = <p>"BANG!!!"</p>;
    else if (this.state.chamber !== randomChamber && this.state.spinningTheChamber === false) result = <p>you're safe!</p>;
    return <div>{result}</div>;
  }
}

export default RouletteGun;
