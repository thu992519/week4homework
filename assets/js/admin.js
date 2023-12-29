import axios from 'axios';

let navlink=document.querySelectorAll(".nav-link");
let head=document.querySelector('.table-head');
let mytable=document.querySelector("#mytable");
let newbtn=document.querySelector("#m_new_btn");
let edit_send=document.querySelector("#m_update_btn");



let list=[]; 

navlink.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        navlink.forEach((other)=>{
            other.classList.remove("active");
        })
        
        item.classList.add("active");

      
        if(e.target.classList[5]=="member"){
            axios.get('http://127.0.0.1/topicphp/admin/getmember.php',{ headers: {
                'Content-Type': 'application/json',
                'admintest': 'admintest' // 這裡的值可以是任何你想要傳遞的字串
              },}).then((res)=>{
                
                list=res.data;
              
                showdata(list);
                editshow();
                  
            })
        }
        if(e.target.classList[5]=="products"){
            console.log("p");
            mytable.innerHTML=``;

        }
    })
})



function showdata(list){
    let str='';
   
    head.innerHTML=`<tr>
    <th>會員編號</th>
    <th>會員名稱</th>
    <th>會員城市</th>
    <th>建檔時間</th>
    <th>修改/刪除</th>
</tr>`

    list.forEach((item)=>{
       str+=` <tr>
       <td data-th="會員編號" >${item.ID}</td>
       <td data-th="會員名稱" >${item.name}</td>
       <td data-th="會員城市" >${item.city}</td>
       <td data-th="建檔時間" >${item.lastlogindatetime}</td>
       <td data-th="修改/刪除">
           <button class="btn btn-success edit"  data-bs-toggle="modal" data-bs-target="#updateModal"
           data-id="${item.ID}"  data-name="${item.name}" data-city="${item.city}" data-time="${item.lastlogindatetime}">修改</button>
           <button class="btn btn-danger" data-id="${item.ID}" id="del">刪除</button>
       </td>
   </tr>`;
    })
    
    mytable.innerHTML=str;

} 

init();

function init(){
    axios.get('http://127.0.0.1/topicphp/admin/getmember.php',{ headers: {
        'Content-Type': 'application/json',
        'admintest': 'admintest' // 這裡的值可以是任何你想要傳遞的字串
      },}).then((res)=>{
        
        list=res.data;
      
        showdata(list);
        editshow();
    })
}

//按下修改
function editshow(){
    let edit_button=document.querySelectorAll(".edit");
    edit_button.forEach((item)=>{
        item.addEventListener("click",function(){

            document.querySelector('#m_pname').value=item.getAttribute('data-name');
            document.querySelector('#m_city').value=item.getAttribute('data-city');  

            edit_send.addEventListener("click",function(){
                console.log(document.querySelector('#m_pname').value);
                axios.put('http://127.0.0.1/topicphp/admin/update.php', { m_id:item.getAttribute('data-id'),m_pname: item.getAttribute('data-name') ,m_city:item.getAttribute('data-city')},{ headers: {
                  'Content-Type': 'application/json',
                  'admintest': 'admintest' // 這裡的值可以是任何你想要傳遞的字串
                },})
                  .then(response => {
                    console.log(response);
                    // location.reload();
                
                  })
                  .catch(error => {
                    console.log(error);
                   
                  });
                })
                
           
        })
    })
}
