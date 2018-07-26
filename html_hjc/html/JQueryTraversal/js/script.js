$(document).ready(function(){
	$("#addh1").add("#addp1,#addp2").add("#addspan1,#addspan2").css("background-color","yellow");
	$("#contentbtn").click(function(){
		$("#contentdiv").contents().filter("em").wrap("<b/>");
	});
	$("#eachbtn").click(function(){
		$("li").each(function(){
			alert($(this).text())
		});});
	$("#eqp1,#eqp2,#eqp3,#eqp4").eq(1).css("background-color","yellow");
	$("#filtrep1,#filterp2,#filterp3,#filterp4").filter(".intro").css("background-color","yellow");
	$("div p").first().css("background-color","yellow");
	$("p").has("span").css("background-color","yellow");
	$("div p").last().css("background-color","yellow");
	$("li.start").next().css({"color":"red","border":"2px solid red"});
	$("li.start").nextAll().css({"color":"red","border":"2px solid red"});
	$("li.start").nextUntil("li.stop").css({"color":"red","border":"2px solid red"});
 $("#notp1,#notp2,#notp3,#notp4").not(".not").css("background-color","yellow");
  $("button").click(function(){
    $("p").offsetParent().css("background-color","red");
  });
  $("li.start").prev().css({"color":"red","border":"2px solid red"});
   $("li.start").siblings().css({"color":"red","border":"2px solid red"});
});