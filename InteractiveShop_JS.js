$(document).ready(function(){
 console.log('hallo');

var $miniimages = $(".mini-productimage");
console.log("$miniimages", $miniimages);


$miniimages.hover(function(event){
  var $chlickedImage = $(event.target);
  console.log("$chlickedImage", $chlickedImage);

  $(".mini-productimage").removeClass("choosen-mini-productimage");
  $(this).addClass("choosen-mini-productimage")

  var sujet = $chlickedImage.attr('data-target');
  console.log(sujet);

  $(".big-productimage").removeClass("choosen-productimage");
  $(".js-image-"+sujet).addClass("choosen-productimage");
});


});
