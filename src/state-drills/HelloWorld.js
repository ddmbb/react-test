import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "World",
    };
  }
  handleButtonClick = (string) => {
    this.setState({
      who: string,
    });
  };

  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleButtonClick("World")}>World</button>
        <button onClick={() => this.handleButtonClick("Friend")}>Friend</button>
        <button onClick={() => this.handleButtonClick("React")}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
