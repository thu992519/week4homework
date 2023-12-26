import axios from 'axios';

let btn=document.querySelector("#ok_btn")



btn.addEventListener("click",function(){
    let acc=document.querySelector("#admin").value;
    let password=document.querySelector("#password").value;
    // console.log(acc);
    // console.log(password);
axios.post('http://127.0.0.1/topicphp/loginpdo.php', { admin: acc ,password:password},{ headers: {
  'Content-Type': 'application/json',
  'admintest': 'admintest' // 這裡的值可以是任何你想要傳遞的字串
},})
  .then(response => {
    console.log(response);
    console.log(response.data);
    console.log(response.data[0].ID);

    if(acc==response.data[0].admin){
      if(password==response.data[0].password){
        location.replace('admin.html');
      }else{
        alert('密碼錯誤');
      }
    }else{
      alert('帳號錯誤');
    }
    

  })
  .catch(error => {
    console.log(error);
    // console.log('前台的失敗')
  });
})
