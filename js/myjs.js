$(document).ready(function(){
//	//点击改变底部导航栏背景样式
//	$('footer ul li').click(function(){
//		var index=$(this).index();
//		$('footer ul li').eq(index).css({
//			background:'linear-gradient(#CBCBCB,#999999)'
//		}).siblings().css({
//			background:'linear-gradient(#F0F0F0,#CBCBCB)'
//		})
//	})

    //获取当天日期
	var a = new Array("日", "一", "二", "三", "四", "五", "六");  
	var week = new Date().getDay();  
	var str1 = "星期"+ a[week]; 
	
	var myDate = new Date();
	var yue=myDate.getMonth()+1
	var ri=myDate.getDate()
	var str0=yue+'月'+ri+'日'
	$('#time').text(str0+' '+str1)
	
	//获取域名
	var yuming=parseInt(window.location.host)
	$('#logo').attr("src","img/2345.png");
	if(yuming==2345){
		$('#logo').attr("src","img/2345.png");
	}
	else if(yuming==360){
		$('#logo').attr("src","img/360.png");
	}
	else if(yuming==123){
		$('#logo').attr("src","img/123.png");
	}
	else {
		$('#logo').attr("src","img/limao.png");
	}
	
	//自动聚焦
	window.onload=function(){
		var $inputs = $("input[type=text]");
    	$inputs[0].focus(event);
	}


})




