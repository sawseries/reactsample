
import logo from './logo.svg';
import './App.css';
import Layout from './component/layout/Layout';

function App() {
  return (    
    
    <div className="App">
      <Layout>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      </Layout>
    </div>
  );
}

export default App;


/*import Layout from './layout/layout';

function App() {
  return (    
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*export default App;
const App = () => {
  return (
    <Layout>
      <h1>Welcome to the Home Page!</h1>
      <p>This is some content specific to the Home Page.</p>
    </Layout>
  );
}
export default App;*/



