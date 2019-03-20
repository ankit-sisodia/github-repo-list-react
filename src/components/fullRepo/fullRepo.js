import React, { Component } from 'react';

import './fullRepo.css';

class FullRepo extends Component {

    render () {
        let repo = null;
        if( this.props.dataLoaded ){
            repo = <p className="full-repo-info">Please select a Repo!</p>;            
        }
        if ( this.props.id ) {
            repo = <p className="full-repo-info">Loading...!</p>;
        }
        if ( this.props.id ) {
            repo = (
                <div className="fullRepo">
                    <div><span>Language: </span><span>{this.props.repo.language}</span></div>
                    <div><span>Followers: </span><span>{this.props.repo.followers}</span></div>
                    <div><span>URL: </span><span>{this.props.repo.url}</span></div>
                    <div><span>Description: </span><span>{this.props.repo.description}</span></div>
                </div>

            );
        }
        return repo;
    }
}

export default FullRepo;