import axios from 'axios';

let btn=document.querySelector("#ok_btn")



btn.addEventListener("click",function(){
    let acc=document.querySelector("#admin").value;
    let password=document.querySelector("#password").value;
    console.log(acc);
    console.log(password);
axios.post('http://127.0.0.1/topicphp/loginpdo.php', { admin: acc ,password:password})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
})
