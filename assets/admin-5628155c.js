import"./main-3338764d.js";import{a as o}from"./axios-28bc18a3.js";let n=document.querySelectorAll(".nav-link"),c=document.querySelector(".table-head"),i=document.querySelector("#mytable"),d=[];n.forEach(e=>{e.addEventListener("click",a=>{n.forEach(t=>{t.classList.remove("active")}),e.classList.add("active"),a.target.classList[5]=="member"&&o.get("http://127.0.0.1/topicphp/admin/getmember.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{d=t.data,l(d),s()}),a.target.classList[5]=="products"&&(console.log("p"),i.innerHTML="")})});function l(e){let a="";c.innerHTML=`<tr>
    <th>會員編號</th>
    <th>會員名稱</th>
    <th>會員城市</th>
    <th>建檔時間</th>
    <th>修改/刪除</th>
</tr>`,e.forEach(t=>{a+=` <tr>
       <td data-th="會員編號" >${t.ID}</td>
       <td data-th="會員名稱" >${t.name}</td>
       <td data-th="會員價格" >${t.city}</td>
       <td data-th="建檔時間" >${t.lastlogindatetime}</td>
       <td data-th="修改/刪除">
           <button class="btn btn-success edit"  data-bs-toggle="modal" data-bs-target="#updateModal"
           data-id="${t.ID}"  data-name="${t.name}" data-city="${t.city}" data-time="${t.lastlogindatetime}">修改</button>
           <button class="btn btn-danger" data-id="${t.ID}" id="del">刪除</button>
       </td>
   </tr>`}),i.innerHTML=a}r();function r(){o.get("http://127.0.0.1/topicphp/admin/getmember.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(e=>{d=e.data,l(d),s()})}function s(){document.querySelectorAll(".edit").forEach(a=>{a.addEventListener("click",function(){console.log(a),console.log(a.getAttribute("data-id"))})})}
