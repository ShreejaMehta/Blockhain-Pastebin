import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='sticky-section'>
        <h1>Blockchain Pastebin</h1>
        <button className="btn">Login</button>
      </nav>
      <div class="container">
        <textarea id="page_form_content" name="paste [content]" placeholder="Paste Here!" rows="4 " cols="50" > </textarea>
        </div>
    </div>
  );
}

export default App;