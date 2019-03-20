import React, { Component } from 'react';
import axios from 'axios';

import Repo from '../../components/repo/repo';
import Search from '../../components/search/search';

import FullRepo from '../../components/fullRepo/fullRepo';
import './repoList.css';

class RepoList extends Component {
    state = {
        repos: [],
        selectedRepoId: null,
        selectedRepo: {},
        dataLoaded: false,
        searched: false
    }

    getRepos = (value) => {
        if( value.trim().length === 0 ){
            return false;
        }
        this.setState({searched: true, dataLoaded: false});
        axios.get( `/{${value}}` )
        .then( response => {
            let repos = response.data.repositories.slice(0, 10);
            repos.map(repo=>repo['selected'] = false)
            this.setState({
                dataLoaded: true, 
                repos: repos,
                searched: false
            });
            if( response.data.repositories.length === 0 ){
                this.setState({dataLoaded: false, searched: false});
            }
        } )
        .catch(error => {
            this.setState({dataLoaded: false, searched: false});
        });
    }

    repoSelectedHandler = (repo) => {

        let newState = {...this.state}
        let newRepos = [...newState.repos]

        newRepos.forEach((repo)=>{
            repo.selected = false;
        });

        let index = newRepos.findIndex( r => r.pushed === repo.pushed );

        newRepos[index]['selected'] = true;

        this.setState({  
            selectedRepoId: repo.pushed,
            selectedRepo: repo, 
            repos: newRepos 
        });
    }

    searchHandler = (event) => {
        if( event.key.toLowerCase() === 'enter' ){
            this.getRepos(event.target.value);            
        }
    }

    clickHandler = (val) => {
        this.getRepos(val);
    }

    render () {
        let repos = this.state.repos.map(repo => {
                return <Repo 
                    key={repo.pushed} 
                    title={repo.name} 
                    author={repo.owner}
                    selected={repo.selected}
                    clicked={() => this.repoSelectedHandler(repo)} />;
            });

        return (
            <div>
                <Search searched={(event)=>{this.searchHandler(event)}} clicked={(val)=>{this.clickHandler(val)}}/>
                <div className="main-container">    
                    {  !this.state.searched && (this.state.repos.length === 0 || (!this.state.dataLoaded && !this.state.searched))? (<div className="info-el">Type and press Button or press Enter to search.</div>): null }    
                    { (!this.state.dataLoaded && this.state.searched )? (<div className="info-el">Loading data...</div>): null }    
                    { this.state.repos.length > 0? (
                        <div style={{ width: '50%' }}> 
                            <div className="repo-header">
                                <div className="repo-header-item">Name</div>
                                <div className="repo-header-item">Owner</div>
                            </div>
                            
                            <div className="repos">
                                {repos}
                            </div> 
                        </div>): null }
                    <div style={{ width: '50%' }}>
                        <FullRepo dataLoaded={this.state.dataLoaded} repo={this.state.selectedRepo} id={this.state.selectedRepoId} />
                    </div> 
                </div>
            </div>
        );
    }
}

export default RepoList;