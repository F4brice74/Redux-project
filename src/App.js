
import React, {useState, useEffect} from 'react'
import './App.css';
import Card from './components/Card'
import Nav from './components/Nav'
import { Constant, Request} from './service/index'
import { useDispatch, useSelector} from "react-redux"
import { getTopStories, getMostPopular } from './lib/state/actions';

const {TOP_STORIES, MOST_POPULAR} = Constant

function App() {

  const [results, setResults] = useState([]);
  const[api, setApi] = useState(TOP_STORIES)
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getTopStories())
    dispatch(getMostPopular())
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
