//import React,{useState}from 'react';
import React from 'react'

import { BrowserRouter as Router, Switch, Route, NavLink, withRouter } from 'react-router-dom';
import Articles from './Articles';
//import { set } from 'immutable';

const header = 'Favorite Articles :)';
const footer = 'yuna sugimoto';
const test = 'test';

const Header = ({onClick}) => (
  <h1 className="text-center" style={{ cursor: "pointer" }} onClick={onClick}>
    { header }
  </h1>
);
const Footer = () => (<p className="text-center"> { footer } </p>);



const Nav = () =>{
  
  //const [test,setTest] = useState("test");
  //setTest({test:"neko"})
  return(
    <ul className ="nav nav-pills">
    <li><NavLink exact to="/articles">{test}</NavLink> </li>
    <li><NavLink exact to="/article">お気に入り</NavLink> </li>
  </ul>
);
}


const Routes = withRouter(({history}) => (
  <div className="container">
    <Header onClick={() => history.push("/")} />
    <Nav />
    <Switch>
      <Route exact path="/" component={Articles.List}/>
      <Route exact path="/articles" component={Articles.List}/>
      <Route exact path="/articles/favorite" component={Articles.FavoriteList}/>
      <Route exact path="/articles/:id" component={Articles.Show}/>
    </Switch>
    <Footer />
  </div>
))

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default App;

/*
const test = ()=>{
  const [test,setTest] = useState("test")
  const [a,setA] = useState("test")
  setTest("???")
  return(
    <>
    {test}
    </>
  )
}

const setTest = (test) => {
  return (test+1)
}
class testt {
  constructor(){
    this.state ={
      test : "test",
      a:"",
      b:""
    }
  }
  
  setTest(){
    setState({
      ...this.state,
      test:"???"
    })
  }

  render(){
    return(
      <>
      {this.state.test}
      </>
    )
  }
}
*/
//真ん中の記事リンク
