// to underline the navbar item of the page section as page is scrolled
$('body').scrollspy({ target: '#navbar-scroll' });

// to change the background and font color of the Navbar when page scrolled
// function to switch between 2 classes assigned with different background and font colors
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 250);
});

// to display the tooltip when twitter icon is hovered
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

// to hide and show the email with click for contact section jQuery
$(function () {
    $("a#hidden").click(function (e) {
        //console.log('Fired');
        var secret = function () { return atob('c21AbW9yaWthZ2xvYmFsLmNvbQ==') };
        $(this).attr("href", 'mailto:' + secret());
        $(this).text(secret());
        $(this).off("click");
        e.preventDefault();
    });
});

// Contact Form input valiadtion

function validateForm() {
    var name = document.contactform.name.value,
        emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/,
        email = document.contactform.email.value,
        message = document.contactform.message.value;

    if (name == "") {
        document.getElementById("errormsg1").innerHTML =
            "Please enter your name.";
        // console.log("no Name entered!");
        // return false and data will not be posted
        return false;
    } else {
        document.getElementById("errormsg1").innerHTML = "";
    } if (email == "") {
        document.getElementById("errormsg2").innerHTML =
            "Please enter your Email.";
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("errormsg2").innerHTML =
            "Please enter the valid email";
        return false;
    } else {
        document.getElementById("errormsg2").innerHTML = "";
    } if (message == "") {
        document.getElementById("errormsg3").innerHTML =
            "Please type your message.";
        return false;
    } else {
        document.getElementById("errormsg3").innerHTML = "";
        // console.log("all ok!");
        // return true will post the data
        return true;
    }
}