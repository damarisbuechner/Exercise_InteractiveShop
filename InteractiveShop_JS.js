$(document).ready(function(){
 console.log('hallo');

// $(".mini-productimage").click(function() {
// console.log('click');
// $(this).css("stroke", "red");
//   // var boxes = $(".image-box");
//   // console.log(boxes);
//   $(".big-productimage").toggleClass("choosen-productimage")
//   // .addClass("choosen-productimage")
// });

// $(".mini-productimage").click(function(event) {
//    console.log('change that image! 👻');
//    // console.log('event.target: ', event.target);
//
//
//    var index = $(this);
//    console.log("index" + index);
//
//    $(".big-productimage").removeClass("choosen-productimage");

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
