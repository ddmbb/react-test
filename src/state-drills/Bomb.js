import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
     };
  }
componentDidMount() {
  console.log('componentDidMount')
  this.interval = setInterval(() => {
    console.log('setInterval')
    this.setState({ count: this.state.count +1 })
  }, 1000)
}

componentWillUnmount() {
  clearInterval(this.interval)
}

  render() {
      <div>
       {if (count % 2 == 0) } return <p>"tick"</p>;
       else if (count % 2 != 0) return <p>"tock"</p>;
       else if (count >= 8) return <p>"Boom!!!"</p>}
      </div>
    );
  }
}

export default Bomb;
