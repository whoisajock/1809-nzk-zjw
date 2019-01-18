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
	$.get("http://47.104.244.134:8080/cartlist.do",{token:$.cookie("token")},function(data){
		var str = "";
		for(var i = 0; i < data.length; i++){
		str += `<li data-id="${data[i].id}" data-gid="${data[i].gid}">
		<input type="checkbox"> 
		<span>${data[i].goods.name}</span>
		<span class="price">${data[i].goods.price}</span>
		<span class="minusBtn">-</span>
		<span class="count">${data[i].count}</span>
		<span class="plusBtn">+</span>
		<span class="perTotle">${data[i].count*data[i].goods.price}</span>
		<span class="delBtn">删除</span>
		</li>`
	}
	$("#cartList").html(str);
	$("#cartList input").prop("checked",true);
	getTotlePrice();
	$(".minusBtn").on("click",function(){
		changePrice(this,-1);				
	})
	$(".plusBtn").on("click",function(){
		changePrice(this,1);
	})
	$("input").on("click",function(){
		getTotlePrice();
		})
	})

function getTotlePrice(){
	var sum = 0;
	$("input:checked").siblings(".perTotle").each(function(){
		sum += parseInt($(this).html());
	});
		$("#totalPrice").html(sum);
}
				
function changePrice(_this,num1){
	if(num1==1){
	var num = $(_this).prev().html();
	$(_this).prev().html(++num);
}
	if(num1==-1){
	var num = $(_this).next().html();
	$(_this).next().html(--num);
}
	var price = $(_this).parent().find(".price").html()*num;
	$(_this).parent().find(".perTotle").html(price)
	getTotlePrice();
	$.get("http://47.104.244.134:8080/cartupdate.do",{
		id:$(_this).parent().attr("data-id"),
		gid:$(_this).parent().attr("data-gid"),
		token:$.cookie("token"),
		num:num1
		})
	}				
});