const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
allSideMenu.forEach(item => {
    const li = item.parentElement;
    item.addEventListener("click" , ()=> {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// toggle sidebar
/* 
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sideBar = document.getElementById('sidebar');
menuBar.addEventListener("click" ,()=> {
    sideBar.classList.toggle("hide");
})*/



const searchBtn = document.querySelector('#content nav  form .form-input button');
const searchBtnIcon = document.querySelector('#content nav  form .form-input button .bx');
const searchForm = document.querySelector('#content nav  form');
searchBtn.addEventListener("click" , function(e) {
    if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchBtnIcon.classList.replace('bx-search' , 'bx-x');

        }else{
            searchBtnIcon.classList.replace('bx-x' , 'bx-search');
        }
    }
});

const sideBar = document.getElementById('sidebar');
if(window.innerWidth < 768){
    sideBar.classList.add('hide');
}else if(window.innerWidth > 576 ){
    searchBtnIcon.classList.replace('bx-x' , 'bx-search');
    searchForm.classList.remove('show');
}


window.addEventListener("resize" , ()=>{
    if(this.innerWidth > 576){
        searchBtnIcon.classList.replace('bx-x' , 'bx-search');
        searchForm.classList.remove('show');

    }
})