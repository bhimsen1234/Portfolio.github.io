// header toogle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
     document.querySelector('body').classList.toggle('mobile-nav-active');
     this.classList.toggle('fa-xmark')
})

//typing effect
let typed =new Typed('.auto-input' ,{
    strings: ['Web Developer!','Computer Science Student'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
}) 
// Active link state on roll
// get all link
let navlink=document.querySelectorAll('nav ul li a')
// get all section
let sections=document.querySelectorAll('section')
window.addEventListener('scroll',function(){
    const scrollPos=window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlink.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id')==link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });

        }
    });

});