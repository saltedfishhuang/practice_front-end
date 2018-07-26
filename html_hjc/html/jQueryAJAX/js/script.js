$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("/statics/demosource/demo_test.txt");
  });
   $("#ajaxbtn2").click(function(){
    $("#ajaxdiv2").load("/statics/demosource/demo_test.txt");
  });
   $("#ajaxbtn3").click(function(){
		$.get("/statics/demosource/demo_test.php",function(data,status){
			alert("数据: " + data + "\n状态: " + status);
		});
	});
});