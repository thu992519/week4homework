import"./main-3338764d.js";import{a as e}from"./axios-28bc18a3.js";let l=document.querySelector("#ok_btn");l.addEventListener("click",function(){let a=document.querySelector("#admin").value,o=document.querySelector("#password").value;e.post("http://127.0.0.1/topicphp/loginpdo.php",{admin:a,password:o},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{console.log(t),console.log(t.data),console.log(t.data[0].ID),a==t.data[0].admin?o==t.data[0].password?location.replace("admin.html"):alert("密碼錯誤"):alert("帳號錯誤")}).catch(t=>{console.log(t)})});
