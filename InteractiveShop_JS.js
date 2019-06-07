$(document).ready(function() {
  console.log('hallo');

  var $miniimages = $(".mini-productimage");
  console.log("$miniimages", $miniimages);


  $miniimages.hover(function(event) {
    var $chlickedImage = $(event.target);
    console.log("$chlickedImage", $chlickedImage);

    $(".mini-productimage").removeClass("choosen-mini-productimage");
    $(this).addClass("choosen-mini-productimage")

    var sujet = $chlickedImage.attr('data-target');
    console.log(sujet);

    $(".big-productimage").removeClass("choosen-productimage");
    $(".js-image-" + sujet).addClass("choosen-productimage");
  });

  var $shoppingcartButton = $(".shoppingcart-button");
  console.log("$shoppingcartButton", $shoppingcartButton);

  $shoppingcartButton.click(function() {
    console.log("that click was made");
    $(".shoppingcart-box").removeClass("shoppingcart-hidden");

    var $cart = $('.shoppingcart-box');
    var htmlString = `<dl class="cart-item">Mini Actioncamera Go Pro Hero 6</dl>`;


    $cart.append(htmlString);
    $shoppingcartButton.attr('disabled', true);

  });

  var $shoppingcartBox = $(".shoppingcart-navigation-box");
  console.log("$shoppingcartBox", $shoppingcartBox);

  $shoppingcartBox.click(function() {
    console.log("shoppingcart in navigation was clicked");
    $(".shoppingcart-box").toggleClass("shoppingcart-hidden");
  });


});
