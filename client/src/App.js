import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import NodeAnimation from './components/NodeAnimation'
import Squares from './components/Squares'
import {Switch, Link, Route, useLocation} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion' 

let nodesVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      duration:1
    }
  }
}

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Header/>
      <Link to='/'><button>Waves</button></Link>
      <Link to='/squares'><button>Sqares</button></Link>
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <motion.div
              variants={nodesVariants}
              initial="initial"
              animate="animate"
            >
              <NodeAnimation/>
            </motion.div>
          </Route>
          <Route exact path="/squares">
            <Squares/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;