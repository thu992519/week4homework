import axios from 'axios';

axios.get('/assets/php/login.php')
  .then(response => {
    // 处理成功的响应
    console.log(response.data);
    console.log("123");
  })
  .catch(error => {
    // 处理错误
    console.log("123");
    
  });