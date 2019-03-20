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
            <div className="repo-item">{props.title}</div>
            <div className="repo-item">{props.author}</div>
        </div>
    )
};

export default repo;