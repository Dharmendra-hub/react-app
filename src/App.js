import React from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  //Lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            //console.log(this.state);
          }
        );
      });
  }

  onSearchInput = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchInput } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchInput} placeholder='Search Monsters' className='monsters-search-box' />
        <CardList monsters={filterMonsters} anything={['a', 'b', 'c']} />
      </div>
    );
  }
}

export default App;
