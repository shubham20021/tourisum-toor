let mess = document.querySelector('.quest');
let ask = document.querySelector('.asker');
let cro = document.querySelector('#cross-mes');
let no = document.querySelector('.asker');
let reset = document.querySelector('#rest');
let fit = document.querySelector('.name');
let po = document.querySelector('.pop');
let ms = document.querySelector('#mst');
let togel = document.querySelector('.toggel');
let maine = document.querySelector('.main-mob');




let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-header');
let namespam = document.querySelectorAll('.shott');
let namespam2 = document.querySelectorAll('.shott2');


window.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    namespam.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400)
    });
    setTimeout(() => {
      namespam.forEach((span, idx)=>{
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        },(idx + 1) * 50);
      })
    },3000);
    setTimeout(() => {
      intro.style.top = ('-100vh')
    }, 3300);

    setTimeout(() => {
      intro.style.top = ('-100vh')
    }, 3300);

  },)
});
window.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    namespam2.forEach((span, idx) => {
      setTimeout(() => {
        ms.style.overflow = ('hidden');
        span.classList.add('active');
      }, (idx + 1) * 400);
    });
    setTimeout( () => {
      namespam2.forEach((span, idx) => {
        setTimeout(() => {
          ms.style.overflow = ('hidden');
          span.classList.remove('active');
          span.classList.add('fade');
        },(idx + 1) * 50);
       
      });
    },3000);
    setTimeout(() => {
      intro.style.top = ('-100vh');
      
    }, 3300);
  },);
});






togel.addEventListener('click', function show(){
  if (maine.style.transform === "translateX(0%)") {
    maine.style.transform = "translateX(-120%)";
    maine.style.zIndex = "1";
    maine.style.transition = "all 0.5s ease-in-out";
  } 
  else {
    maine.style.transform = "translateX(0%)";
    maine.style.zIndex = "2";
    maine.style.transition = "all 0.5s ease-in-out";
  }
})

  mess.addEventListener('click', function newmes(){
    ask.style.transform = 'translateY(0)';
  });
  cro.addEventListener('click', function pit(){
    no.style.transform = 'translateY(120%)';
  });
  reset.addEventListener('click', function set(){
    location.reload();
  });

  

  window.onload = function(){
    setTimeout(function(){
      ask.style.transform = 'translateY(0)';
    }, 6000);
    setTimeout(function(){
      ms.style.overflow = ('scroll');
    }, 3300);
   };
  
   
   
   
   
   
   
   
   
   
   
   
  


