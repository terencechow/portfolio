// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/



$(document).ready(function() {

  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    var s;
    s = skrollr.init({
      forceHeight: false
    });
    skrollr.menu.init(s);
  }
  available_space = $(".project-description").width();
  $("#image_1").load(function() {
    width_of_image = $("#image_1").width();
    number_can_fit = Math.floor(available_space / width_of_image);
    if (number_can_fit >1){
      margin_to_add = (available_space - number_can_fit * width_of_image) / (number_can_fit -1);
      window.number_of_clicks = Math.ceil(10 / number_can_fit);
      window.number_of_clicks = (window.number_of_clicks == 1) ? 1: window.number_of_clicks -1;
      window.space_to_move = available_space + margin_to_add;
      $("#icebreaker .project-screenshots").children().css("margin-right", margin_to_add);  
    } else {
      margin_to_add = (available_space - width_of_image)/2;
      $("#icebreaker .project-screenshots").children().css("margin-right", margin_to_add);
      $("#icebreaker .project-screenshots").children().css("margin-left", margin_to_add);
      window.number_of_clicks = 9;
      window.space_to_move = margin_to_add*2 + width_of_image;
    }
  });

  $(window).resize(function(){
    console.log("i'm resizing")
      if (clicked >0){
        $("#image_1").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_2").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_3").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_4").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_5").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_6").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_7").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_8").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_9").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        $("#image_10").animate({
          left: "+=" + clicked * space_to_move
        }, 800);
        window.clicked = 0;
        $("#left-arrow").fadeTo(300,0,function(){
          $("#left-arrow").css("visibility","hidden");  
        });
        $("#right-arrow").css("visibility","visible");
        $("#right-arrow").fadeTo(300,1);
      }
      available_space = $(".project-description").width();
      width_of_image = $("#image_1").width();
      number_can_fit = Math.floor(available_space / width_of_image);
      if (number_can_fit >1){
        margin_to_add = (available_space - number_can_fit * width_of_image) / (number_can_fit -1);
        window.number_of_clicks = Math.ceil(10 / number_can_fit);
        window.number_of_clicks = (window.number_of_clicks == 1) ? 1: window.number_of_clicks -1;
        window.space_to_move = available_space + margin_to_add;
        $("#icebreaker .project-screenshots").children().css("margin-right", margin_to_add);  
      } else {
        margin_to_add = (available_space - width_of_image)/2;
        $("#icebreaker .project-screenshots").children().css("margin-right", margin_to_add);
        $("#icebreaker .project-screenshots").children().css("margin-left", margin_to_add);
        window.number_of_clicks = 9;
        window.space_to_move = margin_to_add*2 + width_of_image;
      }
  });
});



var clicked = 0;

showRightIBScreenshots = function() {
  if (clicked < number_of_clicks) {
    $("#image_1").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_2").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_3").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_4").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_5").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_6").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_7").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_8").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_9").animate({
      left: "-=" + space_to_move
    }, 800);
    $("#image_10").animate({
      left: "-=" + space_to_move
    }, 800);
    clicked +=1;
    if (clicked == number_of_clicks){
      $("#right-arrow").fadeTo(300,0,function(){
        $("#right-arrow").css("visibility","hidden");
      })
    } 
    if (clicked == 1) {
      $("#left-arrow").css("visibility","visible");
      $("#left-arrow").fadeTo(300,1);
    }
  }
};

showLeftIBScreenshots = function() {
  if (clicked > 0) {
    $("#image_1").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_2").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_3").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_4").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_5").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_6").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_7").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_8").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_9").animate({
      left: "+=" + space_to_move
    }, 800);
    $("#image_10").animate({
      left: "+=" + space_to_move
    }, 800);
    clicked -=1;
    if (clicked == number_of_clicks -1){
      $("#right-arrow").css("visibility","visible");
      $("#right-arrow").fadeTo(300,1);
    }
    if (clicked == 0){
      $("#left-arrow").fadeTo(300,0,function(){
        $("#left-arrow").css("visibility","hidden");  
      });
    }
  }
};


showRightREPScreenshots = function(){
  $("#rep_2").animate({
    opacity: 0
  }, 800);
  $("#rep_3").animate({
    opacity: 1
  }, 800);
  
  $("#right-arrow-rep").fadeTo(300,0,function(){
    $("#right-arrow-rep").css("visibility","hidden");  
  });
  $("#left-arrow-rep").css("visibility","visible");
  $("#left-arrow-rep").fadeTo(300,1);
}

showLeftREPScreenshots = function(){
  $("#rep_2").animate({
    opacity: 1
  }, 800);
  $("#rep_3").animate({
    opacity: 0
  }, 800);
  $("#right-arrow-rep").css("visibility","visible");
  $("#right-arrow-rep").fadeTo(300,1);
  $("#left-arrow-rep").fadeTo(300,0,function(){
    $("#left-arrow-rep").css("visibility","hidden");  
  }); 
}