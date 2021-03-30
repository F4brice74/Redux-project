
import React, {useState, useEffect} from 'react'
import './App.css';
import Card from './components/Card'
import Nav from './components/Nav'
import { Constant, Request} from './service/index'

const {TOP_STORIES, MOST_POPULAR} = Constant

function App() {

  const [results, setResults] = useState([]);
 
  useEffect(()=>{
    let request = new Request(TOP_STORIES);
    request.get()
    .then(articles => setResults(articles)) 
    .catch(err => console.log(err));
  }, [])
  return (
    <div className="container">
    <div className="col-md-6 offset-md-3">
      <Nav />
      {results.map((result)=>{
        return (
           <Card{...result} />
        )
      })}
      </div>
      
    </div>
  );
}

export default App;
