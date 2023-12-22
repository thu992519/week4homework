console.log("serise");

let navbtn=document.querySelectorAll(".ser-nav");

navbtn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        console.log(e.target.classList);
    })
})