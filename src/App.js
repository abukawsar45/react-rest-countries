import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	return (
		<div className='App'>
			<Load></Load>
		</div>
	);
}

function Load() {
	const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data=>setCountries(data))
  },[])
	return (
		<div>
			<h2>Visiting every country all the wrold!!!!</h2>
<h4>Available Countries: {countries.length}</h4>
		</div>
	);
}

export default App;
