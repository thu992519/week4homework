import"./main-3338764d.js";import{a as n}from"./axios-28bc18a3.js";let c=document.querySelectorAll(".nav-link"),s=document.querySelector(".table-head"),p=document.querySelector("#mytable"),u=document.querySelector("#m_new_btn"),m=document.querySelector("#m_update_btn"),i=[],d=[];c.forEach(e=>{e.addEventListener("click",a=>{c.forEach(t=>{t.classList.remove("active")}),e.classList.add("active"),a.target.classList[5]=="member"&&n.get("http://127.0.0.1/topicphp/admin/getmember.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{d=t.data,h(d),r()}),a.target.classList[5]=="products"&&(console.log("p"),_())})});function h(e){let a="";s.innerHTML=`<tr>
    <th>會員編號</th>
    <th>會員名稱</th>
    <th>會員城市</th>
    <th>建檔時間</th>
    <th>修改/刪除</th>
</tr>`,e.forEach(t=>{a+=` <tr>
       <td data-th="會員編號" >${t.ID}</td>
       <td data-th="會員名稱" >${t.name}</td>
       <td data-th="會員城市" >${t.city}</td>
       <td data-th="建檔時間" >${t.lastlogindatetime}</td>
       <td data-th="修改/刪除">
           <button class="btn btn-success edit"  data-bs-toggle="modal" data-bs-target="#updateModal"
           data-id="${t.ID}"  data-name="${t.name}" data-city="${t.city}" data-time="${t.lastlogindatetime}">修改</button>
           <button class="btn btn-danger del" data-id="${t.ID}" id="del">刪除</button>
       </td>
   </tr>`}),p.innerHTML=a}b();function b(){n.get("http://127.0.0.1/topicphp/admin/getmember.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(e=>{d=e.data,h(d),r(),g(),y()})}function r(){document.querySelectorAll(".edit").forEach(a=>{a.addEventListener("click",function(){let t=document.querySelector("#m_pname");t.value=a.getAttribute("data-name");let l=document.querySelector("#m_city");l.value=a.getAttribute("data-city"),m.addEventListener("click",function(){console.log(a.getAttribute("data-name")),n.post("http://127.0.0.1/topicphp/admin/update.php",{m_id:a.getAttribute("data-id"),m_pname:t.value,m_city:l.value},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(o=>{console.log(o),location.reload()}).catch(o=>{console.log(o)})})})})}function g(){u.addEventListener("click",function(){let e=document.querySelector("#m_new_pname"),a=document.querySelector("#m_new_city");n.post("http://127.0.0.1/topicphp/admin/creatadmin.php",{m_pname:e.value,m_city:a.value},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{console.log(t),console.log(t.data),location.reload()}).catch(t=>{console.log(t)})})}function y(){document.querySelectorAll(".del").forEach(a=>{a.addEventListener("click",function(){console.log(a),console.log(a.getAttribute("data-id")),n.post("http://127.0.0.1/topicphp/admin/delmember.php",{m_id:a.getAttribute("data-id")},{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(t=>{console.log(t),console.log(t.data),location.reload()}).catch(t=>{console.log(t)})})})}function _(){n.get("http://127.0.0.1/topicphp/admin/getproduct.php",{headers:{"Content-Type":"application/json",admintest:"admintest"}}).then(e=>{console.log("456"),i=e.data,$(i)})}function $(e){let a="";s.innerHTML=`<tr>
    <th>產品編號</th>
    <th>產品名稱</th>
    <th>產品價格</th>
    <th>產品類型</th>
    <th>產品路徑</th>
    <th>建檔時間</th>
    <th>修改/刪除</th>
</tr>`,e.forEach(t=>{a+=` <tr>
       <td data-th="會員編號" >${t.pid}</td>
       <td data-th="會員名稱" >${t.pname}</td>
       <td data-th="會員價格" >${t.price}</td>
       <td data-th="會員類別" >${t.class}</td>
       <td data-th="會員路徑" >${t.path}</td>
       <td data-th="建檔時間" >${t.lastlogindatetime}</td>
       <td data-th="修改/刪除">
           <button class="btn btn-success edit"  data-bs-toggle="modal" data-bs-target="#updateModal"
           data-id="${t.pid}"  data-name="${t.pname}"  data-price="${t.price}" data-class="${t.class}" data-path="${t.path}" data-time="${t.lastlogindatetime}">修改</button>
           <button class="btn btn-danger pdel" data-id="${t.pid}" id="pdel">刪除</button>
       </td>
   </tr>`}),p.innerHTML=a}
