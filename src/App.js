import logo from './logo.svg';
import './App.css';

import Counter from './counter';
//Ref way 1
import MyRefComponent from './components/myRefComponent';
//Ref Way 2
import SearchBarRef from './components/searchBarRef';

const callBack = (data) => {
  console.log('child says: ', data);
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter getFromChild={callBack} />
        <MyRefComponent />
        <SearchBarRef />
      </header>
    </div>
  );
}

export default App;
