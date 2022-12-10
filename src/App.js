import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const Web3 = require("web3");
/* const web3 = new web3(web3.givenprovider); */
const web3 = new Web3("http://127.0.0.1:7545");

function App() {
	const [text, setText] = useState(" ")
	const captureText = (event) => {
		event.preventDefault();
		const uploadText = text;

		window.ethereum.request({ method: 'eth_requestAccounts' }).then(acc => {
			console.log(acc);
			if(!acc) {
				window.alert("Failed to get account");
			}

			// TODO: Smart contract shit


		});

	};

  return (
    <div className="App">
      <nav className='sticky-section'>
        <h1>Blockchain Pastebin</h1>
        <button className="btn" onClick={captureText}>Login</button>
      </nav>
      <div class="container">
        <textarea id="page_form_content" placeholder="Paste Here!" rows="4 " cols="50" onChange ={(event)=>{setText(event.target.value)}} > </textarea>
        </div>
    </div>
  );
}

export default App;
