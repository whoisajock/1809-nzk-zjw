window.onload=function(){
	$(".cen-sm").click(function(){
	$(".cen-r-b").show();
	$(".cen-r-b2").hide();
});
$(".cen-zh").click(function(){
	$(".cen-r-b2").show();
	$(".cen-r-b").hide();
});

$("#btn").click(function(){
	if(!$("#pas").val()){
		$(".b2-1 p").html("骚年你的密码没写！！！").show();
	}
	if(!$("#tet").val()){
		$(".b2-1 p").html("骚年你的手机号没写！！！").show();
	};
});

var a=/^[0-9]{11,13}$/;
	$("#btn").click(function(){
		var b=/^[a-z0-9_-]{6,18}$/;
		var aa=0
		if(a.test($("#tet").val())){
			if(b.test($("#pas").val())){
				aa=4;//2f
			}else{
				aa=3;//sf mbf
			};
		}else{
			if(b.test($("#pas").val())){
				aa=2;//sbf mmf
			}else{
				aa=1;//2bf
			};
		}
	
		if(aa==4){
			$(".b2-1 p").html("手机号密码输入正确").css("color","red").show();
		}else if(aa==3){
			$(".b2-1 p").html("手机号输入正确，但密码错误").css("color","red").show();
		}else if(aa==2){
			$(".b2-1 p").html("手机号输入错误,密码输入正确").css("color","red").show();
		}else if(aa==1){
			$(".b2-1 p").html("手机密码都不正确").css("color", "red").show();
		}
		
	});
	
	$(function(){
				$("#btn").click(function(){
					$.post("http://47.104.244.134:8080/userlogin.do",{
						name:$(".cen-sm").val(),
						password:$(".cen-zh").val()
					},function(data){
						if(data.code==0){
							$.cookie("token",data.data.token);
							
						}
						location.href = "shouye.html";
					})
				})
			});
}