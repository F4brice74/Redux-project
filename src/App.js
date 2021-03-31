
import React, {useState, useEffect} from 'react'
import './App.css';
import Card from './components/Card'
import Nav from './components/Nav'
import { Constant, Request} from './service/index'

const {TOP_STORIES, MOST_POPULAR} = Constant

function App() {

  const [results, setResults] = useState([]);
  const[api, setApi] = useState(TOP_STORIES)
 
  useEffect(()=>{
    let request = new Request(api);
    request.get()
    .then(articles => setResults(articles)) 
    .catch(err => console.log(err))
    console.log("api :", api)
  }, [api])
  const updateRequest = (withApi) => {
    setApi(withApi)
  }
  return (
    <div className="container">
    <div className="col-md-6 offset-md-3">
      <Nav updateRequest={updateRequest} />
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
