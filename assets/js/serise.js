console.log("serise");

let navbtn=document.querySelectorAll(".ser-nav");

navbtn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        navbtn.forEach((other)=>{
            other.classList.remove("active");
        })
        
        item.classList.add("active");
        if(e.target.classList[3]=="sunglass"){
            let navpic=document.querySelector(".serpic");
            navpic.innerHTML=`  <div class="imgleft2"></div>
            <div class="imgright2"></div>`
            let titlestr="";
            let str="";
            let title=document.querySelector(".ser-title");
            let suncontent=document.querySelector(".ser-content");
            titlestr=`<p class="mb-0">SUN GLASS</p>
            <p>太陽眼鏡</p>`;
            title.innerHTML=titlestr;
            str=`<div class="row justify-content-center ">
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-7.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-8.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-9.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            
          </div>
          <div class="row justify-content-center mt-1">
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-5.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-6.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-7.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            
          </div>
          <div class="row justify-content-center mt-1 mb-3">
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-9.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-10.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <img src="../assets/img/product-11.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
           
          </div>`;
            suncontent.innerHTML=str;

        }
        if(e.target.classList[3]=="opacial"){
            let navpic=document.querySelector(".serpic");
            navpic.innerHTML=`  <div class="imgleft"></div>
            <div class="imgright"></div>`
            let titlestr="";
            let str="";
            let title=document.querySelector(".ser-title");
            let suncontent=document.querySelector(".ser-content");
            titlestr=`<p class="mb-0">Celluloid Combi</p>
            <p>賽璐鉻鈦金屬混合框</p>`;
            title.innerHTML=titlestr;
            str=`<div class="row justify-content-center ">
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-1.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-2.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-3.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-4.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-1">
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-5.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-6.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-7.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-8.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-1 mb-3">
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-9.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-10.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-11.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-12.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
          </div>`;
            suncontent.innerHTML=str;

        }
        if(e.target.classList[3]=="functional"){
            let navpic=document.querySelector(".serpic");
            navpic.innerHTML=`  <div class="imgleft"></div>
            <div class="imgright2"></div>`
            let titlestr="";
            let str="";
            let title=document.querySelector(".ser-title");
            let suncontent=document.querySelector(".ser-content");
            titlestr=`<p class="mb-0">functional</p>
            <p>機能性眼鏡</p>`;
            title.innerHTML=titlestr;
            str=`<div class="row justify-content-center ">
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-12.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-10.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-4.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-5.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-1">
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-8.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-9.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-7.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-8.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-1 mb-3">
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-9.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-10.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-11.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <img src="../assets/img/product-12.png" alt="">
              <div class="d-flex justify-content-between">
                <div class="left">BJ41600S</div>
                <div class="right"><span class="price">NTD3460</span></div>
              </div>
            </div>
          </div>`;
            suncontent.innerHTML=str;

        }



    })
})