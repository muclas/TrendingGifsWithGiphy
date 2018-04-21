import React from 'react';
import Buttons from './Buttons';
import List from './List';

export default class TrendingGifs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      visibleItems: [],
    }
    this.loadClicked = this.loadClicked.bind(this);
    this.randomClicked = this.randomClicked.bind(this);
    this.randomizeClicked = this.randomizeClicked.bind(this);
    this.reverseClicked = this.reverseClicked.bind(this);
    this.clearClicked = this.clearClicked.bind(this);
  }

  loadClicked(e) {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
    .then(js => js.json())
    .then(js => {
      let allItems = js.data.map(i => ({id: i.id, src: i.images.fixed_height.url, }));
      this.setState({
        allItems: allItems,
        visibleItems: allItems,
        reversed: false,
      });
    })
  }

  randomClicked() {
    const rnd = Math.floor(Math.random() * Math.floor(this.state.allItems.length));
    const newList = [];
    newList.push(this.state.allItems[rnd]);
    this.setState({
      visibleItems: newList,
    });
  }

  randomizeClicked() {
    const stage = this.state.allItems.slice(0);
    const newList = [];
    while (stage.length > 0) {
      const rnd = Math.floor(Math.random() * Math.floor(stage.length));
      newList.push(stage[rnd]);
      stage.splice(rnd, 1);
    }
    this.setState({
      visibleItems: newList,
    });
  }

  reverseClicked() {
    const newList = [];
    const reversed = this.state.reversed;
    if (reversed) {
      for (let i = 0; i <= this.state.allItems.length - 1; i++) {
        newList.push(this.state.allItems[i]);
      }
    } else {
      for(let i = this.state.allItems.length-1; i >= 0; i--) {
        newList.push(this.state.allItems[i]);
      }
    }
    this.setState({
      visibleItems: newList,
      reversed: !reversed,
    });
  }

  clearClicked() {
    this.setState({
      visibleItems: [],
    });
  }

  render() {
    return (
      <div>
        <Buttons loadClicked={this.loadClicked} randomClicked={this.randomClicked} randomizeClicked={this.randomizeClicked}
          reverseClicked={this.reverseClicked} clearClicked={this.clearClicked} />
        <List list={this.state.visibleItems} />
      </div>
    );
  }
}