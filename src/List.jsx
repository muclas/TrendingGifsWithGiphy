import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
  render() {
    return (
      <ol>
        {this.props.list.map(item => {
          return (
            <ListItem src={item.src} id={item.id} alt="Giphy" />
          );
        })}
      </ol>
    );
  }
}