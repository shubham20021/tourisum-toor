
let cont = document.querySelector('.contact-btn');

let cra = document.querySelector('.crack');

var button = document.querySelector('#subm');

var output = document.querySelector('.thank');

var hide = document.querySelector('.contact-ani');

let vid = document.querySelector('.back-video');

let filt = document.querySelector('.video-btn');

let nav = document.querySelector('.first');

let notalo = document.querySelector('.not-al');

let upp = document.querySelector('.contact-btn2');

let upcomingsss = document.querySelector('.booking-box');




button.addEventListener('click', function abc(){

    let a = document.querySelector('#name').value;

    let b = document.querySelector('#numbers').value;

    let c = document.querySelector('#mail-to').value;

   

    if(a == ''){
        alert('Fill Your Name');
    }
    else if(b == ''){
        alert('Fill Your Number');
    }
    else if(c == ''){
        alert('Fill Your Email');
    }
    else{      
        alert('Thankyou we will contact you soon' + ' ' + a);
    }
   

}); 

  
    
function now(){
    hide.style.transform = 'translateY(0%)';
    vid.style.filter = 'blur(3px)';
    filt.style.filter = 'blur(3px)';
    nav.style.filter = 'blur(3px)';
  };

  function kk(){
    hide.style.transform = 'translateY(-200vh)';
    upcomingsss.style.transform = 'translateY(-200vh)'
    vid.style.filter = 'blur(0)';
    filt.style.filter = 'blur(0)';
    nav.style.filter = 'blur(0)';
  };
  


 function upco(){
    upcomingsss.style.transform = 'translateY(0%)';
    vid.style.filter = 'blur(3px)';
    filt.style.filter = 'blur(3px)';
    nav.style.filter = 'blur(3px)';
  };

//   script js





