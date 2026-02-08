
//=============================toggle icon navbar===============================//

let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}
//===============toggle icon navbar===============================//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };

    });
    //===============Sticky navbar===============================//

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    //===============toggle icon navbar===============================//

    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
};

//==============  Scroll reveal===============================//
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,

 });
 ScrollReveal().reveal('.home-content, heading', { original: 'top'});
 ScrollReveal().reveal('home-img, .services-container, .portfolio-box, .contact from', { origin: 'buttom'})
 ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});

 //============================typed js=======================//

 const typed = new Typed('.multiple-text', {
    strings: ['Full-stack Deloper','Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });

 /*----------*/
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(this);

    fetch("https://formspree.io/f/xjgevvqa", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Message Sent Successfully ✅");
            contactForm.reset();
        } else {
            alert("Oops! There was a problem ❌");
        }
    }).catch(error => {
        alert("Error: " + error);
    });
});


/*(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();*/
(function () {
    emailjs.init("https://formspree.io/f/xjgevvqa"); // 👈 yahin tumhari PUBLIC KEY
  })();

/*document.getElementById("contact-form")
.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(
    function() {
      alert("Message Sent Successfully ✅");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      alert("Failed ❌ " + error.text);
    }
  );
});*/

  

