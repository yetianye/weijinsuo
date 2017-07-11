'use strict'

$(function(){

	$(window).on('resize',function(){
		var winWidth = $(window).width();
		var ischangePic = winWidth<768;
		$("#ad_main>.carousel-inner>.item").each(function(i,item){
			var url = ischangePic==true?$(item).data('bg-sm'):$(item).data('bg-lg');
			$(item).css("background-image","url("+url+")");

			if(ischangePic){
				// 小于就添加 img
				$(item).html("<img src='"+$(item).data("bg-sm")+"' alt=''>");
			}else{
				// 大于清空img
				$(item).html("");
			}

		});

	// tooltips 初始化
	  	$('[data-toggle="tooltip"]').tooltip();

	  	// 控制 tabs 宽度 自适应
	  	var width = 100;
	  	function nav_tabs_wrapper_width(){
	  		$("#products .nav-tabs-wrapper .nav-tabs>li").each(function(i,item){
	  			width += $(item).width();
	  		})
	  	};
	  	nav_tabs_wrapper_width();
	  	if($(window).width()<width){
	  		$(".nav-tabs-wrapper>.nav-tabs").css("width",width);
	  	}else{
	  		$(".nav-tabs-wrapper>.nav-tabs").css("width","100%");
	  	}

	}).trigger('resize');

	
	/**
	 *  新闻 tab js
	 */
	
	$(".my-nav>li").on("click",function(){

		$(".my-nav>li").removeClass('active');
		// 隐藏其他 tab
		$(".news-tab").hide();
		$(this).addClass('active');
		
		// 渐入当前 tab
		$($(".news-tab")[$(this).index()]).fadeIn('fast');
		$('.new-title').text($(this).data('title'));

	})

	/**
	 * @Author    Tianye      Ye
	 * 吸顶效果 
	 */
	$('#fixed').affix({
	  offset: {
	    top: 100,
	    bottom: function () {
	      return (this.bottom = $('.footer').outerHeight(true))
	    }
	  }
	})
	/**
	 * 移动端 
	 * 设置轮播图滑动变换
	 * 
	 */
	
	var $carousels = $(".carousel");
	var startX,endX;
	var offsetX = 50;
	// 开始滑动时候 距离
	$carousels.on("touchstart",function(e){
		// 获取 touch 属性 参数
		// console.log(e.originalEvent.changedTouches[0].clientX);
		startX = e.originalEvent.changedTouches[0].clientX;

	});
	// 滑动后距离
	$carousels.on("touchmove",function(e){
		// 获取 touch 属性 参数
		// console.log(e.originalEvent.changedTouches[0].clientX);
		endX = e.originalEvent.changedTouches[0].clientX;
		//移动距离绝对值
		var distanceX = Math.abs(startX - endX);

		// 判断方向
		if(distanceX > offsetX){
			$(this).carousel(startX > endX ? "next":"prev");
		}
	});
	
	
	


	// if((endX-startX) > offsetX){
	// 	$carousels.carousel('prev');// bootstrap 原生方法
	// }else if((endX-startX)  offsetX){

	// }
});