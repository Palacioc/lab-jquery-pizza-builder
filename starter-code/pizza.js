$(document).ready(function() {
  console.log("linked");
  $(".btn-pepperonni").on("click", function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    appendPrice();
  });
  $(".btn-mushrooms").on("click", function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    appendPrice();
  });
  $(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    appendPrice();
  });

  $(".btn-sauce").removeClass("active");
  $(".sauce").hide();
  $(".price li:nth-child(4)").hide();
  $(".btn-sauce").on("click", function(){
    $(".sauce").toggle();
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    appendPrice();
  });

  $(".btn-crust").removeClass("active");
  $(".price li:nth-child(5)").hide();
  $(".btn-crust").on("click", function(){
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    appendPrice();
  });

  price = function(){
    var price = 10;
    if($(".btn-pepperonni").hasClass("active")){price+=1;}
    if($(".btn-mushrooms").hasClass("active")){price+=1;}
    if($(".btn-green-peppers").hasClass("active")){price+=1;}
    if($(".btn-sauce").hasClass("active")){price+=3;}
    if($(".btn-crust").hasClass("active")){price+=5;}
    price="$"+price;
    return price;
  };

  function appendPrice(){
    var pr = price();
    $(".price strong").empty();
    $(".price strong").append(pr);
  }

  appendPrice();

});
