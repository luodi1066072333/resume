//js的入口文件
//引入zepto
// var $ = require('./components/zepto-modules/_custom');
// var wx = require('./components/weixin/jweixin');
var Swiper=require("./components/swiper/swiper-3.3.1.min");
var swiperAnimate=require("./components/swiper/swiper.animate1.0.2.min")


var swiper=new Swiper(".swiper-container",{
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  });


var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;

$('#myiscroll').hide();

$("#enter").tap(function(){
    $('#myiscroll').show();
    $(".swiper-container").hide();

    $.post('/api/skill',{},function(data){
        //console.log(data)
        for(var i=0;i<data.length;i++){
             skil='<ul id="sk_ul">'+
                    '<li>技术类型：'+data[i].category+'</li>'+
                    '<li>水平：'+data[i].level+'</li>'+
                    '<li>技术名称：'+data[i].name+'</li>'+
                    '<li>学习时间：'+data[i].time+'</li>'+
                   '</ul>';
            $('#scroller').append(skil);
        }
       
       var IScroll=require("./components/iscroll/iscroll")
        var myScroll;
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    })
		$('#work').tap(function(){
			$('#scroller').html("")
				$.post('/api/work',{},function(data){
	        //console.log(data)
	        for(var i=0;i<data.length;i++){
	             skil='<ul id="sk_ul">'+
	                    '<li>企业类型：'+data[i].category+'</li>'+
	                    '<li>企业职位：'+data[i].posts+'</li>'+
	                    '<li>企业名称：'+data[i].name+'</li>'+
	                    '<li>工作时间：'+data[i].time+'</li>'+
	                   '</ul>';
	            $('#scroller').append(skil);
	        }
	       
	       var IScroll=require("./components/iscroll/iscroll")
	        var myScroll;
	        myScroll = new IScroll('#wrapper', { mouseWheel: true });
	        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	    })
		})
   
})


//三大规范：AMD CMD comminJS

//index.html中的ani代码
//确保swiper.animate1.0.2.min有接口暴露
//在index.js中引入swiper.animate1.0.2.min
//在index.js中调用动画初始化操作部分，注意写成对象.方法
//在index。css中引入animate。css的动画样式


// require('./components/zepto-modules/ajax');

// module.exports = $;

$("#takepic").tap(function(){
	document.addEventListener( "plusready", onPlusReady, false );
		// 扩展API加载完毕，现在可以正常调用扩展API 
		function onPlusReady() {
			console.log("plusready");
		}
		// 拍照
		function captureImage(){
			var cmr = plus.camera.getCamera();
			var res = cmr.supportedImageResolutions[0];
			var fmt = cmr.supportedImageFormats[0];
			console.log("Resolution: "+res+", Format: "+fmt);
			cmr.captureImage( function( path ){
					alert( "Capture image success: " + path );  
				},
				function( error ) {
					alert( "Capture image failed: " + error.message );
				},
				{resolution:res,format:fmt}
			);
		}
	
})

