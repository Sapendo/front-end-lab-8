import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Input from './features/Input';
import ColorsList from './features/ColorsList';
import ColorsCounter from './features/ColorsCounter';
import SelectedColorsList from './features/SelectedColorsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      allColors: [],
      showedColors: [],
      selectedColors: [],
      requareColor : ""
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.addColor = this.addColor.bind(this);
    this.delColor = this.delColor.bind(this);
  }

  filterSearch () {
    let requareColor = this.state.requareColor;
    this.setState({
      showedColors: this.state.allColors.filter(function(el) {
        return el.tags.find((el) => !!~el.indexOf(requareColor));
      })
    });
  }

  handleSearch (event) {
    this.setState({
      requareColor: event.target.value.toLowerCase()
    }, () => {
      this.filterSearch();
    })
  }

  addColor (color) {
    let allColors = this.state.allColors,
        index = allColors.indexOf(color);
    allColors.splice(index, 1);

    this.setState({
      selectedColors: [...this.state.selectedColors, color],
      allColors: allColors,
    }, () => {
      this.filterSearch();
    })
  }

  delColor (color) {
    let selectedColors = this.state.selectedColors,
        index = selectedColors.indexOf(color);
    selectedColors.splice(index, 1);

    let allColors = [...this.state.allColors, color].sort(function(a, b) {
      return (a.id - b.id);
    });

    this.setState({
      selectedColors: selectedColors,
      allColors: allColors,
    }, () => {
      this.filterSearch();
    })
  }
  
  componentDidMount() {
      fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
      .then(response => response.json())
      .then(data => this.setState({allColors: data, showedColors: data, loaded: true}));
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <Input handleSearch={this.handleSearch} />
          <SelectedColorsList colors={this.state.selectedColors.slice(
          this.state.selectedColors.length > 5 ? this.state.selectedColors.length-5 : 0 , 
          this.state.selectedColors.length)} delColor={this.delColor}/>
        </div>
        <ColorsCounter count={this.state.showedColors.length}/>
        <ColorsList colors={this.state.showedColors} addColor={this.addColor} load={this.state.loaded}/>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);