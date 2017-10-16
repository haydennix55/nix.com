$('a').hover(
       function(){ $(this).removeClass('hide') },
       function(){ $(this).addClass('hide') }
)

$(".lasp-link").hover(
               function() {
                   $( ".wrapper" ).addClass( "lasp" );
               }, function() {
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
                    $( ".wrapper" ).addClass( "ux" );
                }, function() {
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
                    $( ".wrapper" ).addClass( "minimal" );
                }, function() {
                    $( ".wrapper" ).removeClass( "minimal" );
                }
            );

$(".design-link").hover(
              function() {
                    $( ".wrapper" ).addClass( "design" );
                }, function() {
                    $( ".wrapper" ).removeClass( "design" );
                }
            );
$('design-link').hide();
$('write-link').hide();
$('min-link').hide();
$('userex-link').hide();
$('fashion-link').hide();
$('sneaker-link').hide();
