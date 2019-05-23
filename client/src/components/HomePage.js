// // -------------------------------------------------IMPORTS--------------------------------------------------------
// import React, { Component } from 'react';
// import axios from 'axios';
// import Routes from './Routes.js';
// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
// import rd3 from 'react-d3-library';

// // import photos and icons
// import logo from './images/quarry.png'
// import icon from './images/search.png';
// import bar from './images/datadrawing.svg'

// // import CSS files
// import './App.css';
// // ----------------------------------------------------------------------------------------------------------------

// export default class HomePage extends Component {
//   state = {
//     toDashboard: false,
//   }
//   handleSubmit = (user) => {
//     this.setState(() => ({
//         toDashboard: true
//       }))
//   }
//   componentDidMount = () => {
//     axios.get(`ec2-18-188-99-154.us-east-2.compute.amazonaws.com`)
//     .then(res => {
//       const dataFromServer = res.data;
//       this.setState({ data: dataFromServer });
//     });
//   }
  

//   render() {
//     if (this.state.toDashboard === true) {
//       return <Redirect to='/dataset' />
//     }
//     return (
//       <div className="HomePage">
//         <header className="App-header">

//         {/* -----------------NAVIGATION BAR ------------------------*/}
//         <div className="nav">
//           {/* logo */}
//           <div><img className="quarry-logo" src={logo} alt="Logo" /></div>
//           {/* navbar search */}
//           <div className="whole-search" id="nav-search">
//             <div className="search-div"><input className="search-bar" type="text" value={this.state.value} placeholder="Search for a data set"></input></div>
//             <form onSubmit={this.handleSubmit}>
//               <div><input className="search-icon" type="image" src={icon}/></div>
//             </form>
//           </div>
//         </div>

//         {/* ------------------BODY -------------------------------*/}
//         <div className="bg">
//           <div>
//             <img className="data-draw" src={bar}></img>
//           </div>
//           <div>
//             <h1>Making Data Access Easy</h1>
//             <p className="intro">Quarry is a conversational system that provides users with a non-technical way to query large data sets. Simply type in questions about data in a data set, and Quarry will quickly supply and visualize answers!</p>
//             <p className="intro">Search for a data set to get started!</p>
//           </div>
//           <form onSubmit={this.handleSubmit}>
//             <div className="whole-search">
//               <input className="search-bar" type="text" value={this.state.value} placeholder="Search for a data set"></input>
//               {/* <Router>
//                 <Link to='/dataset'>Link</Link>
//               </Router> */}
//               <div><input className="search-icon" type="image" src={icon}/></div>
//             </div>
//             {/* <div><input className="sub-button" type="submit" value="search" /></div> */}
//           </form>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

import React from 'react';
import node from './diagram';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  render: function() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
});
