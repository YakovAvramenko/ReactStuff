import React from 'react';
import tpl from './prospectBox.jsx';

export default class BrochureCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return tpl(this.props.wrapperClasses, "ProspectBox title", this);
    }
}

