  
    AOS.init();

    const text="an SEO Content Writer based in lahore";
    let index=0;
    let speed = 100;
   function  typeWriter(params) {
       if ( index<text.length) {
           document.getElementById("typed").textContent += text.charAt(index);
           index++;
           setTimeout(typeWriter, speed);
       } else{
           setTimeout(()=>{
               reset();
           },1000)
       } 
   }
   function  reset(params) {
       index = 0;
       document.getElementById("typed").textContent = "";
       typeWriter();
   }
   typeWriter();
    
   //about animation
   const text1="SEO Content Writer";
    let index1=0;
    let speed1 = 100;
   function  typeWriter1( ) {
       if ( index1<text1.length) {
           document.getElementById("about-animation").textContent += text1.charAt(index1);
           index1++;
           setTimeout(typeWriter1, speed1);
       } else{
           setTimeout(()=>{
               reset1();
           },1000)
       } 
   }
   function  reset1(params) {
       index1 = 0;
       document.getElementById("about-animation").textContent = "";
       typeWriter1();
   }
   typeWriter1();
   
     
   
    
   
   
   //responsive header
    
   
   
   
     const hamburger = document.querySelector('.hamburger');
       const navLinks = document.querySelector('.nav-link');
       
       hamburger.addEventListener('click', function() {
         navLinks.classList.toggle('show-nav');
       });
       
   //contact us
 
       //scroll animation
       window.addEventListener('load', function() {
       const contentt = document.getElementById('myContent');
       contentt.classList.add('visible'); // Apply the .visible class on page load
   });
   
   
   let sections = document.querySelectorAll('section');
   let mybutton = document.getElementById("myBtn");
      window.onscroll = () => {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
       
       sections.forEach(element=>{
           let off = element.offsetHeight;
    
           if ( window.scrollY >= element.offsetTop &&  window.scrollY <= element.offsetHeight+element.offsetTop) {
               element.classList.add('show');
           }else{
               element.classList.remove('show');
           }
       })
      }
    
      //goo
      function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
   
    
   
   
   
   const toggle = document.querySelectorAll('.toggle-btn');
   
   toggle.forEach(button => {
       button.addEventListener('click', function() {
           // Find the corresponding more-text element within the same content block
           const moreText = this.previousElementSibling.querySelector('.more-text');
           const btnText = this;
   
           if (moreText.style.display === 'none' || moreText.style.display === '') {
               moreText.style.display = 'inline';
               btnText.textContent = 'Read Less';
           } else {
               moreText.style.display = 'none';
               btnText.textContent = 'Read More';
           }
       });
   });
   
  
   //portfolio


   document.getElementById('all').addEventListener('click', function() {
    showProjects('all');
});

document.getElementById('blog').addEventListener('click', function() {
    showProjects('blogs');
});

document.getElementById('article').addEventListener('click', function() {
    showProjects('articles');
});

document.getElementById('pd').addEventListener('click', function() {
    showProjects('pds');
});



document.getElementById('email').addEventListener('click', function() {
    showProjects('emails');
});

document.getElementById('content').addEventListener('click', function() {
    showProjects('contents');
});
function showProjects(filter) {
    const projects = document.querySelectorAll('.project-box1');
    projects.forEach(function(project) {
        if (filter === 'all' || project.classList.contains(filter)) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
}

   
 

//active button
const button = document.querySelectorAll('.btn1');
 

button.forEach((btn)=>{
  btn.addEventListener('click', function() {
    button.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
});
 
})
 

 
const buttons = document.querySelectorAll('.btn11');

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active1'));

        // Find the next button
        
   this.classList.add('active1');
 
    });
});

const openPopupBtn = document.getElementById('blogs'); // single button

const modal = document.getElementById('modal');
const closePopupBtn = document.querySelector('.modal-close');

openPopupBtn.addEventListener('click', function() {
  modal.classList.add('show');
});
closePopupBtn.addEventListener('click', function() {
  modal.classList.remove('show');
});


const openPopupBtn1 = document.getElementById('articles'); // single button
const openPopupBtn2 = document.getElementById('pds'); // single button
const openPopupBtn3 = document.getElementById('emails'); // single button
const openPopupBtn4 = document.getElementById('contents'); // single button
 const closePopupBtn1 = document.querySelector('.modal-close1');
const closePopupBtn2 = document.querySelector('.web-2');
const closePopupBtn3 = document.querySelector('.web-3');
const closePopupBtn4 = document.querySelector('.web-4');



const modal1 = document.getElementById('modal1');
const web2 = document.getElementById('web-2');
const web3 = document.getElementById('web-3');
const  web4 = document.getElementById('web-4');

openPopupBtn1.addEventListener('click', function() {
  modal1.classList.add('show');
});
closePopupBtn1.addEventListener('click', function() {
  modal1.classList.remove('show');
});

openPopupBtn2.addEventListener('click', function() {
 web2.classList.add('show');
});
closePopupBtn2.addEventListener('click', function() {
  web2.classList.remove('show');
});

openPopupBtn3.addEventListener('click', function() {
 web3.classList.add('show');
});
closePopupBtn3.addEventListener('click', function() {
  web3.classList.remove('show');
});

openPopupBtn4.addEventListener('click', function() {
 web4.classList.add('show');
});
closePopupBtn4.addEventListener('click', function() {
  web4.classList.remove('show');
});
