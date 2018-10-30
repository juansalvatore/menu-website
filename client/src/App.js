import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing'

function App() {
  return (
    <Router>
      <div style={{ fontFamily: ['Roboto Condensed', 'sans-serif'] }}>
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  )
}

export default App
