import React from 'react';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  //the useeffect that controls the effect of the getentries
  useEffect(() => {
    getItems();
  },[])

  const[items, setItems] = useState([]);//the state for the api
  const[loading, setLoading] = useState(false);// this checks if the api has been loaded
  const[error, setError] = useState(null);// this loads the error
  //the axios getting the api data
  const getItems = () => {
    axios.get("https://restcountries.com/v2/all")
      .then(res => {
        setItems(res.data);
        setLoading(true);
      },
      
      (error) =>{
        setLoading(true);
        setError(error);
      }
      )
  };


  return (
    <div className = "home"> 
      <Search       
      items = {items}
      loading = {loading}
      error = {error}
      />
    </div>
  );
}

export default App;
