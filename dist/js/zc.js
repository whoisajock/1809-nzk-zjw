window.onload=function(){
	var a=/^[0-9]{11,13}$/;
	$("#btn").click(function(){
		if(!a.test($("#c1-1").val())){
			$("#c1-2").val("手机号请输入正确").css("color","red").show();
			
		}else{
			$("#c1-2").val("手机号输入正确").css("color","red").show();
		}
	});
	
	var b=/^[a-z0-9_-]{6,18}$/;
	$("#btn").click(function(){
		if(!a.test($("#c2-1").val())){
			$("#c3-2").val("密码请输入正确").css("color","red").show();
		}else{
			$("#c3-2").val("密码格式正确").css("color","red").show();
		};
		if($("#c3-1").val()!=$("#c4-1").val()){
			$("#c3-2").val("两次密码内容不符").css("color","red").show();
		}else{
			$("#c3-2").val("两次密码内容符合").css("color","red").show();
		}
	});
		
	
	$("#c1-1").blur(function(){
					var val = $(this).val();
					//http://47.104.244.134:8080/
					
					$.get("http://47.104.244.134:8080/username.do",{username:val},function(data){
						if(data.code==0){
							$("#c1-2").val("手机号已被注册").css("color","red").show();
						}
					})
					
				})
	
				$("#c2-1").blur(function(){
					var val = $(this).val();
					//http://47.104.244.134:8080/
					
					$.get("http://47.104.244.134:8080/useremail.do",{email:val},function(data){
						if(data.code==0){
							console.log("邮箱已被占用");
						}
					})
					
				})

				$("#btn").click(function(){
					$.post("http://47.104.244.134:8080/usersave.do",{
						username:$("#c1-1").val(),
						password:$("#c3-1").val(),
						email:$("#c2-1").val(),
						sex:$("#c2-2").val()
					},function(data){
						//location.href = "delu.html";
					})
					
				})
}
