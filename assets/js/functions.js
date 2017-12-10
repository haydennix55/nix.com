function preload() {
    var img = loadImage('../img/sneaker4.gif');
}


$('a').hover(
       function(){ $(this).removeClass('hide') },
       function(){ $(this).addClass('hide') }
)

$(".lasp-link").hover(
               function() {
                   document.getElementById("learn-more-lasp").style.display = "block";
                   $( ".wrapper" ).addClass( "lasp" );
               }, function() {
                   document.getElementById("learn-more-lasp").style.display = "none";
                   $( ".wrapper" ).removeClass( "lasp" );
               }
           );

$(".sneaker-link").hover(
              function() {
                  $( ".wrapper" ).addClass( "sneaker" );
              }, function() {
                  $( ".wrapper" ).removeClass( "sneaker" );
              }
          );

$(".userex-link").hover(
              function() {
                    document.getElementById("learn-more-UX").style.display = "block";
                    $( ".wrapper" ).addClass( "ux" );
                }, function() {
                    document.getElementById("learn-more-UX").style.display = "none";
                    $( ".wrapper" ).removeClass( "ux" );
                }
            );

$(".fashion-link").hover(
              function() {
                    $( ".wrapper" ).addClass( "fashion" );
                }, function() {
                    $( ".wrapper" ).removeClass( "fashion" );
                }
            );

$(".min-link").hover(
              function() {
                    document.getElementById("learn-more-inspires").style.display = "block";
                    $( ".wrapper" ).addClass( "minimal" );
                }, function() {
                    document.getElementById("learn-more-inspires").style.display = "none";
                    $( ".wrapper" ).removeClass( "minimal" );
                }
            );

$(".design-link").hover(
              function() {
                    document.getElementById("learn-more-inspires").style.display= "block";
                    $( ".wrapper" ).addClass( "design" );
                }, function() {
                    document.getElementById("learn-more-inspires").style.display = "none";
                    $( ".wrapper" ).removeClass( "design" );
                }
            );


$('design-link').hide();
$('write-link').hide();
$('min-link').hide();
$('userex-link').hide();
$('fashion-link').hide();
$('sneaker-link').hide();

$(".arrow-open").hover(
    function() {
        document.getElementById("arrow-holder").style.visibility = "visible";

    }, function() {
        document.getElementById("arrow-holder").style.visibility = "hidden";
    }
);


function openNav(x) {

    x.classList.toggle("change")

    if (document.getElementById("sidenav").style.width != "0px" && document.getElementById("sidenav").style.width != "") {
        document.getElementById("sidenav").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    } else {
        document.getElementById("sidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";

    }

}
