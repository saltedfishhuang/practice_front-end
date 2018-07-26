$(document).ready(function(){
	$("#bind").bind("click",function(){
		alert("这个段落被点击了！")
	});
	$("#blur").blur(function(){
		alert("这个输入框失去了焦点！")
	});
	$("#blur").change(function(){
		alert("输入框中的文字发生了改变！")
	});
	$("#change").click(function(){
		alert("The paragraph was clicked.");
	});
	$("#dblclick").dblclick(function(){
		alert("The paragraph was double-clicked.");
	});
	$("#delegatediv").delegate("p","click",function(){
		$("#delegatep").css("background-color","pink");
	});
	$("#currentTargeth1,#currentTargeth2,#currentTargetp").click(function(event){
		alert(event.currentTarget === this);
	});
	$("#data").each(function(i){
		$(this).on("click",{x:i},function(event){
			alert("The " + $(this).index() + ". paragraph has data: " + event.data.x);
		});
	});
	$("#delegateTarget").on("click","button",function(event){
		$(event.delegateTarget).css("background-color", "pink");
	});
	$("#isDefaultPrevented").click(function(event){
		event.preventDefault();
		alert("Was preventDefault() called: " + event.isDefaultPrevented());
	});
	$("#stopImmediatePropagation").click(function(event){
		event.stopImmediatePropagation();
		alert("Was event.stopImmediatePropagation() called: " +  event.isImmediatePropagationStopped());
	});
	$("#isPropagationStopped").click(function(event){
		event.stopPropagation();
		alert(event.isPropagationStopped());
	}); 
	$("#namespacep").on("custom.someNamespace",function(event){
		alert(event.namespace);
	});
	$("#namespacep").click(function(event){
		$(this).trigger("custom.someNamespace");
	});  
	$("#namespacebtn").click(function(){
		$("#namespacep").off("custom.someNamespace");
	});
$(document).mousemove(function(event){ 
    $("#pagexspan").text("X: " + event.pageX + ", Y: " + event.pageY); 
  });
  $(document).mousemove(function(event){ 
    $("#pageyspan").text("X: " + event.pageX + ", Y: " + event.pageY); 
  });
 $("#preventDefaulta").click(function(event){
    event.preventDefault();
  });
$("#relatedTarget").mouseenter(function(event){
alert("relatedTarget is: " + event.relatedTarget);
});
$("#resultbtn").click(function(){
return "Hello world!";
});
$("#resultbtn").click(function(event){
$("#resultp").html(event.result);
});
  $("#stopImmediatePropagationdiv").click(function(event){
    alert("Event handler 1 executed");
      event.stopImmediatePropagation();
  });
  $("#stopImmediatePropagationdiv").click(function(event){
    alert("Event handler 2 executed");
  });
  $("#stopImmediatePropagationdiv").click(function(event){
    alert("Event handler 3 executed");
  });






});