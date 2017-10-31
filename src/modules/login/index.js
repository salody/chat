import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import axios from 'axios';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email:'',
      password: ''
    }
  }

  handleClick = () => {
    let { email, password } = this.state;
    let user = { email, password };
    axios.post('/api/login', user)
      .then(res => console.log(res))
  };

  render() {
    return (
      <List renderHeader={() => '登录页'}>
        <InputItem
          clear
          onChange={(v) => this.setState({email: v})}
          placeholder="请输入您的邮箱"
        >账号</InputItem>
        <InputItem
          clear
          type='password'
          onChange={(v) => this.setState({password: v})}
          placeholder="请输入您的密码"
        >密码</InputItem>
        <List.Item>
          <div
            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
            onClick={this.handleClick}
          >
            登录
          </div>
        </List.Item>
      </List>
    );
  }
}

export default Login;