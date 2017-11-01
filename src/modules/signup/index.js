import React, { Component } from 'react';
import { List, InputItem, Radio, Button, ActivityIndicator, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import signupRequest from './actions';
import axios from 'axios';

const RadioItem = Radio.RadioItem;

@connect(
  state => ({
    msg: state.signup.msg,
    isFetching: state.signup.isFetching,
    isAuthenticated: state.auth.isAuthenticated
  }),
  { signupRequest }
)
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      type: '',
      value: ''
    }
  }

  componentDidMount() {
    console.log('====================================');
    console.log('signup mount');
    console.log('====================================');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.msg !== '' && nextProps.msg !== '正在请求') {
      Toast.info(nextProps.msg, 2, null, false);
    }
  }

  handleClick = () => {
    let { name, email, password, type } = this.state;
    let user = { name, email, password, type };
    this.props.signupRequest(user)
  };

  onChange = (item) => {
    this.setState({
      value: item.value,
      type: item.label
    });
  };

  render() {
    const data = [
      { value: 0, type: 'teacher', label: '老师' },
      { value: 1, type: 'student', label: '学生' },
    ];
    return (
      this.props.isAuthenticated ? (
        <Redirect to='/home'/>
      ) : (
          <div>
            <List renderHeader={() => '注册页'}>
              <InputItem
                clear
                onChange={(v) => this.setState({ name: v })}
                placeholder="请输入您的姓名"
              >姓名</InputItem>
              <InputItem
                clear
                onChange={(v) => this.setState({ email: v })}
                placeholder="请输入您的邮件"
              >邮件</InputItem>
              <InputItem
                clear
                type='password'
                onChange={(v) => this.setState({ password: v })}
                placeholder="请输入您的密码"
              >密码</InputItem>
            </List>
            <List renderHeader={() => '选择您的角色'}>
              {data.map(i => (
                <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i)}>
                  {i.label}
                </RadioItem>
              ))}
            </List>
            <Button
              type={'primary'}
              disabled={this.props.isFetching}
              onClick={this.handleClick}
            >注册</Button>
            <Button
              type={'primary'}
              disabled={this.props.isFetching}
              onClick={() => {
                axios.get('/api/checkAuth')
                  .then(res => console.log(res))
              }}
            >测试</Button>
            <ActivityIndicator
              toast={true}
              text={'Loading'}
              animating={this.props.isFetching} />
          </div>)
    );
  }
}

export default Signup;