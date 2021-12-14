

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

// This function will hide the image of my family upon loading
function onLoadFirstPage(){
    document.getElementById("mySlideImage").style.visibility = 'hidden';
}

// This function controls the fade in upon scrolling down
function loadFadeIn(){
    let content = document.querySelector('.row2');
    content.classList.add('active');
    
}


// This function uses switch statement to control a clickable text witch at first shows the first image
// and then next changes the image. The text changes with the image as well

var imgClickCount = 0;

function onClickText(){
    document.getElementById("mySlideImage").style.visibility = 'visible';

    // if statement is for resetting the counter so that the process starts over
    if(imgClickCount == 1){
        imgClickCount = 0;
    }
    else {
        imgClickCount++; // else we increase the count 
    }
    
    // switch to set the src of the image and set the appropriate text
    switch (imgClickCount){

        case 0: document.getElementById("mySlideImage").src = "/Milestone 1/images/mygirls.jpg";
                document.getElementById("clickPicText").innerText = "My Daughters, Izabella and Natalee"
            break;
        case 1: document.getElementById("mySlideImage").src = "/Milestone 1/images/wife.jpg";
        document.getElementById("clickPicText").innerText = "Me and my lovely wife, Nicole"
            break;
        
    }
}



