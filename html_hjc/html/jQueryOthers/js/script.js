
$(document).ready(function(){
	$("#databtn1").click(function(){
		$("#datadiv1").data("greeting", "Hello World");
	});
	$("#databtn2").click(function(){
		alert($("#datadiv1").data("greeting"));
	});

	$("#eachbtn").click(function(){
		$("#lia,#lib,#lic").each(function(){
			alert($(this).text())
		});
	});

	$("#getbtn").click(function(){
		x=$("#getp").get(0);
		$("#getdiv").text(x.nodeName + ": " + x.innerHTML);
	});
	$("#li1,#li2,#li3").click(function(){
		alert($(this).index());
	});

	$("#hidebtn").click(function(){
		$("#hidep1,#hidep2").hide();
	});

	 personObj=new Object();
  personObj.firstname="John";
  personObj.lastname="Doe";
  personObj.age=50;
  personObj.eyecolor="blue"; 
  $("#parambtn").click(function(){
    $("#paramdiv").text($.param(personObj));
  });

    $("#btna").click(function(){
    x=$("#lix,#liy,#liz").toArray()
      for (i=0;i<x.length;i++)
      {
      alert(x[i].innerHTML);
      }
  });
});