import React from 'react';

import './search.css';

const post = (props) => {
    let textInput;
    let onSearchClicked = (val) => {
        props.clicked(textInput.value)
    }
    
    return(
        <div className="search-container">
            <div>Github</div>
            <input className="search-button" onClick={()=> onSearchClicked('angular')} type="button" value="Search"/>
            <input ref={(inputEl)=>{textInput = inputEl}} placeholder="Search Github repositories" onKeyUp={props.searched} className="search-input" type="search"/>
        </div>
    )
};

export default post;