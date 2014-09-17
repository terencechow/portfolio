// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/



$(document).ready(function() {
  var s;
  s = skrollr.init({
    forceHeight: false
  });
  skrollr.menu.init(s);
  available_space = $(".project-description").width();
  $("#image_1").load(function() {
    window.width_of_image = $("#image_1").width();
    window.number_can_fit = Math.floor(available_space / width_of_image);
    window.margin_to_add = (available_space - number_can_fit * width_of_image) / (number_can_fit -1);
    window.number_of_clicks = Math.floor(10 / number_can_fit);
    window.number_of_clicks = (window.number_of_clicks == 1) ? 1: window.number_of_clicks -1;
    $("#icebreaker .project-screenshots").children().css("margin-right", margin_to_add);
  });
});

var clicked = 0;

showRightIBScreenshots = function() {
  if (clicked < number_of_clicks) {
    $("#image_1").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_2").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_3").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_4").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_5").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_6").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_7").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_8").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_9").animate({
      left: "-=" + available_space
    }, 800);
    $("#image_10").animate({
      left: "-=" + available_space
    }, 800);
    clicked +=1;
  }
};

showLeftIBScreenshots = function() {
  if (clicked > 0) {
    $("#image_1").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_2").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_3").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_4").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_5").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_6").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_7").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_8").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_9").animate({
      left: "+=" + available_space
    }, 800);
    $("#image_10").animate({
      left: "+=" + available_space
    }, 800);
    clicked -=1;
  }
};


// root = exports ? this
// $(document).ready ->
//   s = skrollr.init(forceHeight: false)
//   skrollr.menu.init s
//   root.available_space = $(".project-description").width()
  
//   $("#image_1").load ->
//     root.width_of_image = $("#image_1").width()
//     root.number_can_fit = Math.floor(available_space / root.width_of_image)
//     root.margin_to_add = (available_space - root.number_can_fit * root.width_of_image) / root.number_can_fit
//     $(".project-screenshots").children().css "margin-right", root.margin_to_add
//     return

//   return

// root.showRightIBScreenshots = ->
//   left = $("#image_1").css("left")
//   number_of_clicks = -1 + Math.floor(10/root.number_can_fit)
//   console.log number_of_clicks
//   end = number_of_clicks*available_space*-1+"px"
//   console.log end
//   console.log left
//   unless left is end
// 	  $("#image_1").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_2").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_3").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_4").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_5").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_6").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_7").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_8").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_9").animate
// 	    left: "-=" + root.available_space
// 	  , 800
// 	  $("#image_10").animate
// 	    left: "-=" + root.available_space
// 	  , 800
//   console.log end
//   console.log left
//   return

// root.showLeftIBScreenshots = ->
//   left = $("#image_1").css("left")
//   unless left is "0px"
// 	  $("#image_1").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_2").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_3").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_4").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_5").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_6").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_7").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_8").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_9").animate
// 	    left: "+=" + root.available_space
// 	  , 800
// 	  $("#image_10").animate
// 	    left: "+=" + root.available_space
// 	  , 800

//   return
