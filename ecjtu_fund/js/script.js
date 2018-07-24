var num = 0;
window.onload = function(){
	var inside = document.getElementById("inside");
	setInterval(function(){
		num-=1;
		inside.style.marginLeft = num+"px";
		console.log(inside.style.marginLeft);
		if(num<=-1060){
			num = 0;
		}
	},1);
}
