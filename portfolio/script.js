

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["am a FrontEnd Developer","love Coding","am a Learner","love Web Designing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        
    });
    var typed1 = new Typed(".typing-2",{
        strings: ["am a FrontEnd Developer","love Coding","am a Learner","love Web Designing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

