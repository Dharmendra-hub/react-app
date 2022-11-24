import logo from './logo.svg';
import './App.css';

import Counter from './counter';

const callBack = (data) => {
  console.log('child says: ', data);
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter getFromChild={callBack} />
      </header>
    </div>
  );
}

export default App;
