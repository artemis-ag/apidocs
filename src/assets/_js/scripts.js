$(window).ready(function () {
    $('html').addClass('has-js')
    $('body').addClass('is-loaded')
})

$(document).ready(function () {
    $('.js-toggle-menu').click(function() {
        $('.js-toggle-menu, .nav').toggleClass('is-active')
    })
})

// function throttle(fn, threshhold, scope) {
//   threshhold || (threshhold = 250);
//   var last,
//       deferTimer;
//   return function () {
//     var context = scope || this;

//     var now = +new Date,
//         args = arguments;
//     if (last && now < last + threshhold) {
//       // hold on to it
//       clearTimeout(deferTimer);
//       deferTimer = setTimeout(function () {
//         last = now;
//         fn.apply(context, args);
//       }, threshhold);
//     } else {
//       last = now;
//       fn.apply(context, args);
//     }
//   };
// }

// $(window).ready(function() {
//   $('body').addClass('loaded')
// })

// $(document).ready(function() {

//   $('.hamburger').click(function() {
//     $('.hamburger, .navigation').toggleClass('active')
//   })

//   $(window).resize(function() {
//     var width = $('body').outerWidth();
//     if (width > 1025) {
//       if ($('video').length > 0) {
//         $('video').attr('autoplay', 'autoplay');
//         $('video').get(0).play();
//       }
//     } else {
//       $('video').removeAttr('autoplay');
//     }
//   });

//   $(window).trigger('resize');

//   $(window).scroll( function(){

//     if ($('.footer-top ul').css('float') == 'right') {
//       var scroll = $(window).scrollTop()
//       var height = $(window).height()
//       var pos = scroll + height;  
//       var opacity = 1 - (scroll / height / 0.4)
//       $('.hero-content').css('opacity', opacity)

//       var green = $('.home-learn-green').offset().top + $('.home-learn-green').outerHeight();
//       var white = $('.home-learn-white').offset().top + $('.home-learn-white').outerHeight();
//       var purple = $('.home-create').offset().top + $('.home-create').outerHeight();
//       var footerTop = $('.footer-top').offset().top + $('.footer-top').outerHeight();
//       var footer = $('.footer').offset().top + $('.footer').outerHeight();

//       if( pos > green - 250 &&  !$('.home-learn-green').hasClass('active')) { 
//         $('.home-learn-green').addClass('active')      
//       }

//       if( pos > white - 350 &&  !$('.home-learn-white').hasClass('active')) { 
//         $('.home-learn-white').addClass('active')      
//       } 

//       if( pos > purple - 300 &&  !$('.home-create').hasClass('active')) { 
//         $('.home-create').addClass('active')      
//       } 

//       if( pos > footerTop &&  !$('.footer-top').hasClass('active')) { 
//         $('.footer-top').addClass('active')      
//       } 

//       if( pos > footer - 10 &&  !$('.footer').hasClass('active')) { 
//         $('.footer').addClass('active')      
//       } 
//     }
//   });

//   // Contact form
//   $("#contact-form").submit(function( event ) {
//     $("#contact-messages").empty();

//     if($('#name').val() == '') {
//       $('#name').focus();
//       $("#contact-messages").append('<li class="error">Please enter a name.</li>');
//       return false;
//     }

//     if($('#email').val() == '') {
//       $('#email').focus();
//       $("#contact-messages").append('<li class="error">Please enter an email address.</li>');
//       return false;
//     }
//   });

//   $('#contact-form').ajaxForm(function() {
//     $('#name').val('');
//     $('#email').val('');
//     $('#message').val('');
//     $('#try_demo').attr('checked', false);
//     $('#email_list').attr('checked', false);
//     $("#contact-messages").append('<li class="success">Thank you! You should receive a response shortly.</li>');
//   });

//   // Google analytics
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//   ga('create', 'UA-67849311-1', 'auto');
//   ga('send', 'pageview');


// })




