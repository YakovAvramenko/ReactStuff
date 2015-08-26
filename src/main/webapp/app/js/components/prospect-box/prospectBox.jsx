import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

export default (wrapperClasses, title, that) =>

    <div className={wrapperClasses}>
        <ReactBootstrap.Panel header={title} bsStyle='primary'>
            Panel content
        </ReactBootstrap.Panel>

        <button class="btn btn-primary">Action</button>
    </div>
