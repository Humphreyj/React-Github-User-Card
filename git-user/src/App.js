import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: ''

    }

    

  }

  componentDidMount(){
    let followersArr = [];
    const getUsers = () => {
      axios
      .get('https://api.github.com/users/humphreyj')
  .then(res => {
     let userData = res.data;
     console.log(userData);
    console.log(res.data.avatar_url);
    this.setState({user : res.data})
    

    return axios 
            .get(res.data.followers_url)
            .then(response => {
              console.log(response.data);
              
              response.data.forEach(item => {
                axios
                .get(`https://api.github.com/users/${item.login}`)
                .then(resp => {
                  followersArr.push(resp.data)
                  console.log(resp.data);
                  this.setState({followers: followersArr})
                console.log(this.state.followers)
                  
                  
                  
                  
                  
                })
                
                
              })
              
            })
    
  })
  .catch(err => {
    console.log(err);
  })
    }

    getUsers();
  }

  

  render() {

    console.log(this.state.user);
    console.log(this.state.followers);
    return (
      <div className="App">
        <Card
        avatar={this.state.user.avatar_url} 
        name={this.state.user.name}
        username={this.state.user.login}
        location={this.state.user.location}
        profile={this.state.user.html_url}
        followers={this.state.user.followers}
        following={this.state.user.following}
         />

         {
           this.state.followers && this.state.followers.map(follower => {
             console.log(follower)
             return (
              <Card
              avatar={follower.avatar_url} 
              name={follower.name}
              username={follower.login}
              location={follower.location}
              profile={follower.html_url}
              followers={follower.followers}
              following={follower.following}
               />
             )
           })
         }
      </div>
    );
  }
  
}

export default App;
