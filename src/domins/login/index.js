import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import axios from 'axios';

class Login extends Component {
  
  getUser = () => {
    axios.get('/api/user')
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quibusdam sint repellendus magnam nihil tempora a omnis sequi nulla quisquam quod pariatur ipsam, molestiae architecto ea tempore ullam et asperiores.</p>
        <Button onClick={this.getUser}>试试API</Button>
      </div>
    );
  }
}

export default Login;