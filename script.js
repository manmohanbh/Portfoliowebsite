$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
  
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// contact form validation

function validation(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    //for user
    if(user == ""){
        document.getElementById('username').innerHTML = "** please fill the username field";
        return false;
    }
    //function -> !isNaN() for checking enter string is char or not 
    if(!isNaN(user))
    {
        document.getElementById('username').innerHTML = "** user field must in characters";
        return false;
    }
    if((user.length <= 6) || (user.length > 20))
    {
        document.getElementById('username').innerHTML = "** user length must b/w 6 and 10";
        return false;
    }

    //for email
    if(email == ""){
        document.getElementById('emails').innerHTML = "** please fill email field";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
    {
        document.getElementById('emails').innerHTML = "** . Invalid position";
        return false;
    }
    if(email.indexof('@') <= 0)
    {
        document.getElementById('emails').innerHTML = "** Invalid position";
        return false;
    }
     
    //for subject
    if(subject == ""){
        document.getElementById('subjects').innerHTML = "** please fill subject filed";
        return false;
    }
    
    //for message
    if(message == ""){
        document.getElementById('messages').innerHTML = "** please fill message field";
        return false;
    }
    

}

