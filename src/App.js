import React from 'react';
// BrowserRouter : 브라우저 history를 사용해서 구현할 Router이고, Router라고 부르겠다는 뜻
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
        </Router>
    );
};

export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
