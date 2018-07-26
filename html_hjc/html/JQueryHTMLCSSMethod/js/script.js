	$(document).ready(function(){
		$("#addclassbtn").click(function(){
			$("#addclassp1").addClass("addclassintro");
		});
  $("#afterbtn").click(function(){
    $("#afterp1,#afterp2").after("<p>Hello world!</p>");
  });
  $("#appendbtn1").click(function(){
    $("#appendp1,#appendp2").append(" <b>Appended text</b>.");
  });
  $("#appendbtn2").click(function(){
    $("#appendol").append("<li>Appended item</li>");
  });
  $("#appendtobtn").click(function(){
    $("<span>Hello World!</span>").appendTo("#appendtop1,#appendtop2");
  });
 $("#attrbtn").click(function(){
    $("#attrimg").attr("width","500");
  });
  $("#brforebtn").click(function(){
    $("#beforep1,#beforep2").before("<p>Hello world!</p>");
  });
 $("#clonebtn").click(function(){
    $("#clonep1,#clonep2").clone().appendTo("body");
  });

  $("#detachbtn").click(function(){
    $("#detachp1,#detachp2").detach();
  });

$("#emptybtn").click(function(){
  $("#empytdiv").empty();
  });

  $("#hasclassbtn").click(function(){
    alert($("#hasclassp1,#hasclassp2").hasClass("intro"));
  });


	});
