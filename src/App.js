// feature-1
import React from 'react';
import Dogs from './components/Dogs';
import Filter from './components/Filter';
import data from './data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: data.dogs,
      features: "",
      cutes: ""
    }
  }

  filterDogs = (event) => {
    //impl
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({ feature: event.target.value, dog: data.dogs });
    } else {
      this.setState({
        features: event.target.value,
        dogs: data.dogs.filter(dog => dog.features.indexOf(event.target.value) >= 0)
      })
    }


  }




  render() {
    console.log(this.state);
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                features={this.state.features}
                filterDogs={this.filterDogs}
                sortCutes={this.sortCutes}
                count={this.state.dogs.length}
              >
              </Filter>
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
