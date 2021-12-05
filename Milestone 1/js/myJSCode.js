

// This event listener will upon scroll make text appear and grow
// will work on multiple devices

window.addEventListener('scroll', ()=> {
    let content = document.querySelector('.row');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if(contentPosition < screenPosition){
        content.classList.add('active');
    }
    else{
        content.remove.classList('active');
    }
});