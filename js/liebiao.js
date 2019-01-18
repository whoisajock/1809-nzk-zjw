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
	$(".logo-c2").show();
	$(".logo-c1").hide();
	$(".logo-c2-l").show();
	$(".logo-c2-r").show();
});
$(".logo-l-l1").mouseout(function(){
	$(".logo-c2-l").hide();
	$(".logo-c2-l").hide();
	$(".logo-c1").show();
	$(".logo-c2").hide();
});
$(".logo-l-l2").mouseover(function(){
	$(".logo-c3").show();
	$(".logo-c1").hide();
	$(".logo-c3-l").show();
	$(".logo-c3-r").show();
});
$(".logo-l-l2").mouseout(function(){
	$(".logo-c3-r").hide();
	$(".logo-c3-l").hide();
	$(".logo-c1").show();
	$(".logo-c3").hide();
});
$(".logo-l-l3").mouseover(function(){
	$(".logo-c4").show();
	$(".logo-c1").hide();
	$(".logo-c4-l").show();
	$(".logo-c4-r").show();
});
$(".logo-l-l3").mouseout(function(){
	$(".logo-c4-r").hide();
	$(".logo-c4-l").hide();
	$(".logo-c1").show();
	$(".logo-c4").hide();
});
$(".logo-l-l4").mouseover(function(){
	$(".logo-c5").show();
	$(".logo-c1").hide();
	$(".logo-c5-l").show();
	$(".logo-c5-r").show();
});
$(".logo-l-l4").mouseout(function(){
	$(".logo-c5-r").hide();
	$(".logo-c5-l").hide();
	$(".logo-c1").show();
	$(".logo-c5").hide();
});
$(".logo-l-l5").mouseover(function(){
	$(".logo-c6").show();
	$(".logo-c1").hide();
	$(".logo-c6-l").show();
	$(".logo-c6-r").show();
});
$(".logo-l-l5").mouseout(function(){
	$(".logo-c6-r").hide();
	$(".logo-c6-l").hide();
	$(".logo-c1").show();
	$(".logo-c6").hide();
});
$(".logo-l-l6").mouseover(function(){
	$(".logo-c7").show();
	$(".logo-c1").hide();
	$(".logo-c7-l").show();
	$(".logo-c7-r").show();
});
$(".logo-l-l6").mouseout(function(){
	$(".logo-c7-l").hide();
	$(".logo-c7-r").hide();
	$(".logo-c1").show();
	$(".logo-c7").hide();
});



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



$(function(){
				$.get("http://47.104.244.134:8080/goodsbytid.do",{
					tid:13,
					page:1,
					limit:10
				},function(data){
					var listData = data.data;
					var str = "";
					
					for(var i = 0; i < listData.length; i++){
						str += `<li>
						<a href="xq.html?id=${listData[i].id}">
						<img src="${listData[i].picurl}">
						<p>${listData[i].name}</p>
						<p>${listData[i].price}</p>
						</a>
						</li>`;
					}
					
					$("#prodList").html(str);
					
					
				})
			})