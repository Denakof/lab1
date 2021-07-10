import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import SelectedBeast from "./component/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Selectedpic: null,
      show: false,
    };
  }

  Selectcard = (title, par, num, imgUrl) => {
    this.setState({
      show: true,
    });
    this.setState({
      Selectedpic: (
        <SelectedBeast
          handleClose={this.handleClose}
          title={title}
          par={par}
          num={num}
          imgUrl={imgUrl}
          show={this.state.show}
        />
      ),
    });
  };

  handleClose = () => {
    console.log("Close");
    this.setState({
      show: false,
      Selectedpic: null,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.Selectedpic}
        <Main selectfun={this.Selectcard} />
        <Footer />
      </>
    );
  }
}

export default App;
