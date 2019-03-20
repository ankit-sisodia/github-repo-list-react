import React from 'react';

import './search.css';

const post = (props) => {
    let textInput;
    let onSearchClickedHandler = () => {
        props.clicked(textInput.value)
        textInput.value = '';
    }

    let onEnterPressedHandler = (event) => {
        if( event.key.toLowerCase() === 'enter' ){
            props.searched(event);
            textInput.value = '';
        }
    }
    
    return(
        <div className="search-container">
            <div>Github</div>
            <input className="search-button" onClick={()=> onSearchClickedHandler()} type="button" value="Search"/>
            <input ref={(inputEl)=>{textInput = inputEl}} placeholder="Search Github repositories" onKeyUp={(event)=> onEnterPressedHandler(event)} className="search-input" type="search"/>
        </div>
    )
};

export default post;