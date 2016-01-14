// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){
	init();
})

function init(){
	addSlickForAll();
	addEventHandlers();
	$(window).resize(onResize);
}

function addSlick(sectionId,slidesToShow){
	$( sectionId + ' .project-screenshots-innerContainer').slick({
	  infinite: false,
	  slidesToShow: slidesToShow,
	  slidesToScroll: slidesToShow,
	  prevArrow: sectionId + ' .left-arrows',
	  nextArrow: sectionId + ' .right-arrows'
	});	
}

function addSlickForAll(){
	console.log("adding slick for all")
	if ($(window).width() > 900 ){
		addSlick('#icebreaker',6)
		addSlick('#slsite',2)
		addSlick('#highrise',2)
		addSlick('#humber',2)
		addSlick('#organic',2)
		addSlick('#whateverlinda',2)
		addSlick('#rep',2)
	} else {
		if ($(window).width() > 500 ){
			addSlick('#icebreaker',2)
		} else {
			addSlick('#icebreaker',1)
		}	
		addSlick('#slsite',1)
		addSlick('#highrise',1)
		addSlick('#humber',1)
		addSlick('#organic',1)
		addSlick('#whateverlinda',1)
		addSlick('#rep',1)
	} 
	
}

function removeSlick(sectionId){
	$( sectionId + ' .project-screenshots-innerContainer').slick('unslick');
}

function onResize(){
	removeSlick('#icebreaker');
	removeSlick('#slsite');
	removeSlick('#highrise');
	removeSlick('#humber');
	removeSlick('#organic');
	removeSlick('#whateverlinda');
	removeSlick('#rep');
	addSlickForAll();	
}

function addEventHandlers(){
	$('.right-arrows').on('click',handleRightArrowClicked);
	$('.left-arrows').on('click',handleLeftArrowClicked);
}

function handleRightArrowClicked(e){
	var projectsScreenshots = $(e.currentTarget.offsetParent);
	var image = projectsScreenshots.find('img');
	var numberOfImagesShown = projectsScreenshots.width() / image.outerWidth();
	var translationContainer = projectsScreenshots.find('.slick-track');

	var translationAmount =translationContainer.css('transform') ? translationContainer.css('transform').split(",")[4] : 
	translationContainer.css('-webkit-transform') ? translationContainer.css('-webkit-transform') .split(",")[4] : 
	translationContainer.css('-moz-transform') ? translationContainer.css('-moz-transform') .split(",")[4] : translationContainer.css('-ms-transform') .split(",")[4] 

	var translationAmount = parseInt(translationAmount);

	//10 is arbitrarily used for rounding
	if (translationAmount + translationContainer.width() - numberOfImagesShown * image.outerWidth() * 2 < 10){
		//hide right arrow
		projectsScreenshots.find('.right-arrows').fadeTo(300,0).hide();
		console.log("hiding right arrow")
	} else if (translationAmount == 0){
		//show left arrow
		console.log("showing left arrow")
		projectsScreenshots.find('.left-arrows').fadeTo(300,1).show();
	}
}

function handleLeftArrowClicked(e){
	var projectsScreenshots = $(e.currentTarget.offsetParent);
	var image = projectsScreenshots.find('img');
	var numberOfImagesShown = projectsScreenshots.width() / image.outerWidth();
	var translationContainer = projectsScreenshots.find('.slick-track');

	var translationAmount =translationContainer.css('transform') ? translationContainer.css('transform').split(",")[4] : 
	translationContainer.css('-webkit-transform') ? translationContainer.css('-webkit-transform') .split(",")[4] : 
	translationContainer.css('-moz-transform') ? translationContainer.css('-moz-transform') .split(",")[4] : translationContainer.css('-ms-transform') .split(",")[4] 

	var translationAmount = parseInt(translationAmount);

	//10 is arbitrarily used for rounding
	if (translationAmount + translationContainer.width() - numberOfImagesShown * image.outerWidth() < 10){
		//show right arrow
		projectsScreenshots.find('.right-arrows').fadeTo(300,1).show();
		console.log("showing right arrow")
	} else if (translationAmount + numberOfImagesShown * image.outerWidth() >= 0){
		//hide left arrow
		console.log("hiding left arrow")
		projectsScreenshots.find('.left-arrows').fadeTo(300,0).hide();
	}
}