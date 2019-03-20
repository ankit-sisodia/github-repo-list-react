import React, { Component } from 'react';

import RepoList from './containers/repoList/repoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RepoList />
      </div>
    );
  }
}

export default App;
