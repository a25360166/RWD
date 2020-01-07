$(document).ready(function(){



    $(".plus").click(function(){
        $(".dietary1").slideToggle("Slow")
        if($("#cos").attr("src")==="images/OCR-A_char_Plus_Sign.png"){
        
             $("#cos").attr("src","images/OCR-B_char_Plus_Sign.png");    
            } else{
        $("#cos").attr("src","images/OCR-A_char_Plus_Sign.png");
            }
    });
    

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1000){
            $(".GOTOP").fadeIn("Slow");
        } else {
            $(".GOTOP").fadeOut("Slow");
        }
    });

    $(".GOTOP").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    

    $(".ccc1").click(function(){
        $(".viewwindow1").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc2").click(function(){
        $(".viewwindow2").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc3").click(function(){
        $(".viewwindow3").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc4").click(function(){
        $(".viewwindow4").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc5").click(function(){
        $(".viewwindow5").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc5").click(function(){
        $(".viewwindow5").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc6").click(function(){
        $(".viewwindow6").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc6").click(function(){
        $(".viewwindow6").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc7").click(function(){
        $(".viewwindow7").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc8").click(function(){
        $(".viewwindow8").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".ccc9").click(function(){
        $(".viewwindow9").fadeIn(500);
        $(".window1").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });


    $(".X").click(function(){
        $(".window1").fadeOut(500);
        $(".viewwindow1").fadeOut(500);
        $(".viewwindow2").fadeOut(500);
        $(".viewwindow3").fadeOut(500);
        $(".viewwindow4").fadeOut(500);
        $(".viewwindow5").fadeOut(500);
        $(".viewwindow6").fadeOut(500);
        $(".viewwindow7").fadeOut(500);
        $(".viewwindow8").fadeOut(500);
        $(".viewwindow9").fadeOut(500);
        $("body").removeClass("stopscroll")
    });

    $(".Dietary-Requirements").click(function(){
        $(".fruit_checkbox").slideDown("Slow");
        $(".furit_checkbox").slideToggle("Slow");
    });


});



