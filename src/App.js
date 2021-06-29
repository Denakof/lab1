import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './component/Main'
import SelectedBeast from './component/SelectedBeast'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Selectedpic: null,

    }
  }

  Selectcard = (param) => {
    this.setState(
      { Selectedpic: param }
    )

  }


  render() {
    return (
      <>
        <Header />
        {this.state.Selectedpic}
        <Main selectfun={this.Selectcard} />
        <Footer />
      </>
    )
  }
}

export default App;