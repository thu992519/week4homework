import"./main-3338764d.js";import{a as n}from"./axios-28bc18a3.js";let c=document.querySelectorAll(".nav-link"),p=document.querySelector(".table-head"),i=document.querySelector("#mytable"),m=document.querySelector("#m_new_btn"),u=document.querySelector("#m_update_btn"),o=[];c.forEach(a=>{a.addEventListener("click",e=>{c.forEach(t=>{t.classList.remove("active")}),a.classList.add("active"),e.target.classList[5]=="member"&&n.get("http://127.0.0.1/topicphp/admin/getmember.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{o=t.data,s(o),r()}),e.target.classList[5]=="products"&&(console.log("p"),i.innerHTML="")})});function s(a){let e="";p.innerHTML=`<tr>
    <th>會員編號</th>
    <th>會員名稱</th>
    <th>會員城市</th>
    <th>建檔時間</th>
    <th>修改/刪除</th>
</tr>`,a.forEach(t=>{e+=` <tr>
       <td data-th="會員編號" >${t.ID}</td>
       <td data-th="會員名稱" >${t.name}</td>
       <td data-th="會員城市" >${t.city}</td>
       <td data-th="建檔時間" >${t.lastlogindatetime}</td>
       <td data-th="修改/刪除">
           <button class="btn btn-success edit"  data-bs-toggle="modal" data-bs-target="#updateModal"
           data-id="${t.ID}"  data-name="${t.name}" data-city="${t.city}" data-time="${t.lastlogindatetime}">修改</button>
           <button class="btn btn-danger del" data-id="${t.ID}" id="del">刪除</button>
       </td>
   </tr>`}),i.innerHTML=e}h();function h(){n.get("http://127.0.0.1/topicphp/admin/getmember.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(a=>{o=a.data,s(o),r(),b(),g()})}function r(){document.querySelectorAll(".edit").forEach(e=>{e.addEventListener("click",function(){let t=document.querySelector("#m_pname");t.value=e.getAttribute("data-name");let l=document.querySelector("#m_city");l.value=e.getAttribute("data-city"),u.addEventListener("click",function(){console.log(e.getAttribute("data-name")),n.post("http://127.0.0.1/topicphp/admin/update.php",{m_id:e.getAttribute("data-id"),m_pname:t.value,m_city:l.value},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(d=>{console.log(d),location.reload()}).catch(d=>{console.log(d)})})})})}function b(){m.addEventListener("click",function(){let a=document.querySelector("#m_new_pname"),e=document.querySelector("#m_new_city");n.post("http://127.0.0.1/topicphp/admin/creatadmin.php",{m_pname:a.value,m_city:e.value},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{console.log(t),console.log(t.data),location.reload()}).catch(t=>{console.log(t)})})}function g(){document.querySelectorAll(".del").forEach(e=>{e.addEventListener("click",function(){console.log(e),console.log(e.getAttribute("data-id")),n.post("http://127.0.0.1/topicphp/admin/delmember.php",{m_id:e.getAttribute("data-id")},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{console.log(t),console.log(t.data),location.reload()}).catch(t=>{console.log(t)})})})}
