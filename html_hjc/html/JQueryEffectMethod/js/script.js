$(document).ready(function()
{
	$("#Animatebtn1").click(function(){
		$("#Animatebox").animate({height:"300px"});
	});
	$("#Animatebtn2").click(function(){
		$("#Animatebox").animate({height:"100px"});
	});
	$("#clearQueuestart").click(function(){
		$("#clearQueuediv").animate({height:300},1500);
		$("#clearQueuediv").animate({width:300},1500);
		$("#clearQueuediv").animate({height:100},1500);
		$("#clearQueuediv").animate({width:100},1500);
	});
	$("#clearQueuestop").click(function(){
		$("#clearQueuediv").clearQueue();
	});
	$("#delaybtn").click(function(){
		$("#delaydiv1").delay("slow").fadeIn();
		$("#delaydiv2").delay("fast").fadeIn();
		$("#delaydiv3").delay(800).fadeIn();
		$("#delaydiv4").delay(2000).fadeIn();
		$("#delaydiv5").delay(4000).fadeIn();
	});
	$("#dequeuestart").click(function(){
		var div = $("#dequeuediv");  
		div.animate({height:300},"slow");
		div.animate({width:300},"slow");
		div.queue(function () {
			div.css("background-color","red");  
			div.dequeue();
		});
		div.animate({height:100},"slow");
		div.animate({width:100},"slow");
	});
	$("#fadeInbtn1").click(function(){
		$("#fadeInp").fadeOut()
	});
	$("#fadeInbtn2").click(function(){
		$("#fadeInp").fadeIn();
	});
	$("#fadetobtn").click(function(){
		$("#fadetop").fadeTo(1000,0.4);
	});
	$("#fadeTogglebtn").click(function(){
		$("#fadeTogglediv1").fadeToggle();
		$("#fadeTogglediv2").fadeToggle("slow");
		$("#fadeTogglediv3").fadeToggle(3000);
	});
	$("#finishstart").click(function(){
		$("#finishdiv").animate({height:300},3000);
		$("#finishdiv").animate({width:300},3000);
	});
	$("#finishcomplete").click(function(){
		$("#finishdiv").finish();
	});
	$(".hidebtn1").click(function(){
		$("#hidep").hide();
	});
	$(".hidebtn2").click(function(){
		$("#hidep").show();
	});

	$("#queuebtn").click(function(){
		var div = $("#queuediv");
		div.animate({height:300},"slow");
		div.animate({width:300},"slow");
		div.animate({height:100},"slow");
		div.animate({width:100},"slow");
		$("#queuespan").text(div.queue().length);   
	});
	$(".dlidebtn1").click(function(){
		$("#slidep").slideUp();
	});
	$(".slidebtn2").click(function(){
		$("#slidep").slideDown();
	});
  $("#slideTogglebtn").click(function(){
    $("#slideTogglep").slideToggle();
  });

  $("#stopstart").click(function(){
    $("#stopdiv").animate({height:300},3000);
    $("#stopdiv").animate({width:300},3000);
  });
  $("#stopstop").click(function(){
    $("#stopdiv").stop();
  });





});