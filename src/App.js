import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState(''); //This work just like array destructure
  const [monsters, setMonsters] = useState([]);

  //Trigger Side Effects
  //Always define dependency in useEffect else it will run everytime on function render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  console.log('render');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} anything={['a', 'b', 'c']} />
    </div>
  );
}

export default App;
