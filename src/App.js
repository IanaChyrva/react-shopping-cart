// feature-1
import React from 'react';
import Dogs from './components/Dogs';
import data from './data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: data.dogs,
      features: "",
      sort: ""
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Dogs dogs={this.state.dogs} />
            </div>
            <div className="sidebar">
              Cart items
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }

}

export default App;
