import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import {React, useState, useEffect} from 'react';
import Pagination from './components/Pagination/Pagination';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/LogIn/Login';
import Signup from './components/SignUp/Signup';


function App() {

  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
}



  const getPosts = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {setPosts(data);});
    
}

//Get Current Posts
const indexOfLastPost = currentPage*perPage;
const indexOfFirstPost = indexOfLastPost - perPage


useEffect(() => {getPosts();console.log('Posts Changed');},[]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Cards posts={posts} indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost} />
              <Pagination posts={posts} perPage={perPage} paginate={paginate}/>
            </Route>
        </Switch> 
      </Router>
      
      
      
    </div>
  );
}

export default App;


// setPageCount(Math.ceil(data.length / perPage))