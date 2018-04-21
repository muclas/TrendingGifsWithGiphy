import React from 'react';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.loadClicked = this.loadClicked.bind(this);
    this.randomClicked = this.randomClicked.bind(this);
    this.randomizeClicked = this.randomizeClicked.bind(this);
    this.reverseClicked = this.reverseClicked.bind(this);
    this.clearClicked = this.clearClicked.bind(this);
  }

  loadClicked(e) {
    e.preventDefault();
    this.props.loadClicked();
  }

  randomClicked(e) {
    e.preventDefault();
    this.props.randomClicked();
  }

  randomizeClicked(e) {
    e.preventDefault();
    this.props.randomizeClicked();
  }

  reverseClicked(e) {
    e.preventDefault();
    this.props.reverseClicked();
  }

  clearClicked(e) {
    e.preventDefault();
    this.props.clearClicked();
  }

  render() {
    return (
      <div>
        <input type="button" onClick={this.loadClicked} value="Load (or Reload) Trending GIFs" /><br/>
        <input type="button" onClick={this.randomClicked} value="Select One at Random" /><br />
        <input type="button" onClick={this.randomizeClicked} value="Randomize Order" /><br />
        <input type="button" onClick={this.reverseClicked} value="Reverse Order" /><br />
        <input type="button" onClick={this.clearClicked} value="Clear All" /><br />
      </div>
    );
  }
}
