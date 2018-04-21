import React from 'react';

const ListItem = (props) => <li key={props.id}><img src={props.src} alt={props.alt} /></li>


export default ListItem;