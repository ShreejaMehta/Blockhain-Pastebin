import './App.css';

function App() {
  const publish = () =>
  {
    console.log('Publish Was clicked');
  }
  return (

 
    <div className="App">
      <nav className='sticky-section'>
        <h1>Blockchain Pastebin</h1>
        <button className="btn" onClick={publish} >Publish</button>
      </nav>
      <div className="container">
        <textarea id="page_form_content" name="paste [content]" placeholder="Paste Here!"> </textarea>
        </div>
    </div>
  );
}

export default App;