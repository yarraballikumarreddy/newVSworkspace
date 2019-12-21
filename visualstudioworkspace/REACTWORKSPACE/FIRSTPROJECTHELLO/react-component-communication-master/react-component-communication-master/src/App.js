import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';
import ParentNew from './components/com child to parent/parentnew'
class App extends Component {
  state = {
    title:'placeholder title'
  }

  changeTheWorld = (newTitle) => {
      this.setState({title:newTitle});
  }

  render() {
    return (
      <div className="App">
         <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
         keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
          title={this.state.title} />
        <ParentNew></ParentNew>
      </div>
    );
  }
}

export default App;
