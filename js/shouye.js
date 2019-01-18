window.onload=function(){
	

$(".wx1").mouseover(function(){
	$(".wx").show();
});
$(".app1").mouseover(function(){
	$(".app").show();
});
$(".wx1").mouseout(function(){
	$(".wx").hide();
});
$(".app1").mouseout(function(){
	$(".app").hide();
});
$(".wdgjw").mousemove(function(){
	$(".dropdown-menu").show();
});
$(".wdgjw").mouseout(function(){
	$(".dropdown-menu").hide();
});
//top end

//allsp


$(".logo-l-l1").mouseover(function(){
	$(".logo-c2").css("display","block");
	$(".logo-c3").css("display","none");
	$(".logo-c4").css("display","none");
	$(".logo-c5").css("display","none");
	$(".logo-c6").css("display","none");
	$(".logo-c7").css("display","none");
	$(".logo-cc3").hide();
	$(".logo-c2-l").show();
	$(".logo-c2-r").show();
	
});
//$(".logo").mouseout(function(){
//	$(".logo-c2-l").hide();
//	$(".logo-c2-l").hide();
//	$(".logo-cc3").show();
//	$(".logo-c2").hide();
//});
$(".logo-l-l2").mouseover(function(){
	$(".logo-c2").css("display","none");
	
	$(".logo-c4").css("display","none");
	$(".logo-c5").css("display","none");
	$(".logo-c6").css("display","none");
	$(".logo-c7").css("display","none");
	
	$(".logo-c3").show();
	$(".logo-cc3").hide();
	$(".logo-c3-l").show();
	$(".logo-c3-r").show();
});
//$(".logo-l-l2").mouseout(function(){
//	$(".logo-c3-r").hide();
//	$(".logo-c3-l").hide();
//	$(".logo-cc3").show();
//	$(".logo-c3").hide();
//});
$(".logo-l-l3").mouseover(function(){
	$(".logo-c2").css("display","none");
	$(".logo-c3").css("display","none");
	
	$(".logo-c5").css("display","none");
	$(".logo-c6").css("display","none");
	$(".logo-c7").css("display","none");
	
	$(".logo-c4").show();
	$(".logo-cc3").hide();
	$(".logo-c4-l").show();
	$(".logo-c4-r").show();
});
//$(".logo-l-l3").mouseout(function(){
//	$(".logo-c4-r").hide();
//	$(".logo-c4-l").hide();
//	$(".logo-cc3").show();
//	$(".logo-c4").hide();
//});
$(".logo-l-l4").mouseover(function(){
	$(".logo-c2").css("display","none");
	$(".logo-c3").css("display","none");
	$(".logo-c4").css("display","none");
	
	$(".logo-c6").css("display","none");
	$(".logo-c7").css("display","none");
	$(".logo-c5").show();
	$(".logo-cc3").hide();
	$(".logo-c5-l").show();
	$(".logo-c5-r").show();
});
//$(".logo-l-l4").mouseout(function(){
//	$(".logo-c5-r").hide();
//	$(".logo-c5-l").hide();
//	$(".logo-cc3").show();
//	$(".logo-c5").hide();
//});
$(".logo-l-l5").mouseover(function(){
	$(".logo-c2").css("display","none");
	$(".logo-c3").css("display","none");
	$(".logo-c4").css("display","none");
	$(".logo-c5").css("display","none");
	
	$(".logo-c7").css("display","none");
	$(".logo-c6").show();
	$(".logo-cc3").hide();
	$(".logo-c6-l").show();
	$(".logo-c6-r").show();
});
//$(".logo-l-l5").mouseout(function(){
//	$(".logo-c6-r").hide();
//	$(".logo-c6-l").hide();
//	$(".logo-cc3").show();
//	$(".logo-c6").hide();
//});
$(".logo-l-l6").mouseover(function(){
	$(".logo-c2").css("display","none");
	$(".logo-c3").css("display","none");
	$(".logo-c4").css("display","none");
	$(".logo-c5").css("display","none");
	$(".logo-c6").css("display","none");
	$(".logo-c7").show();
	$(".logo-cc3").hide();
	$(".logo-c7-l").show();
	$(".logo-c7-r").show();
});
$(".allSp").mousemove(function(){
	$(".logo-cc3").css("display","block");
	$(".logo-c2").css("display","none");
	$(".logo-c3").css("display","none");
	$(".logo-c4").css("display","none");
	$(".logo-c5").css("display","none");
	$(".logo-c6").css("display","none");
	$(".logo-c7").css("display","none");
})
//$(".logo-l-l6").mouseout(function(){
//	$(".logo-c7-l").hide();
//	$(".logo-c7-r").hide();
//	$(".logo-cc3").show();
//	$(".logo-c7").hide();
//});



//allsp end

$(".r-side-1").mousemove(function(){
	$(".l-side").show();
	$(".l-side-1").show();
	$(".l-side-2").hide();
	$(".l-side-3").hide();
	$(".l-side-4").hide();
	
});
$(".r-side-2").mousemove(function(){
	$(".l-side").show();
	$(".l-side-2").show();
	$(".l-side-1").hide();
	$(".l-side-3").hide();
	$(".l-side-4").hide();
	
});
$(".r-side-x").mousemove(function(){
	$(".l-side").show();
	$(".l-side-1").hide();
	$(".l-side-2").hide();
	$(".l-side-3").show();
	$(".l-side-4").hide();
	
});
$(".r-side-t").mousemove(function(){
	$(".l-side").show();
	
	$(".l-side-2").hide();
	$(".l-side-3").hide();
	$(".l-side-1").hide();
	$(".l-side-4").show();
});




$(".r-side-1").mouseout(function(){
	$(".l-side").hide();
	$(".l-side-1").hide();
});
$(".r-side-2").mouseout(function(){
	$(".l-side").hide();
	$(".l-side-2").hide();
});
$(".r-side-3").mouseout(function(){
	$(".l-side").hide();
	$(".l-side-3").hide();
});
$(".r-side-4").mouseout(function(){
	$(".l-side").hide();
	$(".l-side-4").hide();
});

//side end
$(".con-12-cl").click(function(){
	$(".c12-c1").hide();
	$(".c12-c2").show();
	$(".c12-c3").hide();
});
$(".con-12-cr").click(function(){
	$(".c12-c1").hide();
	$(".c12-c3").show();
	$(".c12-c2").hide();
});
}
