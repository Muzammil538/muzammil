const navSlide = ()=>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        
        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwords ${index / 7 + 0.5}s`;
            }
        });
    });

}


const main = ()=>{
    navSlide();
}
main();