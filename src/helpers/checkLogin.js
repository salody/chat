import axios from 'axios';

const isLoggedInPromise = () => (
  axios.get('/api/checkLogin')
    .then((response) => {
      if (response && response.data.code === 0) {
        return true;
      } else {
        return false;
      }
    })
  )

// 后端有一个checkLogin的接口，基于返回的code来做判断 0登录 1未登录

export default isLoggedInPromise;