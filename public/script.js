 $(document).ready(function(){
    $('ul.tabs').tabs();
  console.log("carousel...")
   $('.carousel-slider').slider({full_width: true});//slider init
  $('.slider').slider({full_width: true});//slider init
  //$('.carousel.carousel-slider').carousel({full_width: true});

//par defaut on va désactiver les animations
$('.slider').slider('pause');
  $('.next').click(function() {

      $('.slider').slider('next');

    });

     $('.prev').click(function() {

      $('.slider').slider('prev');

    });

    //ajouter animation au titre
    $('#titre').animate({"color":"#efbe5c","font-size":"32pt"}, 1000);
    $("#titre").rotate(360);
    $('#titre').hover(function() {
    $(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
});


/*animation*/


/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/
  $('#slide2Element1').animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $('#slide2Element1').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');

$('#slide2Element1').hover(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
});

$('#slide2Element1').click(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
});

/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/



/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/
  $('.slide3').animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $('.slide3').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');

$('.slide3').hover(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
  $(this).addClass('hover') ;

},function(){ $(this).removeClass('hover') });

$('.slide3').click(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
});

/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/

/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/
  /*$('.slide4').animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $('.slide4').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');*/

$('.slide4').fadeIn(3000);

$('.slide4').hover(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
  $(this).addClass('hover') ;

},function(){ $(this).removeClass('hover') });

$('.slide4').click(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
});


//animation pour la classe minimum
$('.minimum').click(function() {
//$(this).animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $(this).animate({"color":"#efbe5c","font-size":"20pt"}, 1000);
});




/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/

/*_-_--_-_-_-_-_-_-_-_-_-_-__-_-_-_-__-_-_-_*/
  /*$('.slide4').animate({"color":"#efbe5c","font-size":"48pt"}, 1000);
    $('.slide4').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');*/

$('.slide5P').fadeIn(3000);




  });
