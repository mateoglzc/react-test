import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
          Please enter your username and password.
        </p>
        <form>
          <input type="text" name="username" class="input-text-box" placeholder='Username'/>
          <input type="password" name="password" class="input-text-box" placeholder='Password'/>
          <br/>
          <input type="submit" value="Submit" class="button-cool"/>
        </form>
      </header>
    </div>
  );
}

export default App;
