import React from "react";
import {HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Suspense, lazy, useState} from "react";

import {Loading} from "./components/Loading";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const AddMovie = lazy(() => import(/* webpackChunkName: "add" */ "./pages/AddMovie"));
const EditMovie = lazy(() => import(/* webpackChunkName: "edit" */ "./pages/EditMovie"));

function App() {
  return (

    <Router>
      <div className="App">
        <nav className="App--navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add movie</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/edit-movie/:id" element={
          <Suspense fallback ={<Loading/>}>
            <EditMovie/>
            </Suspense>
          }
          />
          <Route path="/add-movie" element={
            <Suspense fallback ={<Loading/>}>
              <AddMovie/>
            </Suspense>
          }
          />
        
          <Route path="/" element={ 
          <Suspense fallback={<Loading/>}>
             <Home />
          </Suspense>
         } 
         />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;