import React from 'react';
import tpl from './shelf.jsx';

export default class Shelf extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return tpl(this);
    }
}

