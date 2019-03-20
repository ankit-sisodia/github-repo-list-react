import React from 'react';

import './repo.css';

const repo = (props) => {
    let classes = [];

    if( props.selected ){
        classes = ['repo', 'selected'];
    } else {
        classes = ['repo'];
    }

    return (
        <div className={classes.join(' ')} onClick={props.clicked}>
            <div className="repo-item" title={props.title}>{props.title}</div>
            <div className="repo-item" title={props.author}>{props.author}</div>
        </div>
    )
};

export default repo;