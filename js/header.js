
window.addEventListener('load', () =>{
    if(document.documentElement.clientWidth >= 1000){
        const header = document.getElementById('header');
        const nav = document.querySelectorAll('.nav-menu__element__link');
        const h1 = document.getElementsByTagName('h1');

        window.addEventListener('scroll',() => {
            if(scrollY > 10){
                header.classList.add('down-header');
                h1[0].style.color = "#539AF5";
                for(let i = 0;i < nav.length; i ++) {
                    nav[i].style.color = "#333"; 
                } 
            } else {
                header.classList.remove('down-header');
                h1[0].style.color = "#FFF";
                for(let i = 0;i < nav.length; i ++) {
                    nav[i].style.color = "#FFF"; 
                }
            }
        })
    }
    
})


 
