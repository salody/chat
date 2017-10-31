import React, { Component } from 'react';
import { List, InputItem, Radio } from 'antd-mobile';
import axios from 'axios';

const RadioItem = Radio.RadioItem;

class Signup extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '',
      email:'',
      password: '',
      type: '',
      value: ''
    }
  }

  handleClick = () => {
    let { name, email, password, type } = this.state;
    let user = {name, email, password, type};
    axios.post('/api/signup', user)
      .then(res => console.log(res))
  };

  onChange = (item) => {
    console.log(this.state);
    this.setState({
      value: item.value,
      type: item.label
    });
  };

  render() {
    const data = [
      { value: 0, label: 'teacher' },
      { value: 1, label: 'student' },
    ];
    return (
      <List renderHeader={() => '注册页'}>
        <InputItem
          clear
          onChange={(v) => this.setState({name: v})}
          placeholder="请输入您的姓名"
        >姓名</InputItem>
        <InputItem
          clear
          onChange={(v) => this.setState({email: v})}
          placeholder="请输入您的邮件"
        >邮件</InputItem>
        <InputItem
          clear
          type='password'
          onChange={(v) => this.setState({password: v})}
          placeholder="请输入您的密码"
        >密码</InputItem>
        <List>
          {data.map(i => (
            <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
        <List.Item>
          <div
            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
            onClick={this.handleClick}
          >
            注册
          </div>
        </List.Item>
      </List>
    );
  }
}

export default Signup;